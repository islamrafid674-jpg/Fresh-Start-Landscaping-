import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Serving Philadelphia & Surrounding Areas</h2>
            <p className="text-base md:text-lg text-zinc-400 mb-10 md:mb-12 max-w-2xl mx-auto">
              Ready for your yard's fresh start? Contact us today for your free, no-obligation quotation. Our friendly team is ready to discuss your project requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
              <div className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-2xl border border-zinc-800">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">Call Us</h4>
                <a href="tel:2156511329" className="text-xl md:text-2xl font-bold text-white hover:text-green-500 transition-colors">215-651-1329</a>
              </div>

              <div className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-2xl border border-zinc-800">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">Email Us</h4>
                <a href="mailto:FreshStartLandscapingCo@gmail.com" className="text-base md:text-lg font-medium text-white hover:text-green-500 transition-colors break-all">FreshStartLandscapingCo@gmail.com</a>
              </div>

              <div className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-2xl border border-zinc-800 sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">Location</h4>
                <p className="text-base md:text-lg font-medium text-white">Philadelphia, PA<br />& Surrounding Areas</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-left">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-6 text-center">Request a Free Quote</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-zinc-900"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-zinc-900"
                      placeholder="215-651-1329"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-zinc-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-zinc-900 bg-white"
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
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-zinc-900 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <span>Call or Text Now</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
