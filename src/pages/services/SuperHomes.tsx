import { motion } from 'motion/react';
import { Home, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SuperHomes() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/super-hero-2.jpg" alt="Super Homes" className="w-full h-full object-cover transform scale-[1.2] origin-bottom-left" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Home className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Super Homes</h1>
            <p className="text-2xl text-gray-200 font-semibold mb-2">Commercial strength,</p>
            <p className="text-2xl text-gray-200 font-semibold mb-6">residential beauty.</p>
            <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
              Send me info!
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">Commercial Strength</h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Super Homes are engineered, designed, and constructed with a steel mainframe that is far stronger than traditional wood framing. You can't see the steel unless you look in the attic, but you can trust it to endure for generations.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="text-3xl font-bold mb-6">Residential Beauty</h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Don't let the steel frame mislead you. Our Super Homes are beautiful. These are not barndominiums, these are world-class homes. We use Zip waterproof and air-tight sheathing and can cover it with any Hardie product, brick or any other exterior covering you would like. We use the highest quality components and the most skilled craftsmen available.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Have Questions? Call or Text</h2>
          <a href="tel:3184527653" className="text-2xl font-bold underline decoration-white/50 hover:decoration-white transition-all">318-452-7653</a>
          <div className="mt-6">
            <Link to="/contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition-colors">
              Click to Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
