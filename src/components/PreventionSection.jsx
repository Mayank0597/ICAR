import React from "react";
import image1 from "/src/assets/Optimized image/Frame194-ezgif.com-png-to-webp-converter.webp";
import image2 from "/src/assets/ic_twotone-grass (5).png";
import image3 from "/src/assets/ph_plant-fill (5).png";
import mobile from "/src/assets/Optimized image/Frame65-ezgif.com-png-to-webp-converter.webp"

const PreventionSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative">
      {/* Left Side - About Us Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
        <h2 className="text-3xl md:text-[39px] font-semibold relative mb-8 text-[#393939]">
          Prevention <span className="text-[#6BA85D]">Tips</span>
          <span className="absolute -bottom-3 left-0 w-[150px] md:w-[195px] h-1 bg-[#6BA85D]"></span>
        </h2>

        {/* Bullet Points */}
        <ul className="list-disc text-[#9F9F9F] text-lg md:text-base font-medium leading-6 text-justify max-w-[546px] pl-6">
          <li className="mb-3">
            Regularly monitor crops for early signs of pests and diseases to
            enable timely intervention.
          </li>
          <li className="mb-3">
            Practice crop rotation and use pest-resistant plant varieties to
            minimize pest buildup.
          </li>
          <li className="mb-3">
            Maintain field hygiene by removing weeds and infected plant debris
            to prevent the spread of pests.
          </li>
          <li className="mb-3">
            Use Integrated Pest Management (IPM) strategies, such as biological
            controls and pheromone traps, to reduce pest populations naturally.
          </li>
          <li>
            Apply chemical treatments only when necessary, following recommended
            guidelines.
          </li>
        </ul>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Top Image */}
        <img
          src={window.innerWidth < 768 ? mobile :image1}
          alt="Prevention Top"
          className="md:w-[560px] w-full h-auto  rounded relative z-20 md:mb-0 mb-[30px] md:mt-0 -mt-20 "
        />
        {/* Bottom Image */}
        <img
          src={image2}
          alt="Prevention Bottom"
          className="w-[199px] h-[167px] absolute -top-5 left-6 md:-left-2 z-10 hidden md:block"
        />
      </div>
      {/* Hologram Image - Positioned Bottom Left */}
      <img
        src={image3}
        alt="Hologram"
        className="absolute bottom-16 left-[80px] w-[181px] h-[125px] hidden md:block"
      />
    </div>
  );
};

export default PreventionSection;
