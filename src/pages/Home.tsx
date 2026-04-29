import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Dirt Work & Land Clearing',
    description: "We're licensed and insured to do it all and we love site work. Land clearing, culvert installations, ponds, house pads, debris removal and whatever else you may need on your property.",
    links: [
      { label: 'Dirt Work', to: '/services/dirt-work' },
      { label: 'Land Clearing', to: '/services/land-clearing' },
    ],
  },
  {
    title: 'Steel Buildings',
    description: "We're licensed and insured to build everything from chicken coops to shopping centers.",
    links: [
      { label: 'Steel Buildings', to: '/services/steel-buildings' },
    ],
  },
  {
    title: 'Super Homes',
    description: 'Commercial strength with residential beauty. Inspired by the effects of Hurricane Laura, these steel reinforced custom homes are built to withstand the toughest of storms.',
    links: [
      { label: 'Super Homes', to: '/services/super-homes' },
    ],
  },
  {
    title: 'Real Estate Investments',
    description: 'We are always looking to invest in land and homes. Please contact us if you have any property that you would like to sell or that you think we should purchase.',
    links: [
      { label: 'Investments', to: '/services/real-estate' },
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="home" className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/drone-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-32 lg:py-48 text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Here to Enhance the<br />
            Value of Your Property
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-12 drop-shadow-md font-medium">
            A construction and development company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              View Services
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <div className="flex flex-wrap gap-3">
                  {s.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="bg-primary hover:bg-primary-dark text-black font-bold px-5 py-2 text-sm tracking-wide uppercase transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 text-center border-t border-gray-200">
        <p className="text-lg text-gray-700 mb-4 font-medium">
          Have Questions? &nbsp; Call or text &nbsp;
          <a href="tel:3184527653" className="text-primary font-bold hover:underline">318-452-7653</a>
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors"
        >
          Click to Inquire Now
        </Link>
      </section>
    </main>
  );
}
