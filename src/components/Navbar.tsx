import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo-2.png" alt="Upward Development" className="h-10 sm:h-12 mix-blend-darken contrast-125 brightness-110 object-contain" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</Link>
            
            <Link to="/about" className="text-sm font-semibold hover:text-primary transition-colors">About Us</Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors py-8"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max bg-white border border-gray-100 shadow-xl rounded-sm py-6 px-6 z-50 flex gap-8">
                  <div className="min-w-[200px]">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-4">Core Services</h3>
                    <div className="space-y-1">
                      <Link to="/services/dirt-work" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Dirt Work & Land Clearing</Link>
                      <Link to="/services/steel-buildings" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Steel Buildings</Link>
                      <Link to="/services/super-homes" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Super Homes</Link>
                      <Link to="/services/real-estate" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Real Estate Investments</Link>
                    </div>
                  </div>
                  <div className="border-l border-gray-100 pl-8 min-w-[350px]">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-4">Specialized Site Prep</h3>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      <Link to="/services/house-pads" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>House Pads</Link>
                      <Link to="/services/mobile-home-pads" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Mobile Home Pads</Link>
                      <Link to="/services/forestry-mulching" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Forestry Mulching</Link>
                      <Link to="/services/residential-lot-clearing" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Lot Clearing</Link>
                      <Link to="/services/underbrush-removal" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Underbrush Removal</Link>
                      <Link to="/services/commercial-site-prep" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Commercial Prep</Link>
                      <Link to="/services/yard-grading" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Yard Grading</Link>
                      <Link to="/services/retention-ponds" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Retention Ponds</Link>
                      <Link to="/services/final-grading" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Final Grading</Link>
                      <Link to="/services/culvert-installation" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded-sm transition-colors" onClick={() => setIsServicesOpen(false)}>Culvert Installation</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-sm font-semibold hover:text-primary transition-colors">Contact Us</Link>
            
            <a href="tel:3184527653" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-sm font-semibold transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              318-452-7653
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg h-[calc(100vh-80px)] overflow-y-auto">
          <Link to="/" className="block font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
          
          <Link to="/about" className="block font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>About Us</Link>

          <div className="space-y-4">
            <div>
              <div className="font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-2">Core Services</div>
              <Link to="/services/dirt-work" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Dirt Work & Land Clearing</Link>
              <Link to="/services/steel-buildings" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Steel Buildings</Link>
              <Link to="/services/super-homes" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Super Homes</Link>
              <Link to="/services/real-estate" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Real Estate Investments</Link>
            </div>
            
            <div>
              <div className="font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-2">Specialized Site Prep</div>
              <div className="grid grid-cols-2 gap-2 pl-4">
                <Link to="/services/house-pads" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>House Pads</Link>
                <Link to="/services/mobile-home-pads" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Mobile Home Pads</Link>
                <Link to="/services/forestry-mulching" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Forestry Mulching</Link>
                <Link to="/services/residential-lot-clearing" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Lot Clearing</Link>
                <Link to="/services/underbrush-removal" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Underbrush Removal</Link>
                <Link to="/services/commercial-site-prep" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Commercial Prep</Link>
                <Link to="/services/yard-grading" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Yard Grading</Link>
                <Link to="/services/retention-ponds" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Retention Ponds</Link>
                <Link to="/services/final-grading" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Final Grading</Link>
                <Link to="/services/culvert-installation" className="block py-1 text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Culvert Installation</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="block font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          
          <a href="tel:3184527653" className="block bg-primary text-white px-4 py-2 rounded-sm font-semibold text-center mt-4" onClick={() => setIsMenuOpen(false)}>
            Call 318-452-7653
          </a>
        </div>
      )}
    </nav>
  );
}
