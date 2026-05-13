import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import IndividualisedExerciseTherapy from './pages/IndividualisedExerciseTherapy';
import ManualTherapy from './pages/ManualTherapy';
import ReturnToWorkAndSport from './pages/ReturnToWorkAndSport';
import SportsTaping from './pages/SportsTaping';
import Conditions from './pages/Conditions';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<ArticleDetail />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/services/individualised-exercise-therapy" element={<IndividualisedExerciseTherapy />} />
            <Route path="/services/manual-therapy" element={<ManualTherapy />} />
            <Route path="/services/return-to-work-and-sport" element={<ReturnToWorkAndSport />} />
            <Route path="/services/sports-taping" element={<SportsTaping />} />
            <Route path="/about" element={<About />} />
            <Route path="/clinics" element={<About />} />
            <Route path="/philosophy" element={<About />} />
            <Route path="/team" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
