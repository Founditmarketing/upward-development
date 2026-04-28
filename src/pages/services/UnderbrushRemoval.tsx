import { motion } from 'motion/react';
import { Trees, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export default function UnderbrushRemoval() {
  
  // JSON-LD Schema to verify Upward Development provides this specific service
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ExcavatingContractor",
      "name": "Upward Development",
      "url": "https://www.upward-development.com/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lake Charles",
        "addressRegion": "LA",
        "postalCode": "70601"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Site Preparation Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Underbrush and Stump Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Upward Development"
            }
          }
        }]
      }
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/underbrush_removal_hero.png" 
            alt="Underbrush and Stump Removal" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Trees className="w-5 h-5" /> Detailed Service Entity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Underbrush & Stump Removal</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Upward Development reclaims overgrown land and removes hazardous stumps post-storm or to clean up your property in Calcasieu Parish.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Reclaim Your Usable Space</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                Thick brush and hidden stumps can make parts of your property unusable. Upward Development clears it all efficiently so you can manage your land safely.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Brush Hogging", desc: "Heavy-duty mowing of overgrown fields and thickets." },
                  { title: "Stump Extraction", desc: "Pulling and destroying deep root structures." },
                  { title: "Pasture Restoration", desc: "Turning wild acreage back into usable grazing land." },
                  { title: "Right-of-Way Clearing", desc: "Clearing paths for fences, powerlines, and roads." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span className="text-gray-600"><strong className="text-gray-900">{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="overflow-hidden rounded-sm shadow-lg w-full h-64">
                <img 
                  src="/underbrush_body.png" 
                  alt="Underbrush and Stump Removal Work" 
                  className="w-full h-full object-cover transform scale-[1.2] origin-top-right"
                />
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Want to reclaim your land?</h3>
                <p className="text-gray-600 mb-6">Contact us today to schedule your underbrush and stump removal.</p>
                <a href="/#contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
