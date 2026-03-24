import { motion } from 'motion/react';
import { Phone, MapPin, Star, ChevronRight, Mail } from 'lucide-react';
import ReviewSlider from '../components/ReviewSlider';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/contact-hero.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We're ready to help bring your project to life. Reach out today for a quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-4">Have Any Questions?</h2>
              <div className="w-20 h-1.5 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-10">
                Whether you need land cleared, a steel building erected, or want to discuss our signature Super Homes, we're ready to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-sm flex items-center justify-center shrink-0 border border-gray-100">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Direct Contact</h4>
                    <a href="tel:3184527653" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">Call or Text 318-452-7653</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-sm flex items-center justify-center shrink-0 border border-gray-100">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-xl font-bold text-gray-900">Lake Charles, LA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-sm flex items-center justify-center shrink-0 border border-gray-100">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:lucas@upwarddevelopment.us" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors break-all">lucas@upwarddevelopment.us</a>
                  </div>
                </div>

                <ReviewSlider />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 rounded-sm shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form className="space-y-4" action="mailto:lucas@upwarddevelopment.us" method="POST" encType="text/plain">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Project Type *</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" required>
                    <option value="">Select a service...</option>
                    <option value="dirt">Dirt Work & Land Clearing</option>
                    <option value="steel">Steel Buildings</option>
                    <option value="superhome">Super Homes</option>
                    <option value="realestate">Real Estate Investments</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-sm transition-colors text-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
