import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

const B = 'https://static.wixstatic.com/media';

const IMG1 = `${B}/d3dc00_6a2cf333f08f4ed3b769b3349238fff2~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_6a2cf333f08f4ed3b769b3349238fff2~mv2.jpg`;
const IMG2 = `${B}/ca516a_3a53b56c1bf546f088877163fede7384~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/ca516a_3a53b56c1bf546f088877163fede7384~mv2.jpg`;
const IMG3 = `${B}/ca516a_b4d24804d9ea4575a95b744c1fbdb7e9~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/ca516a_b4d24804d9ea4575a95b744c1fbdb7e9~mv2.jpg`;

export default function DirtWork() {
  return (
    <div className="pt-[70px]">

      {/* ── VIDEO HERO ─────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '70vh' }}>
        <video src="/dirtwork-hero.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg mb-4">DIRT WORK</h1>
          <p className="text-xl text-white/90 mb-8">Licensed &amp; insured site work across Southwest Louisiana.</p>
          <a href="tel:3184527653" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
            <Phone className="w-4 h-4" /> Send Me Info!
          </a>
        </div>
      </section>

      {/* ── BODY — Z-PATTERN ──────────────────────────────────────── */}
      {/* Row 1: text left, image right */}
      <section className="flex flex-col md:flex-row items-center bg-white">
        <div className="w-full md:w-1/2 px-10 lg:px-16 py-14">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Site Work Specialists</h2>
          <p className="text-gray-600 leading-relaxed">
            We're licensed and insured to do it all and we love site work. We can clear your land, install culverts, build ponds, prepare house pads, remove debris and do whatever else you may need on your property. We are also licensed to haul dirt, gravel, sand and other materials.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <img src={IMG1} alt="Dirt work site" className="w-full object-cover shadow-sm" style={{ maxHeight: '320px' }} />
        </div>
      </section>

      {/* Row 2: image left, text right */}
      <section className="flex flex-col md:flex-row items-center bg-gray-50">
        <div className="w-full md:w-1/2 p-8 md:order-1">
          <img src={IMG2} alt="Excavation work" className="w-full object-cover shadow-sm" style={{ maxHeight: '320px' }} />
        </div>
        <div className="w-full md:w-1/2 px-10 lg:px-16 py-14 md:order-2">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dirt Pit in South Lake Charles</h2>
          <p className="text-gray-600 leading-relaxed">
            We have a dirt pit in South Lake Charles where we sell and deliver premium fill dirt. Whether you need a truckload or several, we can deliver directly to your property at competitive rates. Call or text us for pricing and availability.
          </p>
        </div>
      </section>

      {/* Row 3: text left, image right */}
      <section className="flex flex-col md:flex-row items-center bg-white">
        <div className="w-full md:w-1/2 px-10 lg:px-16 py-14">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <ul className="text-gray-600 leading-relaxed space-y-2">
            <li>• Land Clearing</li>
            <li>• Culvert Installations</li>
            <li>• Pond Construction</li>
            <li>• House Pad Preparation</li>
            <li>• Debris Removal</li>
            <li>• Fill Dirt Delivery</li>
            <li>• Gravel &amp; Sand Hauling</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <img src={IMG3} alt="Dirt work equipment" className="w-full object-cover shadow-sm" style={{ maxHeight: '320px' }} />
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
