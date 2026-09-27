import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import IndividualisedExerciseTherapy from './pages/IndividualisedExerciseTherapy';
import ManualTherapy from './pages/ManualTherapy';
import ReturnToWorkAndSport from './pages/ReturnToWorkAndSport';
import Education from './pages/Education';
import Conditions from './pages/Conditions';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';

import CanonicalManager from './components/CanonicalManager';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CanonicalManager />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/dry-needling-muscle-pain-tightness" element={<Navigate to="/insights/our-take-on-manual-therapy" replace />} />
            <Route path="/insights/five-signs-back-pain-needs-physio" element={<Navigate to="/insights/five-signs-your-tendons-need-rehabilitation" replace />} />
            <Route path="/insights/:slug" element={<ArticleDetail />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/services/individualised-exercise-therapy" element={<IndividualisedExerciseTherapy />} />
            <Route path="/services/manual-therapy" element={<ManualTherapy />} />
            <Route path="/services/return-to-work-and-sport" element={<ReturnToWorkAndSport />} />
            <Route path="/services/education" element={<Education />} />
            <Route path="/services/sports-taping" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn-more" element={<Navigate to="/about" replace />} />
            <Route path="/learn-more/*" element={<Navigate to="/about" replace />} />
            <Route path="/clinics" element={<Navigate to="/about" replace />} />
            <Route path="/philosophy" element={<Navigate to="/about" replace />} />
            <Route path="/team" element={<Navigate to="/about" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/terms-and%20conditions" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/terms-and conditions" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
