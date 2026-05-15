import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/logo-2.png" alt="Upward Development" className="h-10 object-contain brightness-200 invert mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              All of our work is pointed upward for the glory of God.<br />
              Lake Charles, LA
            </p>
          </div>

          {/* Construction Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Construction</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services/dirt-work" className="hover:text-primary transition-colors">Dirt Work</Link></li>
              <li><Link to="/services/land-clearing" className="hover:text-primary transition-colors">Land Clearing</Link></li>
              <li><Link to="/services/steel-buildings" className="hover:text-primary transition-colors">Steel Buildings</Link></li>
              <li><Link to="/services/super-homes" className="hover:text-primary transition-colors">Super Homes</Link></li>
              <li><Link to="/services/commercial-site-prep" className="hover:text-primary transition-colors">Commercial Site Prep</Link></li>
              <li><Link to="/services/house-pads" className="hover:text-primary transition-colors">House Pads</Link></li>
              <li><Link to="/services/mobile-home-pads" className="hover:text-primary transition-colors">Mobile Home Pads</Link></li>
            </ul>
          </div>

          {/* Land & Specialty */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Land &amp; Specialty</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services/forestry-mulching" className="hover:text-primary transition-colors">Forestry Mulching</Link></li>
              <li><Link to="/services/underbrush-removal" className="hover:text-primary transition-colors">Underbrush Removal</Link></li>
              <li><Link to="/services/culvert-installation" className="hover:text-primary transition-colors">Culvert Installation</Link></li>
              <li><Link to="/services/retention-ponds" className="hover:text-primary transition-colors">Retention Ponds</Link></li>
              <li><Link to="/services/yard-grading" className="hover:text-primary transition-colors">Yard Grading</Link></li>
              <li><Link to="/services/final-grading" className="hover:text-primary transition-colors">Final Grading</Link></li>
              <li><Link to="/services/real-estate" className="hover:text-primary transition-colors">Real Estate Investments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="tel:3184527653" className="hover:text-primary transition-colors">318-452-7653</a></li>
              <li><a href="mailto:lucas@upwarddevelopment.us" className="hover:text-primary transition-colors">lucas@upwarddevelopment.us</a></li>
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


