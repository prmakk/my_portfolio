import React from 'react'

import HeroSection from '../sections/HeroSection/HeroSection'
import AboutSection from '../sections/AboutSection/AboutSection'
import SkillsSection from '../sections/SkillsSection/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection/ProjectsSection'
import ContactSection from '../sections/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'

const MainPage = () => {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default MainPage