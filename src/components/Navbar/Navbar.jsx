import React, { useState, useEffect, useRef } from "react"; 
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  let servicesDropdownTimeout;

  const homeLinkRef = useRef(null); 
  const headerRef = useRef(null); 

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
    setIsUserMenuOpen((prev) => !prev); // Use functional update for state
  };

  // Define your service links here with the exact names from Figma
  const serviceLinks = [
    { name: "Engineering & Project Management", path: "/services/engineering" },
    {
      name: "Construction and Marine Logistics",
      path: "/services/construction",
    },
    { name: "Petroleum Asset Consulting", path: "/services/petroleum" },
    { name: "Well and Production", path: "/services/well-production" },
    { name: "Flow Systems and Technology", path: "/services/flow-systems" },
    { name: "Energy, Gas and Power", path: "/services/energy-gas" },
  ];

  // Effect to dynamically calculate the left offset of the "Home" link
  useEffect(() => {
    const calculateHomeOffset = () => {
      if (homeLinkRef.current && headerRef.current) {
        const homeRect = homeLinkRef.current.getBoundingClientRect();
        const headerRect = headerRef.current.getBoundingClientRect();
        // Calculate the distance from the header's left edge to the home link's left edge
        const offset = homeRect.left - headerRect.left;
        headerRef.current.style.setProperty("--home-offset", `${offset}px`);
      }
    };

    calculateHomeOffset(); // Calculate on initial render
    window.addEventListener("resize", calculateHomeOffset); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", calculateHomeOffset); // Cleanup
    };
  }, []); // Run once on mount

  return (
    <header className="w-full relative" ref={headerRef}>
      {" "}
      {/* Added relative and ref */}
      <nav className="flex justify-between items-center px-4 py-2 xl:py-6 xl:px-30 md:px-6 md:py-6 lg:px-2 bg-white">
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
            <li
              className="text-[16px] font-[500] font-Inter relative group"
              ref={homeLinkRef}
            >
              {" "}
              {/* Added ref here */}
              <a
                href="#home"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                Home
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
            </li>
            {/* Services Link (without the dropdown div inside it anymore) */}
            <li
              className="text-[16px] font-[500] font-Inter relative group"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <a
                href="#services-dropdown" // Dummy href for desktop hover
                onClick={(e) => e.preventDefault()} // Prevent default navigation
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                Services
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <a
                href="#about"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                About Us
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <a
                href="#contact"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                Contact Us
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
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
            onClick={toggleMenu} // Call toggleMenu here
          />
        </div>

        {/* Mobile Dropdown Menu (for Home, About Us, Contact Us) */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-4 bg-white shadow-lg rounded-lg p-4 z-50 md:hidden">
            <ul className="text-[#333333] flex flex-col gap-4">
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <a href="#home">Home</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <a href="#services">Services</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <a href="#about">About Us</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <a href="#contact">Contact Us</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
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
        className={`absolute top-[calc(125%-1px)] /* Position just below the header */
                    left-[var(--home-offset)] /* Dynamically align with Home link */
                    bg-white p-4 rounded-lg shadow-lg z-50
                    w-[574px] h-[266px] /* Figma specified dimensions */
                    transition-opacity duration-300 ease-in-out
                    ${
                      isServicesDropdownOpen
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                    }
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
                         w-[257px] h-[52px] 
                         p-8 rounded-md
                         flex items-center justify-center text-center 
                         hover:bg-[#008A3F] hover:text-white 
                         transition-colors duration-200"
              // Removed whitespace-nowrap to allow text to wrap
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
