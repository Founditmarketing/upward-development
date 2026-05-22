import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, CheckCircle } from 'lucide-react';
import ReviewSlider from '../components/ReviewSlider';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          projectType: data.get('project_type'),
          message: data.get('message'),
        }),
      });
      if (res.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

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

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thanks for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                      <input name="name" type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                      <input name="phone" type="tel" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input name="email" type="email" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Project Type *</label>
                    <select name="project_type" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" required>
                      <option value="">Select a service...</option>
                      <option value="Dirt Work & Land Clearing">Dirt Work &amp; Land Clearing</option>
                      <option value="Steel Buildings">Steel Buildings</option>
                      <option value="Super Homes">Super Homes</option>
                      <option value="Commercial Site Prep">Commercial Site Prep</option>
                      <option value="House Pads">House Pads</option>
                      <option value="Mobile Home Pads">Mobile Home Pads</option>
                      <option value="Forestry Mulching">Forestry Mulching</option>
                      <option value="Underbrush Removal">Underbrush Removal</option>
                      <option value="Culvert Installation">Culvert Installation</option>
                      <option value="Retention Ponds">Retention Ponds</option>
                      <option value="Yard Grading">Yard Grading</option>
                      <option value="Final Grading">Final Grading</option>
                      <option value="Real Estate Investments">Real Estate Investments</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                  </div>
                  {formState === 'error' && (
                    <p className="text-red-600 text-sm font-semibold">Something went wrong. Please call us directly at 318-452-7653.</p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-4 rounded-sm transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

