import { motion } from 'motion/react';
import { Home, ShieldCheck, CheckCircle2, Hammer } from 'lucide-react';

export default function SuperHomes() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/super-hero-2.jpg" 
            alt="Super Homes Hero" 
            className="w-full h-full object-cover transform scale-[1.2] origin-bottom-left"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Hammer className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Super Homes</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Commercial strength meets residential beauty. Steel-reinforced to withstand the toughest storms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Built Louisiana Tough</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                Inspired by the resilience needed after Hurricane Laura, our Super Homes blend commercial-grade steel reinforcement with stunning residential aesthetics. You don't have to sacrifice beauty for safety.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Why Choose a Super Home?</h3>
              <ul className="space-y-4">
                {[
                  "Hurricane-Resistant Steel Framing",
                  "Superior Energy Efficiency",
                  "Lower Insurance Premiums",
                  "Faster Construction Timelines",
                  "Customizable Floor Plans",
                  "Pest and Termite Resistant"
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
                  src="/super-body.jpg" 
                  alt="Super Homes Construction" 
                  className="w-full h-full object-cover transform scale-[1.2] origin-bottom-left"
                />
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Interested in a Super Home?</h3>
                <p className="text-gray-600 mb-6">Contact us to learn more about the design and construction process for our Super Homes.</p>
                <a href="/#contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-sm transition-colors">
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
