import React from "react";
import AboutUsPageHero from "../components/AboutUsPageHero";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import WhyItMattersSection from "../components/WhyItMattersSection";
import OurTeamSection from "../components/OurTeamSection";
import ContactUsSection from "../components/ContactUsSection";

const About = () => {
  return (
    <div>
      <AboutUsPageHero />
      <AboutSection />
      <MissionSection />
      <WhatWeDoSection />
      <WhyItMattersSection />
      <OurTeamSection />
      <ContactUsSection />
    </div>
  );
};

export default About;
