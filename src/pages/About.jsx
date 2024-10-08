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
      <hr className="block md:hidden w-[85%] mx-auto h-[1px] bg-[#E2E2E2] mt-3 mb-14"/>
      <MissionSection />
      <WhatWeDoSection />
      <WhyItMattersSection />
      <OurTeamSection />
      <ContactUsSection />
    </div>
  );
};

export default About;
