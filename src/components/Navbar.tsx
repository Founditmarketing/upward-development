import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { label: 'Dirt Work', to: '/services/dirt-work' },
  { label: 'Land Clearing', to: '/services/land-clearing' },
  { label: 'Steel Buildings', to: '/services/steel-buildings' },
  { label: 'Super Homes', to: '/services/super-homes' },
  { label: 'Real Estate Investments', to: '/services/real-estate' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = serviceLinks.some(s => location.pathname === s.to);

  return (
    <nav className="fixed w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[70px] items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo-2.png"
              alt="Upward Development"
              className="h-10 sm:h-12 object-contain brightness-200 invert"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">

            <Link
              to="/"
              className={`px-5 py-2 text-sm font-semibold transition-colors ${
                isActive('/') ? 'bg-primary text-black' : 'text-white hover:text-primary'
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-5 py-2 text-sm font-semibold transition-colors ${
                  isServiceActive ? 'bg-primary text-black' : 'text-white hover:text-primary'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-black border border-white/10 shadow-2xl z-50">
                  {serviceLinks.map(s => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-5 py-3 text-sm text-white hover:bg-primary hover:text-black font-semibold transition-colors border-b border-white/5 last:border-0"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-5 py-2 text-sm font-semibold transition-colors ${
                isActive('/about') ? 'bg-primary text-black' : 'text-white hover:text-primary'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`px-5 py-2 text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'bg-primary text-black' : 'text-white hover:text-primary'
              }`}
            >
              Contact
            </Link>

            <a
              href="tel:3184527653"
              className="ml-4 bg-primary hover:bg-primary-dark text-black font-bold px-5 py-2 text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              318-452-7653
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-3 space-y-1">
          <Link to="/" className="block py-2.5 text-white font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>

          <div className="py-1">
            <div className="text-gray-400 text-xs uppercase tracking-wider pb-2 pt-1 font-bold">Services</div>
            {serviceLinks.map(s => (
              <Link key={s.to} to={s.to} className="block pl-3 py-2 text-sm text-white hover:text-primary font-semibold" onClick={() => setIsMenuOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>

          <Link to="/about" className="block py-2.5 text-white font-semibold hover:text-primary border-t border-white/10" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="block py-2.5 text-white font-semibold hover:text-primary border-t border-white/10" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <a
            href="tel:3184527653"
            className="block bg-primary text-black text-center font-bold px-4 py-3 mt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            318-452-7653
          </a>
        </div>
      )}
    </nav>
  );
}
