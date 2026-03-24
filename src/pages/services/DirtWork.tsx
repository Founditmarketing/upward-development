import { motion } from 'motion/react';
import { Tractor, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DirtWork() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/dirtwork-hero.jpg" 
            alt="Dirt Work" 
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
              <Tractor className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dirt Work & Land Clearing</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              From initial site prep to final grading, our heavy equipment operators ensure your land is ready for development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality From the Ground Up</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                At Upward Development, we answer phone calls, text messages and emails. Believe it or not, that sets us apart in this industry. We combine consistent communication and clear scheduling with a refusal to compromise on quality. Our goal is to maximize your property's value through organized project management and low overhead. Based in Lake Charles, we specialize in expert dirt work, ensuring every project—regardless of size—starts on a rock-solid foundation.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Land Clearing & Debris Removal", desc: "Professional lot clearing for a clean start." },
                  { title: "House Pads & Foundations", desc: "Precision-engineered bases for any structure." },
                  { title: "Culvert Installations", desc: "Essential drainage and property access solutions." },
                  { title: "Pond Digging & Shaping", desc: "Custom excavation for functional or decorative ponds." },
                  { title: "Driveway Preparation", desc: "Proper sub-grade work for long-lasting stability." },
                  { title: "Final Grading & Leveling", desc: "Expert contouring for optimal runoff and finishing." }
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
                  src="/dirtwork-body.jpg" 
                  alt="Excavator at work" 
                  className="w-full h-full object-cover transform scale-[1.2] origin-top-right"
                />
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Ready to start your project?</h3>
                <p className="text-gray-600 mb-6">Contact us today for a free estimate on your land clearing or dirt work needs.</p>
                <a href="/#contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
