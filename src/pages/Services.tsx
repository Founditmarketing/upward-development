import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Tractor, Trees, Building2, Home, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Tractor,
    title: 'Dirt Work',
    desc: 'Ponds, house pads, driveways, culvert installations and just about anything else that you can do with dirt.',
    href: '/services/dirt-work',
  },
  {
    icon: Trees,
    title: 'Land Clearing',
    desc: 'Land clearing may be our favorite service to provide and we are equipped to clear any size property. References available upon request.',
    href: '/services/land-clearing',
  },
  {
    icon: Building2,
    title: 'Steel Buildings',
    desc: "We're licensed, trained and equipped to build engineered steel buildings.",
    href: '/services/steel-buildings',
  },
  {
    icon: Home,
    title: 'Super Homes',
    desc: 'Super Homes are residential homes that we build with commercial strength. We have combined engineered steel and residential wood framing for a super strong home design that will last for generations. These homes are designed to withstand the fiercest of storms without sacrificing any curb appeal.',
    href: '/services/super-homes',
  },
  {
    icon: TrendingUp,
    title: 'Real Estate Investments',
    desc: "Not only do we add value to your property, but also to ours. We love buying any type of real estate and adding value to it. We love to develop land into homesites and borrow pits and we love to buy \"fixer-uppers\" as well.",
    href: '/services/real-estate',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We're licensed, insured and equipped to do all types of construction and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row gap-6 p-8 border border-gray-100 rounded-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-3">{svc.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{svc.desc}</p>
                    <Link to={svc.href} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
