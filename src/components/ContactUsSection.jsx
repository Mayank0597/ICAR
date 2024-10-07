// import React from "react";
// import backgroundImage from "/src/assets/Optimized image/Frame42-ezgif.com-png-to-webp-converter.webp";
// import mobileImage from "/src/assets/Optimized image/Frame63-ezgif.com-png-to-webp-converter.webp"
// import { useNavigate } from "react-router-dom";

// const ContactUsSection = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="relative bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         // backgroundSize: 'cover',
//       }}
//     >
//       <div className="text-center rounded-lg max-w-[678px] py-36 md:px-0 px-11"
//       // style={{
//       //   backgroundImage: window.innerWidth < 640 ? `url(${mobileImage})` : `url(${backgroundImage})`,
//       // }}
//       >
//         {/* Heading */}
//         <h1 className="text-3xl md:text-4xl lg:text-[39px] font-semibold text-[#F2F2F2] mb-4">
//           Connect with Us for More Insights!
//         </h1>

//         {/* Subheading Text */}
//         <p className="text-lg md:text-xl lg:text-lg font-medium text-[#BBB] mb-[42px]">
//           Speak to our team for guidance and resources on invasive species.
//         </p>

//         {/* Contact Us Button */}
//         <button
//           onClick={() => navigate("/contact")}
//           // bg-[#6BA85D] text-[#FFF] py-2 px-6 text-lg rounded border border-transparent hover:bg-white hover:text-black hover:border-[#6BA85D] duration-300 transition-all
//           className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300"
//         >
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactUsSection;


import React, { useState, useEffect } from "react";
import desktopImage from "/src/assets/Optimized image/Frame42-ezgif.com-png-to-webp-converter.webp";
import mobileImage from "/src/assets/Optimized image/Frame63-ezgif.com-png-to-webp-converter.webp";
import { useNavigate } from "react-router-dom";

const ContactUsSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Update isMobile state on screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center md:mb-0 mb-[85px]"
      style={{
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
      }}
    >
      <div className="text-center rounded-lg max-w-[678px] py-36 md:px-0 px-11">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-[39px] font-semibold text-[#F2F2F2] mb-4">
          Connect with Us for More Insights!
        </h1>

        {/* Subheading Text */}
        <p className="text-lg md:text-xl lg:text-lg font-medium text-[#BBB] mb-[42px]">
          Speak to our team for guidance and resources on invasive species.
        </p>

        {/* Contact Us Button */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
