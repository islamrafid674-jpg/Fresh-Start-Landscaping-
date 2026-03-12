import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'David Thompson',
    location: 'Enfield Town',
    text: 'City Scape Paving did an incredible job on our new block paved driveway. The team was punctual, polite, and left the site spotless every day. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    location: 'Southgate',
    text: 'We are absolutely thrilled with our new porcelain patio. The attention to detail is second to none, and the price was exactly what was quoted. A fantastic local company.',
    rating: 5,
  },
  {
    name: 'James & Claire',
    location: 'Oakwood',
    text: 'From the initial free quote to the final finishing touches, the service was outstanding. They transformed our overgrown garden into a beautiful, low-maintenance space.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4 md:mb-6">What Our Customers Say</h2>
          <p className="text-base md:text-lg text-zinc-600">
            Don't just take our word for it. Read what homeowners in and around Enfield have to say about our paving and landscaping services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 p-6 md:p-8 rounded-2xl border border-zinc-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-200" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-zinc-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                <p className="text-sm text-zinc-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
