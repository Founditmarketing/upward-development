import { Link, useParams } from 'react-router-dom';
import { Phone, ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';
import { getServiceArea, type ServiceArea as Area } from '../data/serviceAreas';
import { renderSection } from '../components/AreaSections';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceArea(slug) : undefined;
  if (!area) return <NotFound />;
  return <AreaPage area={area} />;
}

function NotFound() {
  return (
    <div className="pt-[70px]">
      <section className="max-w-3xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Area Not Found</h1>
        <p className="text-gray-600 mb-8">
          We do not have a page for that community. Here is everywhere we do cover — and if your
          property is not on the list, call us anyway.
        </p>
        <Link
          to="/service-areas"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All Service Areas
        </Link>
      </section>
    </div>
  );
}

function AreaPage({ area }: { area: Area }) {
  return (
    <div className="pt-[70px]">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Service Areas', to: '/service-areas' },
          { label: area.name },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '52vh' }}>
        <img
          src={area.heroImage}
          alt={area.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            {area.parish}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg leading-tight mb-5">
            {area.h1}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-8">{area.heroLead}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:3184527653"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" /> Call 318-452-7653
            </a>
            <a
              href="sms:3184527653"
              className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" /> Send a Text
            </a>
          </div>
        </div>
      </section>

      {/* ── BODY — order and mix are defined per community ─────────── */}
      {area.sections.map(renderSection)}

      {/* ── CLOSING CTA ───────────────────────────────────────────── */}
      <section className="py-14 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{area.cta.heading}</h2>
          <p className="text-gray-300 leading-relaxed mb-8">{area.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:3184527653"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" /> Call 318-452-7653
            </a>
            <a
              href="sms:3184527653"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-primary hover:text-primary text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" /> Text Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-primary hover:text-primary text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              Request an Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOURCES + HUB LINK ────────────────────────────────────── */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All service areas
          </Link>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
            Sources for the local details on this page
          </h2>
          <ul className="space-y-1.5">
            {area.sources.map(s => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-primary underline underline-offset-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
