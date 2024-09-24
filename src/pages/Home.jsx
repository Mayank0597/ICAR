import React from "react";
import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactUsSection";
import PreventionSection from "../components/PreventionSection";
import CardComponent from "../components/CardComponent";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <CardComponent />
      <ContactUsSection />
      <PreventionSection />
    </div>
  );
};

export default Home;
