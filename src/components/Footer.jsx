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
        className="absolute top-0 right-0 w-[168px] h-[161px] z-0"
      />
      <img
        src={hologramBottomLeft}
        alt="Bottom Left Hologram"
        className="absolute bottom-0 left-0 w-[240px] h-[163px] z-0"
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
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookLogo}
                alt="Facebook"
                className="w-[36px] h-[36px]"
              />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="w-[36px] h-[36px]"
              />
            </Link>
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
      {/* <div className="container mx-auto px-6 md:px-12 mt-12 border-t border-[#C9C9C9] pt-6">
        <p className="text-center text-base font-medium text-[#D0D0D0]">
          © All Rights Reserved by ICAR
        </p>
      </div> */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 mt-12 pt-6">
        <hr className="border-t border-[#BBBBBB] bg-opacity-50 mx-4 md:mx-[60px]" />
        <p className="text-center text-base font-medium text-[#D0D0D0] mt-4 pb-8">
          © All Rights Reserved by ICAR
        </p>
      </div>
    </div>
  );
};

export default Footer;
