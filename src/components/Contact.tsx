import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Ready for your yard's <span className="italic text-emerald-400">fresh start?</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-lg">
              Contact us today for your free, no-obligation quotation. Our friendly team is ready to discuss your project requirements and bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Call Us Directly</h4>
                  <a href="tel:2156511329" className="text-2xl font-serif text-white hover:text-emerald-400 transition-colors">215-651-1329</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:FreshStartLandscapingCo@gmail.com" className="text-lg text-white hover:text-emerald-400 transition-colors break-all">FreshStartLandscapingCo@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Service Area</h4>
                  <p className="text-lg text-white">Philadelphia, PA & Surrounding Areas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Working Hours</h4>
                  <p className="text-lg text-white">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-[2rem] pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 relative z-10">Request a Free Quote</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="215-651-1329"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">Service Required</label>
                <select
                  id="service"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="lawn">Lawn Care</option>
                  <option value="cleanup">Spring Cleanup</option>
                  <option value="trimming">Trimming & Maintenance</option>
                  <option value="mulch">Flower Bed & Mulch</option>
                  <option value="snow">Snow Shoveling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-900/20"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
