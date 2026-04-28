/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DirtWork from './pages/services/DirtWork';
import LandClearing from './pages/services/ResidentialLotClearing';
import SteelBuildings from './pages/services/SteelBuildings';
import SuperHomes from './pages/services/SuperHomes';
import RealEstate from './pages/services/RealEstate';
import HousePads from './pages/services/HousePads';
import MobileHomePads from './pages/services/MobileHomePads';
import CulvertInstallation from './pages/services/CulvertInstallation';
import ResidentialLotClearing from './pages/services/ResidentialLotClearing';
import UnderbrushRemoval from './pages/services/UnderbrushRemoval';
import CommercialSitePrep from './pages/services/CommercialSitePrep';
import YardGrading from './pages/services/YardGrading';
import RetentionPonds from './pages/services/RetentionPonds';
import FinalGrading from './pages/services/FinalGrading';
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
            <Route path="/services/dirt-work" element={<DirtWork />} />
            <Route path="/services/land-clearing" element={<LandClearing />} />
            <Route path="/services/steel-buildings" element={<SteelBuildings />} />
            <Route path="/services/super-homes" element={<SuperHomes />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            <Route path="/services/house-pads" element={<HousePads />} />
            <Route path="/services/mobile-home-pads" element={<MobileHomePads />} />
            <Route path="/services/culvert-installation" element={<CulvertInstallation />} />
            <Route path="/services/residential-lot-clearing" element={<ResidentialLotClearing />} />
            <Route path="/services/underbrush-removal" element={<UnderbrushRemoval />} />
            <Route path="/services/commercial-site-prep" element={<CommercialSitePrep />} />
            <Route path="/services/yard-grading" element={<YardGrading />} />
            <Route path="/services/retention-ponds" element={<RetentionPonds />} />
            <Route path="/services/final-grading" element={<FinalGrading />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
