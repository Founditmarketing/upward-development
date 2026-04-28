import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import DirtWork from './pages/services/DirtWork';
import LandClearing from './pages/services/LandClearing';
import SteelBuildings from './pages/services/SteelBuildings';
import SuperHomes from './pages/services/SuperHomes';
import RealEstate from './pages/services/RealEstate';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/dirt-work" element={<DirtWork />} />
            <Route path="/services/land-clearing" element={<LandClearing />} />
            <Route path="/services/steel-buildings" element={<SteelBuildings />} />
            <Route path="/services/super-homes" element={<SuperHomes />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
