import React from 'react'
import FAQSection from '../../components/Services/MOT/FAQ'
import SolutionSection from '../../components/Services/MOT/Solution'
import ProblemSection from '../../components/Services/MOT/Problem'
import AboutSection from '../../components/Services/MOT/About'
import HeroSection from '../../components/HeroSection'

const Mot = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProblemSection />
            <SolutionSection />
            <FAQSection />
        </div>
    )
}

export default Mot
