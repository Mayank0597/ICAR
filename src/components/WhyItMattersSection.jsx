import React from "react";
import largeImage from "/src/assets/Optimized image/Frame57-ezgif.com-png-to-webp-converter.webp";
import mobileImage from "/src/assets/Optimized image/Frame77-ezgif.com-optiwebp.webp";

const WhyItMattersSection = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div
      className="relative w-full h-[630px] md:h-[600px] bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${isMobile ? mobileImage : largeImage})`,
      }}
    >
      {/* Content on Image */}
      <div className="absolute text-[#FFFFFF] md:w-2/3 md:px-0 px-[30px] text-justify">
        <h2 className="text-[33px] md:text-[39px] font-semibold mb-4">
          Why It Matters?
        </h2>
        <p className="text-base font-medium leading-6 text-[#9F9F9F]">
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
