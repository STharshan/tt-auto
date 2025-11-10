import React from 'react'
import FAQSection from '../../components/Services/Brakes/FAQ'
import SolutionSection from '../../components/Services/Brakes/Solution'
import ProblemSection from '../../components/Services/Brakes/Problem'
import AboutSection from '../../components/Services/Brakes/About'
import HeroSection from '../../components/Services/Brakes/Hero'

const Brake = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProblemSection />
          
            <FAQSection />
        </div>
    )
}

export default Brake
