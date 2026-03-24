import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Tractor, 
  Home as HomeIcon, 
  TrendingUp, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Star,
  ChevronRight,
  Hammer
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Video & Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            src="/drone-hero.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover transform scale-[1.2] origin-top-left pointer-events-none opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-[#0a0f1c]/90 to-[#0a0f1c]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Image with Upward Arrow Shape */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
            >
              {/* Decorative Accent Behind Image */}
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full bg-primary/30"
                style={{ clipPath: 'polygon(50% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%)' }}
              ></div>
              
              {/* Main Image */}
              <div 
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] bg-gray-800"
                style={{ clipPath: 'polygon(50% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%)' }}
              >
                <img 
                  src="/arrow-img.jpg" 
                  alt="Upward Development Property" 
                  className="w-full h-full object-cover transform scale-[1.3] origin-top-right"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
                  Bringing your project to life
                </span>
                <div className="h-0.5 w-12 bg-primary"></div>
                <div className="h-0.5 w-4 bg-primary"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Elevating Your <br/>
                <span className="text-primary">Property's Value</span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                Licensed and insured construction services based in Lake Charles, LA. Built on a foundation of faith, family, and commercial-grade strength.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all transform hover:-translate-y-1 inline-block text-center shadow-lg shadow-primary/20 rounded-none">
                  Get a Quote
                </a>
              </div>
              
              <div className="mt-16 flex items-center gap-6">
                <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Insured in Louisiana
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
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
                  <strong className="text-gray-900">The Transition:</strong> What started in real estate and timber evolved into a full-scale construction firm in 2024. We saw a need for reliable, high-quality development in our community, and we scaled up to meet it.
                </p>
                <p>
                  <strong className="text-gray-900">The Team:</strong> We are a family-run team that prides itself on being "Louisiana Tough." When you work with Upward Development, you're getting a dedicated crew that treats your property like our own.
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
                  src="/about-img.jpg" 
                  alt="About Upward Development" 
                  className="w-full h-full object-cover transform scale-[1.4] origin-bottom-left grayscale hover:grayscale-0 transition-all duration-500"
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center mix-blend-luminosity transform scale-[1.4] origin-bottom-left"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
              <Hammer className="w-5 h-5" /> What We Do
            </div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">Our Services</h2>
            <p className="text-lg text-gray-400">
              Comprehensive construction and development solutions built with commercial-grade strength.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-sm border border-gray-800 hover:border-primary/50 transition-all group"
            >
              <Link to="/services/dirt-work" className="block h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                  <Tractor className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Dirt Work & Land Clearing</h3>
                <p className="text-gray-400 mb-6">
                  Land clearing, culvert installations, ponds, house pads, and debris removal. Equipped for any property size.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Insured
                </div>
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-sm border border-gray-800 hover:border-primary/50 transition-all group"
            >
              <Link to="/services/steel-buildings" className="block h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                  <Building2 className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Steel Buildings</h3>
                <p className="text-gray-400 mb-6">
                  Engineered steel structures. From chicken coops to shopping centers—licensed, trained, and equipped.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Insured
                </div>
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-sm border border-gray-800 hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              <Link to="/services/super-homes" className="block h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                  <HomeIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Super Homes</h3>
                <p className="text-gray-400 mb-6">
                  Commercial strength meets residential beauty. Steel-reinforced to withstand the toughest storms (Inspired by Hurricane Laura).
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Insured
                </div>
              </Link>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-sm border border-gray-800 hover:border-primary/50 transition-all group"
            >
              <Link to="/services/real-estate" className="block h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                  <TrendingUp className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Real Estate Investments</h3>
                <p className="text-gray-400 mb-6">
                  We buy land, homesites, and "fixer-uppers." Contact us to sell your property or partner on a development.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Insured
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-4">Have Any Questions?</h2>
              <div className="w-20 h-1.5 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-10">
                Whether you need land cleared, a steel building erected, or want to discuss our signature Super Homes, we're ready to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-sm flex items-center justify-center shrink-0 border border-gray-100">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Direct Contact</h4>
                    <a href="tel:3184527653" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">Call or Text 318-452-7653</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-sm flex items-center justify-center shrink-0 border border-gray-100">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-xl font-bold text-gray-900">Lake Charles, LA</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-gray-100 rounded-sm shadow-sm mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="font-bold text-lg mb-2">5-Star Reliability</p>
                  <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-1">
                    Read our Google Reviews <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 rounded-sm shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Project Type *</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" required>
                    <option value="">Select a service...</option>
                    <option value="dirt">Dirt Work & Land Clearing</option>
                    <option value="steel">Steel Buildings</option>
                    <option value="superhome">Super Homes</option>
                    <option value="realestate">Real Estate Investments</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-sm transition-colors text-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
