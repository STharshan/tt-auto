import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Footer from "./components/FooterSection";
import Mot from "./page/Services/Mot";
import Brake from "./page/Services/Brake";
import TimeBelts from "./page/Services/TimeBelts";
import Batteries from "./page/Services/Batteries";
import Suspension from "./page/Services/Suspension";
import Clutches from "./page/Services/Clutches";

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
        <Route path="services/suspension" element={<Suspension />} />
        <Route path="/services/clutches" element={<Clutches />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
