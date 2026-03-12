import { motion } from 'motion/react';
import { ChevronRight, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-zinc-950">
      {/* Background Image with Premium Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.interioracebd.com/images/lawn-garden-essential-element.jpg"
          alt="Green lawn and pathway landscaping"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-8 shadow-2xl">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="w-px h-4 bg-white/20 mx-1"></span>
              <span className="tracking-wide">#1 Rated Landscaping in Philadelphia</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-6 tracking-tight">
              Elevate Your <br className="hidden md:block" />
              <span className="italic text-emerald-400">Outdoor Living</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl leading-relaxed font-light">
              Award-winning residential and commercial landscaping, designed to transform your property into a masterpiece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(5,150,105,0.3)] hover:shadow-[0_0_60px_rgba(5,150,105,0.5)]"
              >
                <span className="relative z-10">Get Your Free Estimate</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Premium Stats Row */}
            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl">
              <div>
                <p className="text-3xl font-serif text-white mb-1">10+</p>
                <p className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white mb-1">500+</p>
                <p className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Projects Completed</p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <p className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Licensed & Insured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
