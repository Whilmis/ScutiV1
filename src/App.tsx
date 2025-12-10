import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';

// Layouts Globales
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Chatbot from './components/ui/Chatbot';
import CookieBanner from './components/ui/CookieBanner';

// Páginas
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';

import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/technology" element={<TechnologyPage />} />

          {/* RUTAS LEGALES REALES */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
      <CookieBanner />
    </div>
  );
};

export default App;