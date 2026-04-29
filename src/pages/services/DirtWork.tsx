import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

const B = 'https://static.wixstatic.com/media';
const IMG1 = `${B}/d3dc00_6a2cf333f08f4ed3b769b3349238fff2~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_6a2cf333f08f4ed3b769b3349238fff2~mv2.jpg`;
const IMG2 = `${B}/ca516a_3a53b56c1bf546f088877163fede7384~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/ca516a_3a53b56c1bf546f088877163fede7384~mv2.jpg`;

export default function DirtWork() {
  return (
    <div className="pt-[70px]">

      {/* ── VIDEO HERO ─────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '70vh' }}>
        <video src="/dirtwork-hero.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg mb-4">DIRT WORK</h1>
          <p className="text-xl text-white/90 mb-8">Ponds, house pads, driveways, culvert installations and just about anything else that you can do with dirt.</p>
          <a href="tel:3184527653" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
            <Phone className="w-4 h-4" /> Send Me Info!
          </a>
        </div>
      </section>

      {/* ── 2×2 GRID ──────────────────────────────────────────────── */}
      {/* Row 1: Image top-left, Content top-right */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '400px' }}>
        <div className="w-full md:w-1/2 overflow-hidden">
          <img src={IMG1} alt="Dirt work" className="w-full h-full object-cover" style={{ minHeight: '400px' }} />
        </div>
        <div className="w-full md:w-1/2 bg-white flex items-center px-10 lg:px-16 py-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Right People</h2>
            <p className="text-gray-600 leading-relaxed">
              We answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry. If that's not enough, we also have a calendar and a plan and we talk about it with our customers and our team. You'll love it.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Content bottom-left, Image bottom-right */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '400px' }}>
        <div className="w-full md:w-1/2 bg-white flex items-center px-10 lg:px-16 py-14 md:order-1">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Right Equipment</h2>
            <p className="text-gray-600 leading-relaxed">
              We have the right equipment to be efficient; and efficiency adds value. Big excavators, little excavators, track loaders, tractors, dozers, lasers and pumps. It will never be our decision to sacrifice the quality of the work on your property. We want every customer to be so satisfied that you tell all of your friends how well the job was done.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden md:order-2">
          <img src={IMG2} alt="Excavation equipment" className="w-full h-full object-cover" style={{ minHeight: '400px' }} />
        </div>
      </div>

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
