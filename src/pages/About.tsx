import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const B = 'https://static.wixstatic.com/media';

// Team photos scraped from live Wix About Us page (in order of appearance)
const LUCAS_IMG  = `${B}/d3dc00_f8f91136766745a59c8140d3d4a47a05~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_f8f91136766745a59c8140d3d4a47a05~mv2.jpg`;
const FAITH_IMG  = `${B}/d3dc00_9daaf512b3f2459face2d7cf02402856~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_9daaf512b3f2459face2d7cf02402856~mv2.jpg`;
const DANIEL_IMG = `${B}/d3dc00_1a5a680472dd42c5b3e305597dc65be6~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/d3dc00_1a5a680472dd42c5b3e305597dc65be6~mv2.jpg`;

const reviews = [
  { name: 'Kimberly Liles', text: 'Lucas and his crew did an outstanding job clearing our lot and installing a culvert. They were on time, professional, and the price was more than fair. Will definitely use them again!', stars: 5 },
  { name: 'Jordan Broussard', text: 'Had them build a steel shop on our property. From start to finish the communication was great and the quality of the work exceeded my expectations. Highly recommend Upward Development.', stars: 5 },
  { name: 'Tammy Fontenot', text: 'Great company to work with. They showed up when they said they would and did exactly what they promised. Refreshing to find a contractor that actually answers their phone!', stars: 5 },
];

export default function About() {
  return (
    <div className="pt-[70px]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about-hero.jpg')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg mb-4">ABOUT US</h1>
          <p className="text-xl text-white/90">The LaCour Family — Lake Charles, LA</p>
        </div>
      </section>

      {/* ── 2×2 GRID: story ───────────────────────────────────────── */}
      {/* Row 1: Image top-left, Story text top-right */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '400px' }}>
        <div className="w-full md:w-1/2 overflow-hidden">
          <img src={LUCAS_IMG} alt="Upward Development team" className="w-full h-full object-cover" style={{ minHeight: '400px' }} />
        </div>
        <div className="w-full md:w-1/2 bg-white flex items-center px-10 lg:px-16 py-14">
          <div>
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Upward Development is the LaCour Family construction and development business based in Lake Charles, LA. After many years in the real estate, timber, car wash and billboard business, we started Upward Development in 2024 to obtain the licenses and insurance to construct our larger projects. We immediately found that our entire family loved the construction business, so we started doing a few projects for others. One thing led to another and now we are scaling upward to meet demand.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Content bottom-left, Image bottom-right */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '400px' }}>
        <div className="w-full md:w-1/2 bg-white flex items-center px-10 lg:px-16 py-14 md:order-1">
          <div>
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              We answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry. We are motivated to enhance the value of every property we touch — when we leave, we want its value to have appreciated far beyond what you pay for our services.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden md:order-2">
          <img src={FAITH_IMG} alt="Upward Development at work" className="w-full h-full object-cover" style={{ minHeight: '400px' }} />
        </div>
      </div>

      {/* ── OUR STORY — thin centered strip ───────────────────────── */}
      <section className="py-10 bg-white border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-10 h-0.5 bg-gray-800 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            After many years in the real estate, timber, car wash and billboard business, we started Upward Development in 2024 to obtain the licenses and insurance to construct our larger projects. We immediately found that our entire family loved the construction business, so we started doing a few projects for others. One thing led to another and now we are scaling upward to meet not only our needs, but also the construction needs of many others like you. Every one of our companies are built on a reliable team, quality work and reasonable prices. All of our work is pointed upward for the glory of God.
          </p>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="flex flex-col">
              <div className="overflow-hidden mb-4" style={{ aspectRatio: '1' }}>
                <img src={LUCAS_IMG} alt="Lucas LaCour" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Lucas LaCour</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Owner / Operator</p>
              <a href="mailto:lucas@upwarddevelopment.us" className="text-xs text-gray-500 hover:text-primary">lucas@upwarddevelopment.us</a>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden mb-4" style={{ aspectRatio: '1' }}>
                <img src={FAITH_IMG} alt="Faith LaCour" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Faith LaCour</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Operations Coordinator</p>
              <a href="mailto:faith@upwardedevelopment.us" className="text-xs text-gray-500 hover:text-primary">faith@upwardedevelopment.us</a>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden mb-4" style={{ aspectRatio: '1' }}>
                <img src={DANIEL_IMG} alt="Daniel LaCour" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Daniel LaCour</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Lead Operator</p>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden mb-4" style={{ aspectRatio: '1' }}>
                <img src="/team-ryan.jpg" alt="Ryan" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Ryan</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Team Member</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What our customers think...</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="border border-gray-100 p-6">
                <div className="flex mb-3">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <span key={s} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-gray-900 font-bold text-sm">— {r.name}</p>
              </div>
            ))}
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
