import { motion } from 'motion/react';
import { Clock, CircleDollarSign, MapPin, Home, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Fast & Reliable Service',
    description: 'We show up on time and complete projects efficiently without sacrificing quality.',
    icon: Clock,
  },
  {
    title: 'Fair & Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide clear, upfront quotes for every job.',
    icon: CircleDollarSign,
  },
  {
    title: 'Local Philadelphia Team',
    description: 'Proudly serving the Philly area with local expertise and a community-first approach.',
    icon: MapPin,
  },
  {
    title: 'Residential & Commercial Work',
    description: 'From small home gardens to large commercial properties, we handle it all.',
    icon: Home,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-900 mb-6 leading-tight">
                The Trusted Choice for <span className="italic text-zinc-500">Philadelphia</span> Homeowners
              </h2>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                We don't just cut grass; we cultivate outdoor experiences. Our commitment to excellence, transparent pricing, and superior craftsmanship sets us apart from the competition.
              </p>
              
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-300 shadow-sm">
                        <reason.icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-zinc-900 mb-2">{reason.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative w-full mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional landscaping work" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-[3/4]"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">100% Satisfaction</p>
                  <p className="text-xs text-zinc-500 font-medium">Guaranteed Results</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent flex items-end p-6 sm:p-10 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl w-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white font-serif text-lg sm:text-xl leading-relaxed mb-4">"Fresh Start completely transformed our backyard. Professional, tidy, and unbeatable on quality."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=44" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Sarah Jenkins</p>
                      <p className="text-zinc-300 text-xs">Philadelphia Resident</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
