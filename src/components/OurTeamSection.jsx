import React from "react";
import teamMember1 from "/src/assets/Optimized image/Frame59-ezgif.com-png-to-webp-converter.webp";
import teamMember2 from "/src/assets/Optimized image/Frame59-ezgif.com-png-to-webp-converter.webp";
import teamMember3 from "/src/assets/Optimized image/Frame59-ezgif.com-png-to-webp-converter.webp";
import teamMember4 from "/src/assets/Optimized image/Frame59-ezgif.com-png-to-webp-converter.webp";
import hologram1 from "/src/assets/ic_twotone-grass (3).png";
import hologram2 from "/src/assets/ph_plant-fill (1).png";

const OurTeamSection = () => {
  return (
    <div className="relative bg-white py-16">
      {/* Hologram Images */}
      <img
        src={hologram1}
        alt="Hologram Top Right"
        className="absolute top-0 right-0 w-[120px] md:w-[160px] z-10"
      />
      <img
        src={hologram2}
        alt="Hologram Bottom Left"
        className="absolute bottom-0 left-0 w-[120px] md:w-[200px] z-10"
      />

      <div className="px-6 md:px-20 py-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-[39px] font-semibold mb-12 relative z-20 text-[#393939]">
          Our <span className="text-[#6BA85D]">Team</span> 
        </h2>

        {/* Team Cards */}
        <div className="flex flex-wrap items-center justify-between relative z-20">
          {/* Team Member 1 */}
          <div className="bg-[#ECF2E6] text-white rounded-lg px-[13px] pt-[13px] pb-[40px] mb-3 w-full md:w-[24%] sm:w-[49%]">
            <img
              src={teamMember1}
              alt="Team Member 1"
              className="w-full h-auto mb-9"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center text-[#393939]">
              Ms. Katherine
            </h3>
            <p className="text-base font-medium text-center text-[#858585]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-[#ECF2E6] text-white w-full md:w-[24%] sm:w-[49%] rounded-lg px-[13px] pt-[13px] pb-[40px] mb-3">
            <img
              src={teamMember2}
              alt="Team Member 2"
              className="w-full h-auto mb-9"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center text-[#393939]">
              Ms. Katherine
            </h3>
            <p className="text-base font-medium text-center text-[#858585]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-[#ECF2E6] text-white w-full md:w-[24%] sm:w-[49%] rounded-lg px-[13px] pt-[13px] pb-[40px] mb-3">
            <img
              src={teamMember3}
              alt="Team Member 3"
              className="w-full h-auto mb-9"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center text-[#393939]">
              Ms. Katherine
            </h3>
            <p className="text-base font-medium text-center text-[#858585]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-[#ECF2E6] text-white w-full md:w-[24%] sm:w-[49%] rounded-lg px-[13px] pt-[13px] pb-[40px] mb-3">
            <img
              src={teamMember4}
              alt="Team Member 4"
              className="w-full h-auto mb-9"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center text-[#393939]">
              Ms. Katherine
            </h3>
            <p className="text-base font-medium text-center text-[#858585]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
