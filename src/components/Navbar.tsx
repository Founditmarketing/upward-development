import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

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
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-xl py-3 z-50">
                  <Link to="/services/dirt-work" className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Dirt Work</Link>
                  <Link to="/services/land-clearing" className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Land Clearing</Link>
                  <Link to="/services/steel-buildings" className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Steel Buildings</Link>
                  <Link to="/services/super-homes" className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Super Homes</Link>
                  <Link to="/services/real-estate" className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Real Estate Investments</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-sm font-semibold hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-primary transition-colors">Contact</Link>

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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          <Link to="/" className="block py-3 font-semibold hover:text-primary border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Home</Link>

          <div className="py-2 border-b border-gray-50">
            <div className="font-semibold text-gray-900 pb-2">Services</div>
            <Link to="/services/dirt-work" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Dirt Work</Link>
            <Link to="/services/land-clearing" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Land Clearing</Link>
            <Link to="/services/steel-buildings" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Steel Buildings</Link>
            <Link to="/services/super-homes" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Super Homes</Link>
            <Link to="/services/real-estate" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Real Estate Investments</Link>
          </div>

          <Link to="/about" className="block py-3 font-semibold hover:text-primary border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="block py-3 font-semibold hover:text-primary border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <a href="tel:3184527653" className="block bg-primary text-white px-4 py-3 font-semibold text-center mt-4" onClick={() => setIsMenuOpen(false)}>
            Call 318-452-7653
          </a>
        </div>
      )}
    </nav>
  );
}
