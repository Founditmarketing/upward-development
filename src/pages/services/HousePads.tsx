import { motion } from 'motion/react';
import { Home, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export default function HousePads() {
  
  // JSON-LD Schema for House Pads Service Entity
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ExcavatingContractor",
      "name": "Upward Development",
      "image": "https://www.upward-development.com/logo.png",
      "url": "https://www.upward-development.com/",
      "telephone": "+1-337-555-0100", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lake Charles",
        "addressLocality": "Lake Charles",
        "addressRegion": "LA",
        "postalCode": "70601",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.2266,
        "longitude": -93.2174
      },
      "areaServed": {
        "@type": "City",
        "name": "Lake Charles",
        "sameAs": "https://en.wikipedia.org/wiki/Lake_Charles,_Louisiana"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Site Preparation and Dirt Work Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "House Pad Construction",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "House Pad Construction and Soil Compaction",
                  "description": "Professional house dirt pad construction in Lake Charles, LA. We ensure proper elevation for flood zones, precise grading, and optimal soil compaction for a stable structural foundation before concrete is poured.",
                  "serviceType": "Site Preparation",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Upward Development"
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Lake Charles",
                      "sameAs": "https://en.wikipedia.org/wiki/Lake_Charles,_Louisiana"
                    },
                    {
                      "@type": "County",
                      "name": "Calcasieu Parish"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gray-900">
          <img 
            src="/housepad.jpg" 
            alt="House Pad Construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Home className="w-5 h-5" /> Detailed Service Entity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">House Pad Construction</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Lake Charles' premier house pad construction and soil compaction contractor ensuring proper elevation for local flood zones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Building on a Solid Foundation</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                In Southwest Louisiana, building a new home means dealing with heavy clay soil, high rainfall, and strict flood zone elevations. Upward Development specializes in constructing robust, precision-leveled house pads that meet all Calcasieu Parish requirements. 
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Flood Zone Elevation", desc: "Building pads up to required heights to protect from standing water and floods." },
                  { title: "Soil Compaction", desc: "Using heavy machinery to ensure maximum structural stability before you pour concrete." },
                  { title: "Select Fill Dirt", desc: "We deliver and spread the right structural clay/dirt mixes." },
                  { title: "Final Laser Grading", desc: "Perfectly leveling the pad to the exact inch." },
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
                  src="/housepad_body.png" 
                  alt="House Pad Construction" 
                  className="w-full h-full object-cover transform scale-[1.2] origin-top-right"
                />
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Start Your New Construction Right</h3>
                <p className="text-gray-600 mb-6">Contact us today to schedule an evaluation of your land and get a quote on your house pad.</p>
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
