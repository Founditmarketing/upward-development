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
import CommercialSitePrep from './pages/services/CommercialSitePrep';
import CulvertInstallation from './pages/services/CulvertInstallation';
import FinalGrading from './pages/services/FinalGrading';
import ForestryMulching from './pages/services/ForestryMulching';
import HousePads from './pages/services/HousePads';
import MobileHomePads from './pages/services/MobileHomePads';
import RetentionPonds from './pages/services/RetentionPonds';
import UnderbrushRemoval from './pages/services/UnderbrushRemoval';
import YardGrading from './pages/services/YardGrading';
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
            {/* Core services */}
            <Route path="/services/dirt-work" element={<DirtWork />} />
            <Route path="/services/land-clearing" element={<LandClearing />} />
            <Route path="/services/steel-buildings" element={<SteelBuildings />} />
            <Route path="/services/super-homes" element={<SuperHomes />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            {/* Additional services */}
            <Route path="/services/commercial-site-prep" element={<CommercialSitePrep />} />
            <Route path="/services/culvert-installation" element={<CulvertInstallation />} />
            <Route path="/services/final-grading" element={<FinalGrading />} />
            <Route path="/services/forestry-mulching" element={<ForestryMulching />} />
            <Route path="/services/house-pads" element={<HousePads />} />
            <Route path="/services/mobile-home-pads" element={<MobileHomePads />} />
            <Route path="/services/retention-ponds" element={<RetentionPonds />} />
            <Route path="/services/underbrush-removal" element={<UnderbrushRemoval />} />
            <Route path="/services/yard-grading" element={<YardGrading />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
