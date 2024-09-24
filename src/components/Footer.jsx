import { NavLink } from "react-router-dom";
import bottomLeft from "/src/assets/Vector.png";
import topRight from "/src/assets/ic_twotone-grass.png";
import companyLogo from "/src/assets/ICARr_1 1 (1).png";
import fbImage from "/src/assets/Frame 27.png"
import instaImage from "/src/assets/Frame 28.png"

const Footer = () => {
  return (
    <footer className="relative bg-[#0F5A0A] text-white w-full">
      {/* Top section with company logo, follow us, quick links, legal */}
      <div className="container mx-auto px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Company Logo */}
        <div className="relative" style={{ left: "62px", top: "65px" }}>
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-20 md:w-[142px]" // Adjust the size as per your needs
          />
        </div>

        {/* Follow Us section */}
        <div className="absolute" style={{ top: "82px", left: "509px" }}>
          <p className="font-bold mb-2">Follow us on:</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fbImage}
                alt="Facebook"
                className="w-9 h-9"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instaImage}
                alt="Instagram"
                className="w-9 h-9"
              />
            </a>
          </div>
        </div>

        {/* Quick Links section */}
        <div className="absolute" style={{ top: "82px", left: "847px" }}>
          <p className="font-bold mb-4">Quick Links</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-green-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-green-300">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-green-300">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-green-300">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal section */}
        <div className="absolute" style={{ top: "82px", left: "1157px" }}>
          <p className="font-bold mb-4">Legal</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/terms" className="hover:text-green-300">
                Terms of Use
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-green-300">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-12">
        {/* Horizontal Line */}
        <div className="absolute bottom-10 w-full border-t-2 border-white z-10"></div>

        {/* Copyright Text */}
        <div className="text-center mt-4">
          <span className="text-xs">&copy; All rights reserved by ICAR</span>
        </div>

        {/* Images (Bottom left and top right) */}
        <img
          src={bottomLeft}
          alt="Bottom Left"
          className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24"
        />
        <img
          src={topRight}
          alt="Top Right"
          className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24"
        />
      </div>
    </footer>
  );
};

export default Footer;
