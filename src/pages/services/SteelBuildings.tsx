import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';

const HERO_BG   = 'https://static.wixstatic.com/media/d3dc00_4f686de3c5a8454c87b8126ee573bfb2~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_4f686de3c5a8454c87b8126ee573bfb2~mv2.jpg';
const BODY_IMG1 = 'https://static.wixstatic.com/media/d3dc00_21d37a3f9a674b8a88dd5f7d08fdf344~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_21d37a3f9a674b8a88dd5f7d08fdf344~mv2.jpg';
const BODY_IMG2 = 'https://static.wixstatic.com/media/d3dc00_8fc72a6dc3d441db9a206e6ae78176d0~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_8fc72a6dc3d441db9a206e6ae78176d0~mv2.jpg';

const pillars = [
  {
    label: 'The Right People',
    body: 'We believe in our team and when you meet them, you will see why.',
  },
  {
    label: 'The Right Motives',
    body: "We are motivated to enhance the value of every property we touch. When we leave your property, we want it's value to have appreciated far beyond what you pay for our services.",
  },
  {
    label: 'The Right Equipment',
    body: 'We have the right equipment to be efficient; and efficiency adds value. Big excavators, little excavators, track loaders, tractors, dozers, lasers and pumps.',
  },
  {
    label: 'The Right Price',
    body: "We can't add value to your property if the work is overpriced. We want you to love our prices so much, that you're thinking of other ways we could add value to your property while we're there.",
  },
];

export default function SteelBuildings() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 py-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide mb-6">STEEL BUILDINGS</h1>
          <p className="text-xl text-gray-200 mb-4 max-w-xl mx-auto">
            We're licensed, trained and equipped to build engineered steel buildings.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            From backyard workshops to commercial facilities, we can build what you want. All of our buildings are wood-free and designed to withstand the fiercest storms. We can build all-welded or boltup buildings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3184527653"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 uppercase tracking-widest text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30"
            >
              <Phone className="w-4 h-4" /> Send Me Info!
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-primary text-white font-bold px-10 py-4 uppercase tracking-widest text-sm transition-all hover:bg-white/10"
            >
              I Want One!
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 4 PILLARS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ROW ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {[BODY_IMG1, BODY_IMG2].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-video overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={`Steel Building project ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA STRIP ─────────────────────────────────────────── */}
      <section className="bg-black text-white py-14 text-center">
        <p className="text-lg font-medium text-gray-300 mb-4">Have Questions? Call or text</p>
        <a
          href="tel:3184527653"
          className="text-3xl font-bold text-primary hover:text-white transition-colors"
        >
          318-452-7653
        </a>
        <div className="mt-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-all"
          >
            Click to Inquire Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
