import React from "react";
import image1 from "/src/assets/Frame 19 (1).png";
import image2 from "/src/assets/ic_twotone-grass (1).png";
import image3 from "/src/assets/ph_plant-fill (5).png"

const PreventionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative">
      {/* Left Side - About Us Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-3xl md:text-[39px] font-semibold relative mb-8 text-[#393939]">
          Prevention <span className="text-[#6BA85D]">Tips</span>
          <span className="absolute -bottom-3 left-0 w-[55px] md:w-[195px] h-1 bg-[#6BA85D]"></span>
        </h2>
        {/* <p className="text-[#9F9F9F] text-lg md:text-base font-medium leading-6 text-justify max-w-[546px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
          turpis et commodo pharetra, est eros bLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p> */}
        {/* Bullet Points */}
        <ul className="list-disc text-[#9F9F9F] text-lg md:text-base font-medium leading-6 text-justify max-w-[546px] pl-6">
          <li className="mb-3">
            Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </li>
          <li className="mb-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur adipiscing elit. Sed do.
          </li>
          <li className="mb-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum eiusmod tempor
            incididunt.
          </li>
          <li>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
            varius turpis et commodo pharetra, est eros ut labore et dolore
            magna aliqua..
          </li>
        </ul>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Top Image */}
        <img
          src={image1}
          alt="Prevention Top"
          className="w-[560px] h-[550px] rounded relative z-20"
        />
        {/* Bottom Image */}
        <img
          src={image2}
          alt="Prevention Bottom"
          className="w-[168px] h-[161px] absolute -top-1 left-6 md:-left-5 z-10"
        />
      </div>
      {/* Hologram Image - Positioned Bottom Left */}
      <img
        src={image3}
        alt="Hologram"
        className="absolute bottom-16 left-[80px] w-[181px] h-[125px]"
      />
    </div>
  );
};

export default PreventionSection;
