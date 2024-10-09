import React from "react";
import image1 from "/src/assets/Optimized image/Frame193-ezgif.com-png-to-webp-converter.webp";
import image2 from "/src/assets/Optimized image/ic_twotone-grass1-ezgif.com-png-to-webp-converter.webp";
import image3 from "/src/assets/Optimized image/ph_plant-fill4-ezgif.com-png-to-webp-converter.webp";
import mobileImage from "/src/assets/Optimized image/Frame196-ezgif.com-optiwebp.webp";

const AboutSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-[30px] md:px-20 md:py-16 pt-[50px] bg-white relative">
      {/* Left Side - About Us Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-3xl md:text-[39px] font-semibold relative mb-8 text-[#393939]">
          About Us
          <span className="absolute md:-bottom-3 -bottom-1 left-0 w-[90px] md:w-[112px] h-1 bg-[#6BA85D]"></span>
        </h2>
        <p className="text-[#9F9F9F] text-lg md:text-base font-medium leading-6 text-justify">
          Biotic Stress Information System, an initiative by the ICAR - National
          Institute of Biotic Stress Management (NIBSM). Our platform addresses
          the growing challenges caused by invasive pests and their associated
          diseases in agriculture. As a part of the Indian Council of
          Agricultural Research (ICAR), NIBSM is committed to safeguarding the
          nation’s agriculture from biotic stress through innovative research,
          advanced technologies, and public awareness.
        </p>
        {/* Horizontal Grey Line for Mobile */}
        {/* <div className="block md:hidden w-full h-[1px] bg-[#E2E2E2] mt-[50px]"></div> */}
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full md:w-1/2 md:mb-0 mb-[50px] flex justify-center md:justify-end">
        {/* Top Image */}
        <img
          src={window.innerWidth < 768 ? mobileImage : image1}
          alt="About Us Top"
          className="md:w-[448px] w-full h-auto rounded relative z-20"
        />
        {/* Bottom Image */}
        <img
          src={image2}
          alt="About Us Bottom"
          className="w-[168px] h-[161px] absolute -top-0 left-6 md:left-[90px] z-10 hidden md:block"
        />
      </div>
      {/* Hologram Image - Positioned Bottom Left */}
      <img
        src={image3}
        alt="Hologram"
        className="absolute -bottom-5 left-[60px] w-[240px] h-[140px] hidden md:block"
      />
    </div>
  );
};

export default AboutSection;
