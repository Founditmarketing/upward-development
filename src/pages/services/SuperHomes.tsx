import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';

const HERO_BG   = 'https://static.wixstatic.com/media/d3dc00_fc1da93c7aa843e29ac0359ea1b7633df000.jpg/v1/fill/w_1920,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_fc1da93c7aa843e29ac0359ea1b7633df000.jpg';
const BODY_IMG1 = 'https://static.wixstatic.com/media/d3dc00_2317e1a3ceb64e33a8573d9269475538~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_2317e1a3ceb64e33a8573d9269475538~mv2.jpg';
const BODY_IMG2 = 'https://static.wixstatic.com/media/d3dc00_29735a30904e4eb7ab7516dc9219f09f~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_29735a30904e4eb7ab7516dc9219f09f~mv2.jpg';

export default function SuperHomes() {
  return (
    <div>
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0 bg-black/55" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 py-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide mb-3">SUPER HOMES</h1>
          <p className="text-2xl text-primary font-bold mb-6">Commercial strength, residential beauty.</p>
          <a href="tel:3184527653" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 uppercase tracking-widest text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30">
            <Phone className="w-4 h-4" /> Send Me Info!
          </a>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Strength</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-gray-600 leading-relaxed">Our super homes are engineered, designed, and constructed with a steel mainframe that is far stronger than traditional wood framing. You can't see the steel unless you look in the attic, but you can trust it to endure for generations.</p>
              <div className="mt-8 overflow-hidden shadow-lg">
                <img src={BODY_IMG1} alt="Super Home steel frame" className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Residential Beauty</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-gray-600 leading-relaxed">Don't let the steel frame mislead you. Our Super Homes are beautiful. These are not barndominiums, these are world-class homes. We use Zip waterproof and air-tight sheathing and can cover it with any Hardie product, brick or any other exterior covering you would like. We use the highest quality components and the most skilled craftsmen available.</p>
              <div className="mt-8 overflow-hidden shadow-lg">
                <img src={BODY_IMG2} alt="Finished Super Home exterior" className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-14 text-center">
        <p className="text-lg font-medium text-gray-300 mb-4">Have Questions? Call or text</p>
        <a href="tel:3184527653" className="text-3xl font-bold text-primary hover:text-white transition-colors">318-452-7653</a>
        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-all">
            Click to Inquire Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
