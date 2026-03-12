import { motion } from 'motion/react';
import { Leaf, Wind, Scissors, Flower2, Trash2, Snowflake } from 'lucide-react';

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
    title: 'Trimming & Yard Maintenance',
    description: 'Expert hedge trimming, pruning, and ongoing maintenance to keep your property looking sharp.',
    icon: Scissors,
  },
  {
    title: 'Flower Bed & Mulch Installation',
    description: 'Enhance your curb appeal with beautiful flower beds and fresh, high-quality mulch.',
    icon: Flower2,
  },
  {
    title: 'Garbage Removal',
    description: 'Fast and efficient removal of yard waste, debris, and unwanted materials from your property.',
    icon: Trash2,
  },
  {
    title: 'Snow Shoveling & Salting',
    description: 'Reliable winter services to keep your driveways, sidewalks, and parking lots safe and clear.',
    icon: Snowflake,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">Our Landscaping Services</h2>
          <p className="text-base md:text-lg text-zinc-600">
            From routine lawn maintenance to seasonal cleanups and snow removal, we provide everything you need to keep your property looking its best year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-white border border-zinc-100 hover:border-green-600/30 hover:shadow-xl hover:shadow-green-600/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
