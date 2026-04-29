import { Building2, ShieldCheck, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 border-t-4 border-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.jpg" alt="Upward Development" className="h-10 sm:h-12 invert hue-rotate-[180deg] brightness-125 mix-blend-screen object-contain" />
            </div>
            <p className="text-gray-400 mb-6">
              All of our work is pointed upward for the glory of God. Elevating property values in Lake Charles, LA with commercial-grade strength.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
              <ShieldCheck className="w-5 h-5" /> Licensed & Insured
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/services/dirt-work" className="hover:text-primary transition-colors">Dirt Work</Link></li>
              <li><Link to="/services/land-clearing" className="hover:text-primary transition-colors">Land Clearing</Link></li>
              <li><Link to="/services/steel-buildings" className="hover:text-primary transition-colors">Steel Buildings</Link></li>
              <li><Link to="/services/super-homes" className="hover:text-primary transition-colors">Super Homes</Link></li>
              <li><Link to="/services/real-estate" className="hover:text-primary transition-colors">Real Estate Investments</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Connect</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> 318-452-7653
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Lake Charles, LA
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Social Media</h5>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/upwarddevelopmentllc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Instagram: @upwarddevelopmentllc</a>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://www.facebook.com/UpwardDevelopmentLLC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Facebook: Upward Development LLC</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Upward Development LLC. All rights reserved.</p>
          <p>Built with Louisiana Toughness.</p>
        </div>
      </div>
    </footer>
  );
}
