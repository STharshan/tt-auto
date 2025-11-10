import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page.jsx/Home";
import Footer from "./components/FooterSection";
import Mot from "./page.jsx/Services/Mot";
import Brake from "./page.jsx/Services/Brake";
import TimeBelts from "./page.jsx/Services/TimeBelts";
import Batteries from "./page.jsx/Services/Batteries";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/mot" element={<Mot />} />  
        <Route path="/services/brake" element={<Brake />} />
        <Route path="/services/time-belts" element={<TimeBelts />} />
        <Route path="/services/batteries" element={<Batteries  />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
