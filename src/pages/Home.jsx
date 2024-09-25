import React from "react";
import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactUsSection";
import PreventionSection from "../components/PreventionSection";
import CardComponent from "../components/CardComponent";
import MapComponent from "../components/MapComponent";
import Categories from "../components/CategoriesComponent";

const Home = () => {
  return (
    <div>
      <MapComponent />
      <AboutSection />
      <CardComponent />
      <Categories />
      <ContactUsSection />
      <PreventionSection />
    </div>
  );
};

export default Home;
