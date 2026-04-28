import { motion } from 'motion/react';
import { Trees, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const priorities = [
  {
    title: 'The Right People',
    desc: 'We believe in our team and when you meet them, you will see why.',
  },
  {
    title: 'The Right Motives',
    desc: "We are motivated to enhance the value of every property we touch. When we leave your property, we want its value to have appreciated far beyond what you pay for our services.",
  },
  {
    title: 'The Right Equipment',
    desc: 'From trench burners to specialized excavators, we are equipped to clear everything from a city lot to a 100 acre pasture conversion.',
  },
  {
    title: 'The Right Price',
    desc: "We can't add value to your property if the work is overpriced. We want you to love our prices so much, that you're thinking of other ways we could add value to your property while we're there.",
  },
];

const ourPriorities = [
  {
    label: 'Communication',
    desc: "We answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry. If that's not enough, we also have a calendar and a plan and we talk about it with our customers and our team. You'll love it.",
  },
  {
    label: 'Quality',
    desc: "It will never be our decision to sacrifice the quality of the work on your property. We want every customer to be so satisfied that you tell all of your friends how well the job was done.",
  },
  {
    label: 'Value',
    desc: 'Our goal is to enhance the value of every property we touch. For this to happen, we recognize that we must keep our people organized, our customers engaged and our overhead low.',
  },
];

export default function LandClearing() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/land-clearing-hero.jpg"
            alt="Land Clearing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Trees className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Land Clearing</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Land clearing is our favorite service to provide and we are equipped to clear any size property. References available upon request.
            </p>
            <a
              href="tel:3184527653"
              className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Upward Development?</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {priorities.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-sm p-6"
              >
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

      {/* Our Priorities */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Priorities</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ourPriorities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gray-700 rounded-sm p-8"
              >
                <div className="text-primary font-bold text-xl uppercase tracking-widest mb-3">{item.label}</div>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Have Questions? Call or Text</h2>
          <a href="tel:3184527653" className="text-2xl font-bold underline decoration-white/50 hover:decoration-white transition-all">
            318-452-7653
          </a>
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
