import React from "react";
import backgroundImage from "/src/assets/Frame 57.png"

const WhyItMattersSection = () => {
  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content on Image */}
      <div className="absolute left-6 md:left-14 text-[#FFFFFF] max-w-[400px] md:max-w-[619px]">
        <h2 className="text-3xl md:text-[39px] font-semibold mb-4">Why It Matters?</h2>
        <p className="text-sm md:text-base font-medium leading-6 text-[#9F9F9F]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros .
        </p>
      </div>
    </div>
  );
};

export default WhyItMattersSection;
