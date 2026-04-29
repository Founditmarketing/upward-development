import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src="/logo-2.png" alt="Upward Development" className="h-10 object-contain brightness-200 invert mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              All of our work is pointed upward for the glory of God.<br />
              Lake Charles, LA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services/dirt-work" className="hover:text-primary transition-colors">Dirt Work</Link></li>
              <li><Link to="/services/land-clearing" className="hover:text-primary transition-colors">Land Clearing</Link></li>
              <li><Link to="/services/steel-buildings" className="hover:text-primary transition-colors">Steel Buildings</Link></li>
              <li><Link to="/services/super-homes" className="hover:text-primary transition-colors">Super Homes</Link></li>
              <li><Link to="/services/real-estate" className="hover:text-primary transition-colors">Real Estate Investments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="tel:3184527653" className="hover:text-primary transition-colors">318-452-7653</a></li>
              <li>1650 E Gauthier Rd, Lake Charles, LA</li>
              <li className="pt-2">
                <a href="https://www.instagram.com/upwarddevelopmentllc/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/UpwardDevelopmentLLC" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — matching original tagline */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-white font-bold tracking-widest uppercase text-sm mb-1">Communication. Quality. Value.</p>
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Upward Development</p>
      </div>
    </footer>
  );
}
