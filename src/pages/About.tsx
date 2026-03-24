import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/about-hero.jpg" 
            alt="About Us" 
            className="w-full h-full object-cover"
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
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <div className="w-20 h-1.5 bg-primary mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2024, Upward Development was born from a history in the real estate, timber, carwash, and billboard industries. What began as a strategic move to secure the licensing and insurance necessary for our own large-scale projects quickly evolved into a true family passion. We discovered a collective love for the building process, leading us to extend our expertise beyond our own portfolio to serve the needs of our community.
                </p>
                <p>
                  Today, we are scaling rapidly to provide high-quality construction services for clients like you, driven by the same principles that have defined all our ventures: a reliable team, superior craftsmanship, and fair, transparent pricing. Most importantly, our mission transcends the job site; we approach every project with a commitment to excellence, ensuring all our work is pointed upward for the glory of God.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="/about-body.jpg" 
                  alt="About Upward Development" 
                  className="w-full h-auto transform scale-[1.15] origin-bottom-right grayscale hover:grayscale-0 transition-all duration-500"
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
