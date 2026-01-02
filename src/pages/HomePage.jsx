import React from 'react';
import HeroSection from '../sections/HeroSection';
import FeatureSection from '../sections/FeatureSection';
import Resume from '../sections/Resume';
import ProjectSection from '../sections/ProjectSection';
import SkillsSection from '../sections/SkillsSection';
import TestimonialSection from '../sections/TestimonialSection';
import ContactSection from '../sections/ContactSection';
import ScrollToTop from '../utils/ScrollToTop';
import CustomCursor from '../utils/CustomCursor';


const HomePage = () => {


    return (
        <>
       
            <HeroSection />
            {/* <HeaderHero/> */}
            <FeatureSection />
            <Resume />
            <SkillsSection />
            <ProjectSection />
            <TestimonialSection />
            <ContactSection />

        </>
    );
};

export default HomePage;