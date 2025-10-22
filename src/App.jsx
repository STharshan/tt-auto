import CreditSection from "./components/CreditSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PartnersCarousel from "./components/Partner"
import ProductSection from "./components/Product"
import ProcessSection from "./components/Service"
import Testimonials from "./components/Testimonial"


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersCarousel />
      <ProcessSection />
      <ProductSection />
      <Testimonials />
      <CreditSection />
    </>
  )
}

export default App
