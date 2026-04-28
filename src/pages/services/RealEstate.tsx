import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RealEstate() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/real-estate-hero.jpg" alt="Real Estate Investments" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <TrendingUp className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Estate Investments</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We love real estate and we've been investing in it for more than 25 years!
            </p>
            <Link to="/contact" className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
              Send Me Info!
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6">We buy homes in any condition</h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                We are always looking to invest in land and homes. Please contact us if you have any property that you would like to sell or that you think we should purchase.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="text-3xl font-bold mb-6">We invest in income producing properties</h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                We love income producing properties as well. We've bought and built single-family rentals, RV parks and short-term rentals and we're looking for more.
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
