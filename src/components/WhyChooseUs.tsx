import { motion } from 'motion/react';
import { Clock, CircleDollarSign, MapPin, Home } from 'lucide-react';

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
    <section id="why-us" className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Why Homeowners Choose Fresh Start Landscaping</h2>
              <p className="text-base md:text-lg text-zinc-400 mb-8 leading-relaxed">
                We are Philadelphia's trusted choice for transforming outdoor spaces. Our commitment to excellence, transparent pricing, and superior craftsmanship sets us apart from the competition.
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center">
                        <reason.icon className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{reason.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional landscaping work" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl w-full">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white font-medium italic text-sm sm:text-base">"Fresh Start completely transformed our backyard. Professional, tidy, and unbeatable on price."</p>
                  <p className="text-zinc-300 text-xs sm:text-sm mt-2">— Sarah Jenkins, Philadelphia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
