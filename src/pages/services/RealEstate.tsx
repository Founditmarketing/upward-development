import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';

const HERO_BG   = 'https://static.wixstatic.com/media/d3dc00_e2931fa46e7f4139b7dfedb24c8ace9af000.jpg/v1/fill/w_1920,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_e2931fa46e7f4139b7dfedb24c8ace9af000.jpg';
const BODY_IMG1 = 'https://static.wixstatic.com/media/d3dc00_7471d23579b44c41a1063f8f39acd837~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_7471d23579b44c41a1063f8f39acd837~mv2.jpg';
const BODY_IMG2 = 'https://static.wixstatic.com/media/ca516a_e10da78b1bd341bbac8cb560150bc184~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/ca516a_e10da78b1bd341bbac8cb560150bc184~mv2.jpg';

export default function RealEstate() {
  return (
    <div>
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 py-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-6">REAL ESTATE INVESTMENTS</h1>
          <p className="text-xl text-gray-200 mb-10 max-w-xl mx-auto">
            We love real estate and we've been investing in it for more than 25 years!
          </p>
          <a href="tel:3184527653" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 uppercase tracking-widest text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30">
            <Phone className="w-4 h-4" /> Send Me Info!
          </a>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We Buy Homes in Any Condition</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                We are always looking to invest in land and homes. Please contact us if you have any property that you would like to sell or that you think we should purchase.
              </p>
              <div className="overflow-hidden shadow-lg">
                <img src={BODY_IMG1} alt="Real estate property" className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Income Producing Properties</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                We love income producing properties as well. We've bought and built single-family rentals, RV parks and short-term rentals and we're looking for more.
              </p>
              <div className="overflow-hidden shadow-lg">
                <img src={BODY_IMG2} alt="Investment property" className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700" />
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
