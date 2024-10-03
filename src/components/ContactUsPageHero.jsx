import React from "react";
import backgroundImage from "/src/assets/Optimized image/Frame52-ezgif.com-png-to-webp-converter.webp";

const ContactUsPageHero = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-center rounded-lg max-w-[678px] py-56">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-[47px] font-semibold text-[#FFFFFF] mb-4">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactUsPageHero;
