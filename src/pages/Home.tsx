import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Dirt Work\n& Land Clearing',
    description: "We're licensed and insured to do it all and we love site work. Land clearing, culvert installations, ponds, house pads, debris removal and whatever else you may need on your property.",
    // Same image the original Wix homepage uses for Dirt Work & Land Clearing
    image: 'https://static.wixstatic.com/media/d3dc00_339e2d6a5b424ff19843ea5309d64ae0~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_339e2d6a5b424ff19843ea5309d64ae0~mv2.jpg',
    links: [
      { label: 'Dirt Work', to: '/services/dirt-work' },
      { label: 'Land Clearing', to: '/services/land-clearing' },
    ],
  },
  {
    title: 'Steel Buildings',
    description: "We're licensed and insured to build everything from chicken coops to shopping centers.",
    // Same image the original Wix homepage uses for Steel Buildings
    image: 'https://static.wixstatic.com/media/d3dc00_21d37a3f9a674b8a88dd5f7d08fdf344~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_21d37a3f9a674b8a88dd5f7d08fdf344~mv2.jpg',
    links: [
      { label: 'Steel Buildings', to: '/services/steel-buildings' },
    ],
  },
  {
    title: 'Super Homes',
    description: 'Commercial strength with residential beauty. Inspired by the effects of Hurricane Laura, these steel reinforced custom homes are built to withstand the toughest of storms.',
    image: 'https://static.wixstatic.com/media/d3dc00_2317e1a3ceb64e33a8573d9269475538~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_2317e1a3ceb64e33a8573d9269475538~mv2.jpg',
    links: [
      { label: 'Super Homes', to: '/services/super-homes' },
    ],
  },
  {
    title: 'Real Estate Investments',
    description: 'We are always looking to invest in land and homes. Please contact us if you have any property that you would like to sell or that you think we should purchase.',
    image: 'https://static.wixstatic.com/media/d3dc00_7471d23579b44c41a1063f8f39acd837~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_7471d23579b44c41a1063f8f39acd837~mv2.jpg',
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

      {/* ── SERVICES — Z-PATTERN ─────────────────────────────────────── */}
      <section id="services" className="bg-white">
        {services.map((s, i) => {
          const isEven = i % 2 === 1;
          const lines = s.title.split('\n');
          return (
            <div
              key={s.title}
              className="flex flex-col md:flex-row items-center"
            >
              {/* Content side */}
              <div
                className={`w-full md:w-1/2 px-10 lg:px-16 py-12 flex flex-col justify-center ${
                  isEven ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <div className="w-10 h-0.5 bg-gray-800 mb-4" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {lines.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < lines.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {s.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-black font-bold px-5 py-2.5 text-sm tracking-wide uppercase transition-colors"
                    >
                      {l.label} <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Image side — padded, not full bleed */}
              <div
                className={`w-full md:w-1/2 p-8 flex items-center justify-center ${
                  isEven ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title.replace('\n', ' ')}
                  className="w-full object-cover shadow-sm"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
          );
        })}
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
