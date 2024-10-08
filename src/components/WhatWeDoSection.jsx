import React from "react";
import logo1 from "/src/assets/Frame 49.png";
import logo2 from "/src/assets/Frame 49 (1).png";
import logo3 from "/src/assets/Frame 49 (2).png";
import logo4 from "/src/assets/Frame 49 (3).png";

const WhatWeDoSection = () => {
  return (
    <div className="bg-white px-[30px] md:px-20 pb-16">
      {/* Heading Section */}
      <div className=" text-left md:text-center mb-11">
        <h2 className="text-3xl md:text-[39px] font-semibold text-[#393939] relative inline-block">
          What <span className="text-[#6BA85D]">we do?</span> 
          <span className="absolute left-0 bottom-[-8px] w-16 md:w-24 h-1 bg-[#6BA85D]"></span>
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-between">
        {/* Card 1 */}
        <div className="bg-[#ECF2E6] text-white py-14 px-9 w-full sm:w-[49%] md:w-[24%] md:min-h-[426px] mb-3 rounded-lg flex flex-col items-center hover:shadow-lg">
          <img
            src={logo1}
            alt="Card Logo 1"
            className="w-[84px] h-[84px] mb-10 mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-4 text-center text-[#393939]">
            Mapping Pest Shop Locations
          </h3>
          <p className="text-base font-medium text-center text-[#858585]">
            We provide a comprehensive map of pest control shops across various
            regions, ensuring easy access to essential pest management tools and
            products for farmers and agricultural professionals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ECF2E6] text-white py-14 px-9 w-full sm:w-[49%] md:w-[24%] md:min-h-[426px] mb-3 rounded-lg flex flex-col items-center hover:shadow-lg">
          <img
            src={logo2}
            alt="Card Logo 2"
            className="w-[84px] h-[84px] mb-10 mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-4 text-center text-[#393939]">
            Educational Resources
          </h3>
          <p className="text-base font-medium text-center text-[#858585]">
            Our platform offers a range of educational resources, including
            articles, guides, and tutorials, to help users understand pest
            behaviour, prevention techniques, and the latest research in pest
            management.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#ECF2E6] text-white py-14 px-9 w-full sm:w-[49%] md:w-[24%] md:min-h-[426px] mb-3 rounded-lg flex flex-col items-center hover:shadow-lg">
          <img
            src={logo3}
            alt="Card Logo 3"
            className="w-[84px] h-[84px] mb-10 mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-4 text-center text-[#393939] max-w-[150px]">
            Public Awareness
          </h3>
          <p className="text-base font-medium text-center text-[#858585]">
            We actively promote public awareness of the importance of managing
            invasive pests and diseases, encouraging communities to adopt
            sustainable and effective pest control practices.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#ECF2E6] text-white py-14 px-9 w-full sm:w-[49%] md:w-[24%] md:min-h-[426px] mb-3 rounded-lg flex flex-col items-center hover:shadow-lg">
          <img
            src={logo4}
            alt="Card Logo 4"
            className="w-[84px] h-[84px] mb-10 mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-4 text-center text-[#393939]">
            Sustainable Pest Control
          </h3>
          <p className="text-base font-medium text-center text-[#858585]">
            We advocate for sustainable pest control methods that minimize the
            environmental impact while protecting crops. We aim to foster
            long-term agricultural sustainability by focusing on eco-friendly
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
