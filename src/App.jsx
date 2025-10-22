import CreditSection from "./components/CreditSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PartnersCarousel from "./components/Partner"
import ProductSection from "./components/Product"
import ProcessSection from "./components/Service"
import Testimonials from "./components/Testimonial"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import MapSection from "./components/MapSection"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersCarousel />
      <CreditSection />
      <ProcessSection />
      <ProductSection />
      <Testimonials />
      <ContactSection />
      <MapSection />
      <FooterSection />
    </>
  )
}

export default App
