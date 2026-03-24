import { motion } from 'motion/react';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SteelBuildings() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/services-bg.jpg" 
            alt="Steel Buildings Hero" 
            className="w-full h-full object-cover transform scale-[1.4] origin-bottom-left"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Steel Buildings</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Engineered steel structures. From chicken coops to shopping centers—licensed, trained, and equipped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Durable & Versatile Structures</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                Steel buildings offer unmatched durability, speed of construction, and cost-effectiveness. Whether you need a small agricultural shed or a massive commercial warehouse, our team has the expertise to design and erect the perfect steel structure for your needs.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Common Applications:</h3>
              <ul className="space-y-4">
                {[
                  "Commercial Warehouses & Shops",
                  "Agricultural Buildings & Barns",
                  "Retail Centers",
                  "Aviation Hangars",
                  "Custom Garages & Workshops",
                  "Storage Facilities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="overflow-hidden rounded-sm shadow-lg w-full h-64">
                <img 
                  src="/steel-body-2.jpg" 
                  alt="Steel construction welding" 
                  className="w-full h-full object-cover transform scale-[1.25] origin-bottom-right brightness-110"
                />
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Get a Custom Quote</h3>
                <p className="text-gray-600 mb-6">Let's discuss the specifications for your next steel building project.</p>
                <a href="/#contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
