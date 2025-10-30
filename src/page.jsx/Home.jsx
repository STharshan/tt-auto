import React from 'react'
import CreditSection from "../components/CreditSection"
import HeroSection from "../components/HeroSection"
import PartnersCarousel from "../components/Partner"
import ProductSection from "../components/Product"
import ProcessSection from "../components/Service"
import Testimonials from "../components/Testimonial"
import ContactSection from "../components/ContactSection"
import MapSection from "../components/MapSection"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <PartnersCarousel />
            <CreditSection />
            <ProcessSection />
            <ProductSection />
            <Testimonials />
            <ContactSection />
            <MapSection />
        </div>
    )
}

export default Home
