// import React from "react";
// import backgroundImage from "/src/assets/Optimized image/Frame54-ezgif.com-optiwebp.webp";

// const AboutUsPageHero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       <div className="text-center rounded-lg max-w-[678px] py-56">
//         {/* Heading */}
//         <h1 className="text-[33px] md:text-4xl lg:text-[47px] font-semibold text-[#FFFFFF] mb-4">
//           About Us
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPageHero;



import React from "react";
import largeScreenImage from "/src/assets/Optimized image/Frame54-ezgif.com-optiwebp.webp"; // Large screen image
import mobileScreenImage from "/src/assets/Optimized image/Frame73-ezgif.com-png-to-webp-converter.webp"; // Mobile screen image

const AboutUsPageHero = () => {
  // Use window.innerWidth to determine screen size
  const isMobile = window.innerWidth < 768; // Assuming mobile screens are less than 768px

  return (
    <div
      className="relative bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${
          isMobile ? mobileScreenImage : largeScreenImage
        })`,
      }}
    >
      <div className="text-center rounded-lg max-w-[678px] py-56">
        {/* Heading */}
        <h1 className="text-[33px] md:text-4xl lg:text-[47px] font-semibold text-[#FFFFFF] mb-4">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutUsPageHero;
