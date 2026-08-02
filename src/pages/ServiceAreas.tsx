import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { serviceAreas } from '../data/serviceAreas';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ServiceAreas() {
  return (
    <div className="pt-[70px]">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '42vh' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/services-bg.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 py-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg mb-5">
            Where We Work
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            We are based in Lake Charles and work across Southwest Louisiana. Pick the community
            closest to your property to see what we most often do there.
          </p>
          <a
            href="tel:3184527653"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
          >
            <Phone className="w-4 h-4" /> Call or Text 318-452-7653
          </a>
        </div>
      </section>

      {/* ── WHERE WE ARE ──────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            One yard, one crew, one region
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our equipment and our people are based at 1650 E Gauthier Road in Lake Charles. We do
            not have offices, yards or crews stationed in the other communities listed here — we
            drive to them, which is worth knowing because it affects scheduling and, on smaller jobs
            a long way out, pricing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each page below covers the work that comes up most often in that particular area rather
            than repeating the same list eleven times. If your property is somewhere not listed,
            call anyway — the honest answer might be yes, and if it is no we will tell you that too.
          </p>
        </div>
      </section>

      {/* ── AREA CARDS ────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Communities we serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map(area => (
              <article key={area.slug} className="bg-white border border-gray-200 p-6 flex flex-col">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      <Link to={`/service-areas/${area.slug}`} className="hover:text-primary transition-colors">
                        {area.name}
                      </Link>
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mt-0.5">
                      {area.parish}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                  {area.hubSummary}
                </p>
                <Link
                  to={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-primary transition-colors self-start"
                >
                  What we do in {area.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            What we do, wherever we are doing it
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The emphasis shifts from place to place, but the capability does not. Full detail on
            each:
          </p>
          <ul className="space-y-3">
            {[
              { to: '/services/dirt-work', label: 'Dirt work — pads, ponds, driveways, culverts and grading' },
              { to: '/services/land-clearing', label: 'Land clearing — mulching, grubbing and stump removal' },
              { to: '/services/steel-buildings', label: 'Steel buildings — engineered, all-welded or bolt-up' },
              { to: '/services/super-homes', label: 'Super Homes — steel-reinforced custom houses' },
              { to: '/services/real-estate', label: 'Real estate — land and homes we buy and improve' },
            ].map(s => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="inline-flex items-center gap-2 text-gray-800 hover:text-primary font-semibold transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Not sure which page fits your property?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Skip it and just tell us the address and what you are trying to do. That is faster than
            guessing, and it is how most of our jobs start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3184527653"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              <Phone className="w-4 h-4" /> Call or Text
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              Request an Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
