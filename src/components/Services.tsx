import { motion } from 'motion/react';
import { Leaf, Wind, Scissors, Flower2, Trash2, Snowflake, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Lawn Care',
    description: 'Comprehensive residential and commercial lawn care to keep your grass green, healthy, and pristine.',
    icon: Leaf,
  },
  {
    title: 'Spring Cleanup',
    description: 'Prepare your yard for the growing season by clearing debris, dead leaves, and winter damage.',
    icon: Wind,
  },
  {
    title: 'Trimming & Maintenance',
    description: 'Expert hedge trimming, pruning, and ongoing maintenance to keep your property looking sharp.',
    icon: Scissors,
  },
  {
    title: 'Flower Bed & Mulch',
    description: 'Enhance your curb appeal with beautiful flower beds and fresh, high-quality mulch.',
    icon: Flower2,
  },
  {
    title: 'Garbage Removal',
    description: 'Fast and efficient removal of yard waste, debris, and unwanted materials from your property.',
    icon: Trash2,
  },
  {
    title: 'Snow Shoveling',
    description: 'Reliable winter services to keep your driveways, sidewalks, and parking lots safe and clear.',
    icon: Snowflake,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
              Comprehensive <span className="italic text-zinc-500">Landscaping</span> Solutions
            </h2>
          </div>
          <p className="text-lg text-zinc-600 max-w-md leading-relaxed">
            From routine lawn maintenance to seasonal cleanups, we provide everything you need to keep your property looking its absolute best year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-[2rem] bg-white border border-zinc-100 hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 ease-out"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors duration-500 shadow-sm">
                  <service.icon className="w-7 h-7 text-zinc-700 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-zinc-900 mb-4 group-hover:text-brand-700 transition-colors duration-300">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-brand-600 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
