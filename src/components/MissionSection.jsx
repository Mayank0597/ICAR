import React from "react";
import image1 from "/src/assets/Optimized image/Frame192-ezgif.com-png-to-webp-converter.webp";
import image2 from "/src/assets/ic_twotone-grass (2).png";
import image3 from "/src/assets/ph_plant-fill (6).png";

const MissionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        {/* Top Image */}
        <img
          src={image1}
          alt="About Us Top"
          className="w-[480px] h-[350px] rounded relative z-20"
        />
        {/* Bottom Image */}
        <img
          src={image2}
          alt="About Us Bottom"
          className="w-[168px] h-[161px] absolute -top-1 left-6 md:left-[457px] z-10"
        />
      </div>
      {/* Right Side - Our Mission Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-3xl md:text-[39px] font-semibold relative mb-8 text-[#393939]">
          Our <span className="text-[#6BA85D]">Mission</span>
          <span className="absolute -bottom-3 left-0 w-[55px] md:w-[65px] h-1 bg-[#6BA85D]"></span>
        </h2>
        <p className="text-[#9F9F9F] text-lg md:text-base font-medium leading-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
          turpis et commodo pharetra, est eros b
        </p>
      </div>
      {/* Hologram Image - Positioned Bottom Left */}
      <img
        src={image3}
        alt="Hologram"
        className="absolute bottom-2 right-[86px] w-[240px] h-[140px]"
      />
    </div>
  );
};

export default MissionSection;
