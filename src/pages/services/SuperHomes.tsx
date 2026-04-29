import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

const B = 'https://static.wixstatic.com/media';

const IMG1 = `${B}/d3dc00_2317e1a3ceb64e33a8573d9269475538~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_2317e1a3ceb64e33a8573d9269475538~mv2.jpg`;
const IMG2 = `${B}/d3dc00_29735a30904e4eb7ab7516dc9219f09f~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_29735a30904e4eb7ab7516dc9219f09f~mv2.jpg`;

export default function SuperHomes() {
  return (
    <div className="pt-[70px]">

      {/* ── VIDEO HERO ─────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '70vh' }}>
        <video src="/superhomes-hero.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg mb-4">SUPER HOMES</h1>
          <p className="text-xl text-white/90 mb-8">Commercial strength, residential beauty.</p>
          <a href="tel:3184527653" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
            <Phone className="w-4 h-4" /> Send Me Info!
          </a>
        </div>
      </section>

      {/* ── BODY — Z-PATTERN ──────────────────────────────────────── */}
      <section className="flex flex-col md:flex-row items-center bg-white">
        <div className="w-full md:w-1/2 px-10 lg:px-16 py-14">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Strength</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Super Homes are engineered, designed, and constructed with a steel mainframe that is far stronger than traditional wood framing. You can't see the steel unless you look in the attic, but you can trust it to endure for generations. Inspired by the effects of Hurricane Laura, these homes are built to withstand the toughest storms.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <img src={IMG1} alt="Super Home steel frame" className="w-full object-cover shadow-sm" style={{ maxHeight: '320px' }} />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center bg-gray-50">
        <div className="w-full md:w-1/2 p-8 md:order-1">
          <img src={IMG2} alt="Finished Super Home exterior" className="w-full object-cover shadow-sm" style={{ maxHeight: '320px' }} />
        </div>
        <div className="w-full md:w-1/2 px-10 lg:px-16 py-14 md:order-2">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Residential Beauty</h2>
          <p className="text-gray-600 leading-relaxed">
            Don't let the steel frame mislead you. Our Super Homes are beautiful. These are not barndominiums — these are world-class homes. We use Zip waterproof and air-tight sheathing and can cover it with any Hardie product, brick, or any other exterior covering you'd like. We use the highest quality components and the most skilled craftsmen available.
          </p>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 text-center border-t border-gray-200">
        <p className="text-lg text-gray-700 mb-4 font-medium">
          Have Questions? &nbsp; Call or text &nbsp;
          <a href="tel:3184527653" className="text-primary font-bold hover:underline">318-452-7653</a>
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors">
          Click to Inquire Now <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
