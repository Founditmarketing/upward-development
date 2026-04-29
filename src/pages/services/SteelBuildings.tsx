import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

const B = 'https://static.wixstatic.com/media';
const HERO = `${B}/d3dc00_4f686de3c5a8454c87b8126ee573bfb2~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_4f686de3c5a8454c87b8126ee573bfb2~mv2.jpg`;
const IMG1 = `${B}/d3dc00_21d37a3f9a674b8a88dd5f7d08fdf344~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_21d37a3f9a674b8a88dd5f7d08fdf344~mv2.jpg`;
const IMG2 = `${B}/d3dc00_8fc72a6dc3d441db9a206e6ae78176d0~mv2.jpg/v1/fill/w_980,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_8fc72a6dc3d441db9a206e6ae78176d0~mv2.jpg`;

export default function SteelBuildings() {
  return (
    <div className="pt-[70px]">

      {/* ── IMAGE HERO (no video on Steel Buildings page) ──────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO}')` }} />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg mb-4">STEEL BUILDINGS</h1>
          <p className="text-xl text-white/90 mb-8">We're licensed, trained and equipped to build engineered steel buildings.</p>
          <a href="tel:3184527653" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
            <Phone className="w-4 h-4" /> Send Me Info!
          </a>
        </div>
      </section>

      {/* ── TWO IMAGES — full width, side by side, no padding ─────── */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={IMG1} alt="Steel building construction" className="w-full h-full object-cover" style={{ minHeight: '300px', maxHeight: '420px' }} />
        </div>
        <div className="w-full md:w-1/2">
          <img src={IMG2} alt="Completed steel building" className="w-full h-full object-cover" style={{ minHeight: '300px', maxHeight: '420px' }} />
        </div>
      </div>

      {/* ── WHITE CONTENT SECTION ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-gray-700 text-lg mb-10 max-w-3xl">
            From backyard workshops to commercial facilities, we can build what you want. All of our buildings are wood-free and designed to withstand the fiercest storms. We can build all-welded or boltup buildings.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Right People</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry. If that's not enough, we also have a calendar and a plan and we talk about it with our customers and our team. You'll love it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Right Motives</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are motivated to enhance the value of every property we touch. When we leave your property, we want its value to have appreciated far beyond what you pay for our services. We can't add value to your property if the work is overpriced. We want you to love our prices so much, that you're thinking of other ways we could add value to your property while we're there.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Right Equipment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We have the right equipment to be efficient; and efficiency adds value. Big excavators, little excavators, track loaders, tractors, dozers, lasers and pumps.
              </p>
            </div>
          </div>
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
