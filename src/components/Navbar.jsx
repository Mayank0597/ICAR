// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import LeftLogo from "/src/assets/ICARr_1 1 (3).png";
// import RightLogo from "/src/assets/nibsmm 1.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="px-5 bg-white shadow-md">
//         {/* First div: Logo and heading */}
//         <div className="mx-auto flex justify-between items-center py-4">
//           {/* Left logo */}
//           <div className="flex items-center">
//             <img src={LeftLogo} alt="Left Logo" className="w-12 md:w-[121px] md:h-[129px]" />
//           </div>

//           {/* Center heading and subtext */}
//           <div className="flex flex-col items-center">
//             <h1 className="text-xl md:text-[39px] font-semibold text-[#000]">
//             Biotic Stress information System
//             </h1>
//             <p className="text-xs md:text-[23px] font-normal text-center mt-[15px] text-[#000]">
//             ICAR-National Institute of Biotic Stress Management
//             </p>
//           </div>

//           {/* Right logo */}
//           <div className="flex items-center">
//             <img
//               src={RightLogo}
//               alt="Right Logo"
//               className="w-12 md:w-[142px] md:h-[125px]"
//             />
//           </div>

//           {/* Hamburger menu for mobile */}
//           <button
//             className="md:hidden block text-black"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>
//       {/* Second div: Links */}
//       <div className={`md:block ${menuOpen ? "block" : "hidden"} bg-white sticky top-0 z-[99999999999]`}>
//         <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10 py-4">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#000] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#393939] font-medium pb-1"
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#000] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#393939] font-medium pb-1"
//               }
//             >
//               About Us
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/types"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#000] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#393939] font-medium pb-1"
//               }
//             >
//               Types
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#000] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#393939] font-medium pb-1"
//               }
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import LeftLogo from "/src/assets/Optimized image/ICARr_113-ezgif.com-png-to-webp-converter.webp";
// import RightLogo from "/src/assets/Optimized image/ezgif.com-webp-maker.webp";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   // Function to handle scroll and set scroll position
//   const handleScroll = () => {
//     const position = window.scrollY;
//     setScrollPosition(position);
//   };

//   // useEffect to add scroll event listener
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="md:px-5 px-[30px] md:py-0 py-[14px] bg-white shadow-md">
//         {/* First div: Logo and heading */}
//         <div className="mx-auto flex justify-between items-center pt-2">
//           {/* Left logo */}
//           <div className="flex items-center">
//             <img
//               src={LeftLogo}
//               alt="Left Logo"
//               className="w-[53px] md:w-[121px] md:h-[129px]"
//             />
//           </div>

//           {/* Center heading and subtext */}
//           <div className="hidden md:block">
//             <h1 className="text-xl md:text-[39px] font-semibold text-[#000]">
//               Biotic Stress Information System
//             </h1>
//             <p className="text-xs md:text-[23px] font-normal text-center mt-[20px] text-[#000]">
//               ICAR-National Institute of Biotic Stress Management
//             </p>
//           </div>

//           {/* Right logo */}
//           <div className="flex items-center">
//             <img
//               src={RightLogo}
//               alt="Right Logo"
//               className="w-12 md:w-[142px] md:h-[125px] hidden md:block"
//             />
//           </div>

//           {/* Hamburger menu for mobile */}
//           {/* <button
//             className="md:hidden block text-black"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               />
//             </svg>
//           </button> */}
//           <button
//             className="md:hidden block text-black"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {/* Custom hamburger icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   menuOpen
//                     ? "M6 18L18 6M6 6l12 12" // Cross icon when menu is open
//                     : "M4 6h16M4 12h16M4 18h16" // 3 horizontal lines of equal length
//                 }
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Second div: Links */}
//       <div
//         className={`md:block ${
//           menuOpen ? "block" : "hidden"
//         } sticky top-0 z-[99999999999] transition-all duration-500 ${
//           scrollPosition > 180 ? "bg-[#ECF2E6] pt-3" : "bg-white"
//         }`}
//       >
//         <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10 pb-4">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#393939] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#737373] font-medium pb-1"
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#393939] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#737373] font-medium pb-1"
//               }
//             >
//               About Us
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/types"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#393939] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#737373] font-medium pb-1"
//               }
//             >
//               Types
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#393939] font-medium border-b-4 border-[#6BA85D] pb-1"
//                   : "text-[#737373] font-medium pb-1"
//               }
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeftLogo from "/src/assets/Optimized image/ICARr_113-ezgif.com-png-to-webp-converter.webp";
import RightLogo from "/src/assets/Optimized image/ezgif.com-webp-maker.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll and set scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // useEffect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="md:px-5 px-[30px] md:py-0 py-[14px] bg-white shadow-md">
        {/* First div: Logo and heading */}
        <div className="mx-auto flex justify-between items-center pt-2 ">
          {/* Left logo */}
          <div className="flex items-center">
            <img
              src={LeftLogo}
              alt="Left Logo"
              className="w-[53px] md:w-[121px] md:h-[129px]"
            />
          </div>

          {/* Center heading and subtext */}
          <div className="hidden md:block">
            <h1 className="text-xl md:text-[39px] font-semibold text-[#000]">
              Biotic Stress Information System
            </h1>
            <p className="text-xs md:text-[23px] font-normal text-center mt-[20px] text-[#000]">
              ICAR-National Institute of Biotic Stress Management
            </p>
          </div>

          {/* Right logo */}
          <div className="flex items-center">
            <img
              src={RightLogo}
              alt="Right Logo"
              className="w-12 md:w-[142px] md:h-[125px] hidden md:block"
            />
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden block text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Custom hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // Cross icon when menu is open
                    : "M4 6h16M4 12h16M4 18h16" // 3 horizontal lines of equal length
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-[#FFF] z-50 flex flex-col items-center pt-14">
          {/* Close button (X) */}
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img src={LeftLogo} alt="Company Logo" className="w-[100px] mb-10" />
          <ul className=" space-y-4 w-full pl-[30px] pr-[50px] text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-[#6BA85D]"
                    : "text-[#737373] font-medium"
                }
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <hr className="w-full" />

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#6BA85D] font-bold"
                    : "text-[#737373] font-medium"
                }
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <hr className="w-full" />

            <li>
              <NavLink
                to="/types"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#6BA85D] font-bold"
                    : "text-[#737373] font-medium"
                }
                onClick={handleLinkClick}
              >
                Types
              </NavLink>
            </li>
            <hr className="w-full" />

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#6BA85D] font-bold"
                    : "text-[#737373] font-medium"
                }
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
            <hr className="w-full" />
          </ul>
        </div>
      )}

      {/* Second div: Links for desktop */}
      <div
        className={`md:block ${
          menuOpen ? "block" : "hidden"
        } sticky top-0 z-50 transition-all duration-500 ${
          scrollPosition > 180 ? "bg-[#ECF2E6] pt-3" : "bg-white"
        }`}
      >
        <ul className="hidden md:flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10 pb-4">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#393939] font-bold border-b-4 border-[#6BA85D] pb-1"
                  : "text-[#737373] font-medium pb-1"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#393939] font-bold border-b-4 border-[#6BA85D] pb-1"
                  : "text-[#737373] font-medium pb-1"
              }
            >
              About Us
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/types"
              className={({ isActive }) =>
                isActive
                  ? "text-[#393939] font-bold border-b-4 border-[#6BA85D] pb-1"
                  : "text-[#737373] font-medium pb-1"
              }
            >
              Types
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#393939] font-bold border-b-4 border-[#6BA85D] pb-1"
                  : "text-[#737373] font-medium pb-1"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
