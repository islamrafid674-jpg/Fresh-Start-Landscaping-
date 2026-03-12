import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-brand-900/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-12 lg:col-span-5">
            <a href="#" className="flex items-center gap-2 mb-6 inline-block">
              <img 
                src="https://i.imgur.com/WkysPmG.png" 
                alt="Fresh Start Landscaping Logo" 
                className="h-14 w-auto object-contain" 
              />
            </a>
            <p className="max-w-md mb-8 text-lg leading-relaxed text-zinc-400">
              Elevating outdoor spaces with premium residential and commercial landscaping, lawn care, and seasonal cleanups throughout Philadelphia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Home</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-white font-serif text-xl mb-6">Premium Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Lawn Maintenance</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Spring/Fall Cleanup</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Precision Trimming</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Mulch & Soil Installation</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>Winter Snow Removal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Fresh Start Landscaping. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
