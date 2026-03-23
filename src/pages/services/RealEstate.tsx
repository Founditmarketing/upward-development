import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RealEstate() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
            alt="Real Estate" 
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
              <TrendingUp className="w-5 h-5" /> Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Estate Investments</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We buy land, homesites, and "fixer-uppers." Contact us to sell your property or partner on a development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partnering for Growth</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                With a strong foundation in real estate, Upward Development is always looking for new investment opportunities. Whether you have raw land ready for development, a distressed property that needs rehabilitation, or a joint venture proposal, we're interested in talking.
              </p>
              
              <h3 className="text-xl font-bold mb-4">What We Look For:</h3>
              <ul className="space-y-4">
                {[
                  "Raw Land & Acreage",
                  "Residential Homesites",
                  "Distressed Properties / Fixer-Uppers",
                  "Commercial Lots",
                  "Joint Venture Development Opportunities",
                  "Off-Market Properties"
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
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80" 
                alt="Real estate development" 
                className="w-full h-64 object-cover rounded-sm shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <h3 className="text-xl font-bold mb-4">Have a property to sell?</h3>
                <p className="text-gray-600 mb-6">Reach out to us to discuss selling your property or exploring investment partnerships.</p>
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
