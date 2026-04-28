import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Tractor, 
  Trees,
  Home as HomeIcon, 
  TrendingUp, 
  Phone, 
  MapPin, 
  ShieldCheck,
  ChevronRight,
  Mail
} from 'lucide-react';
import ReviewSlider from '../components/ReviewSlider';

const services = [
  {
    icon: <Tractor className="w-7 h-7" />,
    title: 'Dirt Work',
    description: "Ponds, house pads, driveways, culvert installations and just about anything else that you can do with dirt.",
    path: '/services/dirt-work',
  },
  {
    icon: <Trees className="w-7 h-7" />,
    title: 'Land Clearing',
    description: "Land clearing is our favorite service to provide and we are equipped to clear any size property. References available upon request.",
    path: '/services/land-clearing',
    badge: 'Our Favorite',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Steel Buildings',
    description: "We're licensed, trained and equipped to build engineered steel buildings — from backyard workshops to commercial facilities.",
    path: '/services/steel-buildings',
  },
  {
    icon: <HomeIcon className="w-7 h-7" />,
    title: 'Super Homes',
    description: "Commercial strength with residential beauty. Inspired by Hurricane Laura, these steel-reinforced custom homes are built to withstand the toughest storms.",
    path: '/services/super-homes',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Real Estate Investments',
    description: "We are always looking to invest in land and homes. Contact us if you have any property that you would like to sell or that you think we should purchase.",
    path: '/services/real-estate',
  },
];

const pillars = [
  {
    title: 'Communication',
    body: 'We answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry. We also have a calendar and a plan — and we talk about it with our customers and team.',
  },
  {
    title: 'Quality',
    body: 'It will never be our decision to sacrifice the quality of the work on your property. We want every customer to be so satisfied that you tell all of your friends how well the job was done.',
  },
  {
    title: 'Value',
    body: 'Our goal is to enhance the value of every property we touch. For this to happen, we keep our people organized, our customers engaged and our overhead low.',
  },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/drone-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.05] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 py-32 lg:py-48 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <p className="text-primary font-bold tracking-[0.22em] uppercase text-sm mb-6 flex items-center justify-center gap-3">
              <span className="inline-block w-10 h-px bg-primary" />
              Lake Charles, LA · Licensed &amp; Insured
              <span className="inline-block w-10 h-px bg-primary" />
            </p>

            {/* H1 — verbatim OG tagline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              Here to Enhance the<br />
              <span className="text-primary">Value of Your Property</span>
            </h1>

            {/* Sub */}
            <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
              A construction and development company.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/dirt-work"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                View Services <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:3184527653"
                className="border-2 border-white/40 hover:border-primary text-white px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> 318-452-7653
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/40" />
        </motion.div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              We're here to add value to your property and we're licensed and insured to provide all kinds of construction services for you.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-gray-50 border border-gray-100 hover:border-primary/40 hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    {s.badge}
                  </span>
                )}
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300 text-primary group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">{s.description}</p>
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-1 text-primary font-bold text-sm tracking-wide hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <p className="text-gray-600 font-medium">Have Questions?&nbsp; Call or text</p>
            <a
              href="tel:3184527653"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold tracking-widest uppercase text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> 318-452-7653
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── OUR PRIORITIES (Communication · Quality · Value) ────────── */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center mix-blend-luminosity" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Priorities</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Communication. Quality. Value.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border border-gray-700 p-8 hover:border-primary/60 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-primary mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Who We Are</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The LaCour Family</h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Upward Development is the LaCour Family construction and development business based in Lake Charles, LA.
                </p>
                <p>
                  After many years in the real estate, timber, car wash and billboard business, we started Upward Development in 2024 to obtain the licenses and insurance to construct our larger projects. We immediately found that our entire family loved the construction business, so we started doing projects for others.
                </p>
                <p>
                  One thing led to another and now we are scaling upward to meet not only our needs, but also the construction needs of many others like you. Every one of our companies are built on a reliable team, quality work and reasonable prices.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 mt-6 bg-white shadow-sm">
                  <p className="text-xl font-heading text-gray-900 italic">
                    "All of our work is pointed upward for the glory of God."
                  </p>
                </blockquote>
              </div>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-primary text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all hover:-translate-y-0.5"
                >
                  Meet the Team <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src="/about-img.jpg"
                  alt="Upward Development team at work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-7 hidden md:block shadow-xl">
                <div className="text-3xl font-bold font-heading mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Family Owned</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Have Any Questions?</h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether you have a question about our services or want to discuss a potential project, we're here to help. Feel free to reach out using the form or give us a call or text.
              </p>

              <div className="space-y-7 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call or Text</p>
                    <a href="tel:3184527653" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
                      318-452-7653
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:lucas@upwarddevelopment.us" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors break-all">
                      lucas@upwarddevelopment.us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-xl font-bold text-gray-900">1650 E Gauthier Rd<br />Lake Charles, LA</p>
                  </div>
                </div>
              </div>

              <ReviewSlider />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 border border-gray-100 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-2">Request a Quote</h3>
              <p className="text-gray-500 text-sm mb-8">We'll get back to you as soon as possible.</p>
              <form
                className="space-y-4"
                action="mailto:lucas@upwarddevelopment.us"
                method="POST"
                encType="text/plain"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Service *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  >
                    <option value="">Select a service…</option>
                    <option value="dirt-work">Dirt Work</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="steel-buildings">Steel Buildings</option>
                    <option value="super-homes">Super Homes</option>
                    <option value="real-estate">Real Estate Investments</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 transition-colors text-sm tracking-widest uppercase"
                >
                  Send Message
                </button>

                <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  Licensed &amp; insured in Louisiana
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
