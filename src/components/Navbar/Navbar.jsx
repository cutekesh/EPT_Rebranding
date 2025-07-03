import React, { useState, useEffect, useRef } from "react";
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";
import { Link } from "react-router-dom"; // Ensure Link is imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  let servicesDropdownTimeout;

  const homeLinkRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null); // Ref for the nav element

  // Handlers for Services dropdown hover behavior
  const handleMouseEnterServices = () => {
    clearTimeout(servicesDropdownTimeout);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesDropdownTimeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    console.log("toggleMenu called!");
    setIsMenuOpen((prev) => !prev);
  };

  // Function to toggle the user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  // Define your service links here with the exact names from Figma
  const serviceLinks = [
    { name: "Engineering & Project Management", path: "/services/engineering" },
    { name: "Construction and Marine Logistics", path: "/services/construction" },
    { name: "Petroleum Asset Consulting", path: "/services/petroleum" },
    { name: "Well and Production", path: "/services/well-production" },
    { name: "Flow Systems and Technology", path: "/services/flow-systems" },
    { name: "Energy, Gas and Power", path: "/services/energy-gas" },
  ];

  // Effect to dynamically calculate the left and top offsets
  useEffect(() => {
    const calculateOffsets = () => {
      if (homeLinkRef.current && headerRef.current && navRef.current) {
        const homeRect = homeLinkRef.current.getBoundingClientRect();
        const headerRect = headerRef.current.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        // Calculate the distance from the header's left edge to the home link's left edge
        const homeOffset = homeRect.left - headerRect.left;
        headerRef.current.style.setProperty("--home-offset", `${homeOffset}px`);

        // Calculate the distance from the header's top edge to the nav's bottom edge
        const dropdownTopOffset = navRect.bottom - headerRect.top;
        headerRef.current.style.setProperty("--dropdown-top-offset", `${dropdownTopOffset}px`);
      }
    };

    calculateOffsets(); // Calculate on initial render
    window.addEventListener("resize", calculateOffsets); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", calculateOffsets); // Cleanup
    };
  }, [homeLinkRef.current, headerRef.current, navRef.current]); // Added refs to dependency array

  return (
    <header className="w-full relative" ref={headerRef}>
      <nav className="flex justify-between items-center px-4 py-2 xl:py-6 xl:px-30 md:px-6 md:py-6 lg:px-2 bg-white" ref={navRef}>
        {/* Logo */}
        <div>
          <img
            className="md:w-[158.67px] md:h-[45.06px] w-[120px] h-[40px]"
            src={eptLogo}
            alt="EPT Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="text-[#333333] flex gap-[30px] xl:gap-[40px] 2xl:gap-[80px]">
            <li className="text-[16px] font-[500] font-Inter relative group" ref={homeLinkRef}>
              <Link
                to="/"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Home
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
            </li>
            {/* Services Link with Hover for Dropdown */}
            <li
              className="text-[16px] font-[500] font-Inter relative group"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <Link
                to="/services" // This Link can navigate if clicked directly (e.g., on mobile)
                onClick={(e) => {
                  // Prevent default navigation on desktop if dropdown is intended
                  if (window.innerWidth >= 768) { // md breakpoint and up
                    e.preventDefault();
                  }
                }}
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Services
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/about"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                About Us
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/contact"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex text-[#333333] gap-[20px] items-center">
          <button className="text-[16px] font-[400] bg-[#008A3F] py-[17.5px] px-[24.5px] rounded-xl cursor-pointer text-[#FEFFFF] border-1 font-Inter hover:bg-green-600 hover:text-black">
            Sign In
          </button>
          <button className="text-[16px] font-[400] bg-white py-[17.5px] px-[24.5px] rounded-xl cursor-pointer border-1 font-Inter hover:text-[#007A4D]">
            Sign Up
          </button>
        </div>

        {/* Tablet and mobile icons */}
        <div className="flex lg:hidden items-center gap-4">
          <img
            className="w-[24px] h-[24px] cursor-pointer"
            src={eptUserLogo}
            alt="Auth Button"
            onClick={toggleUserMenu}
          />
          <img
            className="w-[24px] h-[24px] cursor-pointer md:hidden"
            src={eptMobileMenu}
            alt="Mobile Menu"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Dropdown Menu (for Home, About Us, Contact Us) */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-4 bg-white shadow-lg rounded-lg p-4 z-50 md:hidden">
            <ul className="text-[#333333] flex flex-col gap-4">
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/">Home</Link>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/services">Services</Link> {/* This link will navigate on mobile */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/about">About Us</Link>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/contact">Contact Us</Link>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Dropdown for User Menu */}
        {isUserMenuOpen && (
          <div className="absolute top-[60px] right-4 bg-white shadow-lg rounded-lg p-4 z-50 ">
            <div className="flex flex-col gap-4">
              <button className="text-[16px] font-[400] bg-[#008A3F] py-2 px-4 rounded-xl cursor-pointer text-[#FEFFFF] border-1 font-Inter hover:bg-green-600 hover:text-black">
                Sign In
              </button>
              <button className="text-[16px] font-[400] bg-white py-2 px-4 rounded-xl cursor-pointer border-1 font-Inter hover:text-[#007A4D]">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Dropdown Menu for Services (Desktop Only) - Moved outside of nav, inside header */}
      {/* Positioned absolutely relative to the header */}
      <div
        className={`absolute top-[var(--dropdown-top-offset)] /* Dynamically position below nav */
                    left-[var(--home-offset)] /* Dynamically align with Home link */
                    bg-white p-4 rounded-lg shadow-lg z-50
                    w-full max-w-[574px] /* Responsive width: full width on smaller, max 574px on larger */
                    md:w-[calc(100vw-4rem)] /* Example: 100vw minus 2rem padding on each side for md screens */
                    lg:w-[574px] /* Fixed width for large screens */
                    h-auto lg:h-[266px] /* Responsive height: auto on smaller, fixed on larger */
                    transition-opacity duration-300 ease-in-out
                    ${isServicesDropdownOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
                    hidden md:block /* Ensure it's only for desktop */
                    `}
        onMouseEnter={handleMouseEnterServices} // Keep open if mouse enters dropdown
        onMouseLeave={handleMouseLeaveServices} // Hide if mouse leaves dropdown
      >
        {/* Grid for 2 columns and 3 rows */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 ">
          {serviceLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-black font-Inter text-[16px] font-[500]
                         bg-[#E6F3EC]
                         lg:w-[257px] /* Responsive width: fixed on larger */
                         h-[52px]
                         p-3 rounded-md
                         flex items-center justify-center text-center
                         hover:bg-[#008A3F] hover:text-white
                         transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
