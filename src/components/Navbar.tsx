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
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-sm">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">Upward<span className="text-primary">Development</span></span>
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
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-lg rounded-sm py-2 z-50">
                  <Link to="/services/dirt-work" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Dirt Work & Land Clearing</Link>
                  <Link to="/services/steel-buildings" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Steel Buildings</Link>
                  <Link to="/services/super-homes" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Super Homes</Link>
                  <Link to="/services/real-estate" className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-primary transition-colors" onClick={() => setIsServicesOpen(false)}>Real Estate Investments</Link>
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

          <div className="space-y-2">
            <div className="font-semibold text-gray-900 border-b border-gray-100 pb-2">Services</div>
            <Link to="/services/dirt-work" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Dirt Work & Land Clearing</Link>
            <Link to="/services/steel-buildings" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Steel Buildings</Link>
            <Link to="/services/super-homes" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Super Homes</Link>
            <Link to="/services/real-estate" className="block pl-4 py-2 text-sm font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Real Estate Investments</Link>
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
