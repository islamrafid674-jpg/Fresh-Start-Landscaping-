import { floatTo16BitPCM, base64EncodeAudio, base64ToArrayBuffer } from '../lib/audioUtils';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Loader2, X, Sparkles, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

export default function LiveAudioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const playbackQueueRef = useRef<AudioBuffer[]>([]);
  const isPlayingRef = useRef(false);
  const nextPlayTimeRef = useRef(0);

  const connect = async () => {
    try {
      setIsConnecting(true);
      setError(null);

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 16000,
      });

      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are a helpful customer service representative for Fresh Start Landscaping, a residential and commercial lawn care and landscaping company in Philadelphia. Keep answers brief, professional, and friendly. Encourage users to book a free quote.",
        },
        callbacks: {
          onopen: async () => {
            setIsConnected(true);
            setIsConnecting(false);
            
            try {
              const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
              mediaStreamRef.current = stream;
              
              const source = audioContextRef.current!.createMediaStreamSource(stream);
              sourceRef.current = source;
              
              const processor = audioContextRef.current!.createScriptProcessor(4096, 1, 1);
              processorRef.current = processor;
              
              processor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const pcmData = floatTo16BitPCM(inputData);
                const base64Data = base64EncodeAudio(pcmData);
                
                sessionPromise.then((session) => {
                  session.sendRealtimeInput({
                    media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
                  });
                });
              };
              
              source.connect(processor);
              processor.connect(audioContextRef.current!.destination);
            } catch (err) {
              console.error("Microphone error:", err);
              setError("Could not access microphone.");
              disconnect();
            }
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              setIsSpeaking(true);
              const arrayBuffer = base64ToArrayBuffer(base64Audio);
              
              // Decode PCM data manually (16-bit PCM, 24kHz sample rate from Gemini)
              const view = new DataView(arrayBuffer);
              const floatArray = new Float32Array(arrayBuffer.byteLength / 2);
              for (let i = 0; i < floatArray.length; i++) {
                const int16 = view.getInt16(i * 2, true);
                floatArray[i] = int16 / 32768.0;
              }
              
              const audioBuffer = audioContextRef.current!.createBuffer(1, floatArray.length, 24000);
              audioBuffer.getChannelData(0).set(floatArray);
              
              playbackQueueRef.current.push(audioBuffer);
              playNextInQueue();
            }
            
            if (message.serverContent?.interrupted) {
              playbackQueueRef.current = [];
              isPlayingRef.current = false;
              setIsSpeaking(false);
            }
          },
          onclose: () => {
            disconnect();
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            setError("Connection error occurred.");
            disconnect();
          }
        }
      });
      
      sessionRef.current = sessionPromise;

    } catch (err) {
      console.error("Failed to connect:", err);
      setError("Failed to start voice chat.");
      setIsConnecting(false);
    }
  };

  const playNextInQueue = () => {
    if (isPlayingRef.current || playbackQueueRef.current.length === 0 || !audioContextRef.current) {
      if (playbackQueueRef.current.length === 0) {
        setIsSpeaking(false);
      }
      return;
    }

    isPlayingRef.current = true;
    const buffer = playbackQueueRef.current.shift()!;
    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current.destination);
    
    const currentTime = audioContextRef.current.currentTime;
    const startTime = Math.max(currentTime, nextPlayTimeRef.current);
    
    source.start(startTime);
    nextPlayTimeRef.current = startTime + buffer.duration;
    
    source.onended = () => {
      isPlayingRef.current = false;
      playNextInQueue();
    };
  };

  const disconnect = () => {
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (sessionRef.current) {
      sessionRef.current.then((session: any) => session.close()).catch(console.error);
      sessionRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    
    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
    playbackQueueRef.current = [];
    isPlayingRef.current = false;
    nextPlayTimeRef.current = 0;
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl border border-zinc-200 p-6 mb-4 w-80"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                AI Assistant
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-zinc-600 mb-6">
              Have questions about our landscaping services? Talk to our AI assistant in real-time.
            </p>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            <div className="flex flex-col items-center justify-center p-4 bg-zinc-50 rounded-xl border border-zinc-100">
              {!isConnected ? (
                <button
                  onClick={connect}
                  disabled={isConnecting}
                  className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-all shadow-lg disabled:opacity-70"
                >
                  {isConnecting ? <Loader2 className="w-8 h-8 animate-spin" /> : <Mic className="w-8 h-8" />}
                </button>
              ) : (
                <div className="flex flex-col items-center">
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${isSpeaking ? 'bg-green-600/20' : 'bg-zinc-200'}`}>
                    {isSpeaking && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute inset-0 rounded-full border-2 border-green-600"
                      />
                    )}
                    <Volume2 className={`w-8 h-8 ${isSpeaking ? 'text-green-600' : 'text-zinc-500'}`} />
                  </div>
                  <p className="text-sm font-medium text-zinc-700 mb-4">
                    {isSpeaking ? 'AI is speaking...' : 'Listening...'}
                  </p>
                  <button
                    onClick={disconnect}
                    className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium hover:bg-red-200 transition-colors flex items-center gap-2"
                  >
                    <MicOff className="w-4 h-4" />
                    End Call
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <Sparkles className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
