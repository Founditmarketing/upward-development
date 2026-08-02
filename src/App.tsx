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
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import ServiceAreas from './pages/ServiceAreas';
import ServiceAreaPage from './pages/ServiceArea';

/**
 * Everything inside the router. Split out so the static prerender step can
 * wrap it in a StaticRouter instead of a BrowserRouter.
 */
export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />
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
            <Route path="/about" element={<About />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
