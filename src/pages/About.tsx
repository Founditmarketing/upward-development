import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            alt="About Us" 
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              The LaCour Family Story. Built on a foundation of faith, family, and commercial-grade strength.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-6">The LaCour Family Story</h2>
              <div className="w-20 h-1.5 bg-primary mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  After many years in the real estate, timber, car wash and billboard business, we started Upward Development in 2024 to obtain the licenses and insurance to construct our larger projects. We immediately found that our entire family loved the construction business, so we started doing a few projects for others.
                </p>
                <p>
                  One thing led to another and now we are scaling upward to meet not only our needs, but also the construction needs of many others like you. Every one of our companies are built on a reliable team, quality work and reasonable prices.
                </p>
                <div className="bg-white p-6 border-l-4 border-primary shadow-sm mt-8">
                  <p className="text-xl font-heading italic text-gray-900">
                    "All of our work is pointed upward for the glory of God."
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                  alt="Construction Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-8 border-primary/20 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-sm shadow-xl hidden md:block">
                <div className="text-4xl font-bold font-heading mb-1">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Family Owned</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
