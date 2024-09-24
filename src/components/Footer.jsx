// import { NavLink } from "react-router-dom";
// import bottomLeft from "/src/assets/Vector.png";
// import topRight from "/src/assets/ic_twotone-grass.png";
// import companyLogo from "/src/assets/ICARr_1 1 (1).png";
// import fbImage from "/src/assets/Frame 27.png"
// import instaImage from "/src/assets/Frame 28.png"

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0F5A0A] text-white w-full">
//       {/* Top section with company logo, follow us, quick links, legal */}
//       <div className="container mx-auto px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Company Logo */}
//         <div className="relative" style={{ left: "62px", top: "65px" }}>
//           <img
//             src={companyLogo}
//             alt="Company Logo"
//             className="w-20 md:w-[142px]" // Adjust the size as per your needs
//           />
//         </div>

//         {/* Follow Us section */}
//         <div className="absolute" style={{ top: "82px", left: "509px" }}>
//           <p className="font-bold mb-2">Follow us on:</p>
//           <div className="flex space-x-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={fbImage}
//                 alt="Facebook"
//                 className="w-9 h-9"
//               />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={instaImage}
//                 alt="Instagram"
//                 className="w-9 h-9"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links section */}
//         <div className="absolute" style={{ top: "82px", left: "847px" }}>
//           <p className="font-bold mb-4">Quick Links</p>
//           <ul className="space-y-2">
//             <li>
//               <NavLink to="/" className="hover:text-green-300">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/services" className="hover:text-green-300">
//                 Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className="hover:text-green-300">
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className="hover:text-green-300">
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Legal section */}
//         <div className="absolute" style={{ top: "82px", left: "1157px" }}>
//           <p className="font-bold mb-4">Legal</p>
//           <ul className="space-y-2">
//             <li>
//               <NavLink to="/terms" className="hover:text-green-300">
//                 Terms of Use
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/privacy" className="hover:text-green-300">
//                 Privacy Policy
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="relative mt-12">
//         {/* Horizontal Line */}
//         <div className="absolute bottom-10 w-full border-t-2 border-white z-10"></div>

//         {/* Copyright Text */}
//         <div className="text-center mt-4">
//           <span className="text-xs">&copy; All rights reserved by ICAR</span>
//         </div>

//         {/* Images (Bottom left and top right) */}
//         <img
//           src={bottomLeft}
//           alt="Bottom Left"
//           className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24"
//         />
//         <img
//           src={topRight}
//           alt="Top Right"
//           className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24"
//         />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import companyLogo from "/src/assets/ICARr_1 1 (2).png"; 
import facebookLogo from "/src/assets/Frame 27 (1).png"; 
import instagramLogo from "/src/assets/Frame 28 (1).png"; 
import hologramTopRight from "/src/assets/ic_twotone-grass (4).png"; 
import hologramBottomLeft from "/src/assets/ph_plant-fill (2).png"; 
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="relative bg-[#0F5A0A] text-white">
      {/* Hologram images */}
      <img
        src={hologramTopRight}
        alt="Top Right Hologram"
        className="absolute top-0 right-0 w-[168px] h-[161px]"
      />
      <img
        src={hologramBottomLeft}
        alt="Bottom Left Hologram"
        className="absolute bottom-0 left-0 w-[240px] h-[163px]"
      />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row justify-between">
        {/* Section 1: Company Logo */}
        <div className="mb-8 md:mb-[102px] pt-16 ml-[62px]">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-[142px] h-auto"
          />
        </div>

        {/* Section 2: Social Media */}
        <div className="mb-8 md:mb-[102px] pt-[82px]">
          <h3 className="text-[19px] font-semibold mb-4">Follow Us On:</h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookLogo}
                alt="Facebook"
                className="w-[36px] h-[36px]"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="w-[36px] h-[36px]"
              />
            </a>
          </div>
        </div>

        {/* Section 3: Quick Links */}
        <div className="mb-8 md:mb-[102px] pt-[82px]">
          <h3 className="text-[19px] font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:underline text-[#BBBBBB]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/types" className="hover:underline text-[#BBBBBB]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-[#BBBBBB]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-[#BBBBBB]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Legal */}
        <div className="mb-8 md:mb-[102px] py-[82px] mr-[168px]">
          <h3 className="text-[19px] font-semibold mb-5">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/terms" className="hover:underline text-[#BBBBBB]">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline text-[#BBBBBB]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal line and Footer Text */}
      <div className="container mx-auto px-6 md:px-12 mt-12 border-t border-[#C9C9C9] pt-6">
        <p className="text-center text-sm">© All Rights Reserved by ICAR</p>
      </div>
    </div>
  );
};

export default Footer;
