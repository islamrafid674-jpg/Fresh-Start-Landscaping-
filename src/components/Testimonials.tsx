import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'David Thompson',
    location: 'Enfield Town',
    text: 'City Scape Paving did an incredible job on our new block paved driveway. The team was punctual, polite, and left the site spotless every day. Highly recommended!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Emma Williams',
    location: 'Southgate',
    text: 'We are absolutely thrilled with our new porcelain patio. The attention to detail is second to none, and the price was exactly what was quoted. A fantastic local company.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'James & Claire',
    location: 'Oakwood',
    text: 'From the initial free quote to the final finishing touches, the service was outstanding. They transformed our overgrown garden into a beautiful, low-maintenance space.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=33'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-600/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-6 leading-tight">
            Loved by <span className="italic text-zinc-500">Homeowners</span>
          </h2>
          <p className="text-lg text-zinc-600">
            Don't just take our word for it. Read what homeowners in and around Philadelphia have to say about our premium landscaping services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-zinc-100 relative shadow-sm hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-500 group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-zinc-100 group-hover:text-brand-50 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-zinc-700 text-lg leading-relaxed mb-10 relative z-10 font-medium">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
