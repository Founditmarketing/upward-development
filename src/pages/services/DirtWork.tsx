import { motion } from 'motion/react';
import { Tractor, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DirtWork() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?auto=format&fit=crop&q=80" 
            alt="Dirt Work" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
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
              <h2 className="text-3xl font-bold mb-6">Comprehensive Site Preparation</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                Before any construction can begin, the ground must be properly prepared. Our experienced team handles all aspects of dirt work, ensuring a solid foundation for your project. We are equipped to handle properties of any size in the Lake Charles area.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Land Clearing & Debris Removal",
                  "Culvert Installations",
                  "Pond Digging & Shaping",
                  "House Pads & Building Foundations",
                  "Final Grading & Leveling",
                  "Driveway Preparation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1585246604297-7c914e672727?auto=format&fit=crop&q=80" 
                alt="Excavator at work" 
                className="w-full h-64 object-cover rounded-sm shadow-lg"
                referrerPolicy="no-referrer"
              />
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
