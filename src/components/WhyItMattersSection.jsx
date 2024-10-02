import React from "react";
import backgroundImage from "/src/assets/Optimized image/Frame57-ezgif.com-png-to-webp-converter.webp";

const WhyItMattersSection = () => {
  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content on Image */}
      <div className="absolute text-[#FFFFFF] w-2/3 text-justify">
        <h2 className="text-3xl md:text-[39px] font-semibold mb-4">
          Why It Matters?
        </h2>
        <p className="text-sm md:text-base font-medium leading-6 text-[#9F9F9F]">
          The management of invasive pests and diseases is crucial for
          protecting the nation’s agricultural productivity and food security.
          Pests and pathogens can severely damage crops, leading to reduced
          yields, economic losses, and threats to farmers' livelihoods.
          Unchecked, they can spread rapidly, affecting not only local farms but
          entire regions. By adopting effective pest management strategies, we
          safeguard biodiversity, promote sustainable farming, and ensure a
          stable food supply.
        </p>
      </div>
    </div>
  );
};

export default WhyItMattersSection;
