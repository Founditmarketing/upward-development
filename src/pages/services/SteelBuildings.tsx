import { motion } from 'motion/react';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const priorities = [
  { title: 'The Right People', desc: 'We believe in our team and when you meet them, you will see why.' },
  { title: 'The Right Motives', desc: "We are motivated to enhance the value of every property we touch. When we leave your property, we want its value to have appreciated far beyond what you pay for our services." },
  { title: 'The Right Equipment', desc: 'We have the right equipment to be efficient; and efficiency adds value. Big excavators, little excavators, track loaders, tractors, dozers, lasers and pumps.' },
  { title: 'The Right Price', desc: "We can't add value to your property if the work is overpriced. We want you to love our prices so much, that you're thinking of other ways we could add value to your property while we're there." },
];

export default function SteelBuildings() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/steel-body-2.jpg" alt="Steel Buildings" className="w-full h-full object-cover transform scale-[1.4] origin-bottom-left" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Steel Buildings</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We're licensed, trained and equipped to build engineered steel buildings.
            </p>
            <Link to="/contact" className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
              Send Me Info!
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From backyard workshops to commercial facilities, we can build what you want.</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-8" />
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              All of our buildings are wood-free and designed to withstand the fiercest storms. We can build all-welded or bolt-up buildings.
            </p>
            <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
              I Want One!
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Upward Development?</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {priorities.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-gray-100 rounded-sm p-6 shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
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
