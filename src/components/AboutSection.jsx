import React from "react";
import image1 from "/src/assets/Optimized image/Frame19-ezgif.com-png-to-webp-converter.webp";
import image2 from "/src/assets/Optimized image/ic_twotone-grass1-ezgif.com-png-to-webp-converter.webp";
import image3 from "/src/assets/Optimized image/ph_plant-fill4-ezgif.com-png-to-webp-converter.webp";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative">
      {/* Left Side - About Us Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-3xl md:text-[39px] font-semibold relative mb-8 text-[#393939]">
          About Us
          <span className="absolute -bottom-3 left-0 w-[55px] md:w-[112px] h-1 bg-[#6BA85D]"></span>
        </h2>
        <p className="text-[#9F9F9F] text-lg md:text-base font-medium leading-6 text-justify">
        Biotic Stress Information System, an initiative by the ICAR - National Institute of Biotic Stress Management (NIBSM). Our platform addresses the growing challenges caused by invasive pests and their associated diseases in agriculture. As a part of the Indian Council of Agricultural Research (ICAR), NIBSM is committed to safeguarding the nation’s agriculture from biotic stress through innovative research, advanced technologies, and public awareness.

        </p>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Top Image */}
        <img
          src={image1}
          alt="About Us Top"
          className="w-[448px] h-[327px] rounded relative z-20"
        />
        {/* Bottom Image */}
        <img
          src={image2}
          alt="About Us Bottom"
          className="w-[168px] h-[161px] absolute -top-0 left-6 md:left-[90px] z-10"
        />
      </div>
      {/* Hologram Image - Positioned Bottom Left */}
      <img
        src={image3}
        alt="Hologram"
        className="absolute -bottom-5 left-[60px] w-[240px] h-[140px]"
      />
    </div>
  );
};

export default AboutSection;
