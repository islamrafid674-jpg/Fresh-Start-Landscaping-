import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.interioracebd.com/images/lawn-garden-essential-element.jpg"
          alt="Green lawn and pathway landscaping"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}
            >
              Transform Your Yard With Professional Landscaping
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed font-medium">
              Residential & Commercial Lawn Care, Cleanup & Outdoor Improvements in Philadelphia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all hover:shadow-lg hover:shadow-green-600/20"
              >
                Book Your Fresh Start Today
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
