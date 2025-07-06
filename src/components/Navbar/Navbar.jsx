import React, { useState, useEffect, useRef } from "react";
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";
import { Link } from "react-router-dom"; // Ensure Link is imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeSubDropdownId, setActiveSubDropdownId] = useState(null); // State for which sub-dropdown is active
  const servicesDropdownTimeoutId = useRef(null); // Use useRef for timeout ID

  const homeLinkRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null); // Ref for the nav element

  // Handlers for Services dropdown hover behavior
  const handleMouseEnterServices = () => {
    clearTimeout(servicesDropdownTimeoutId.current); // Clear any pending hide timeout
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    // Set a timeout to hide the dropdown, allowing cursor to move onto the dropdown itself
    servicesDropdownTimeoutId.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
      setActiveSubDropdownId(null); // Also close any active sub-dropdown
    }, 150); // Small delay (e.g., 150ms)
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

  // Define your service links here with subLinks for nested dropdowns
  const serviceLinks = [
    {
      id: "engineering",
      name: "Engineering & Project Management",
      path: "/services/engineering",
      subLinks: [
        { name: "Front End Engineering Design", path: "/services/engineering/front-end" },
        { name: "Detailed Engineering Design", path: "/services/engineering/detailed" },
        { name: "Follow On Engineering and Construction Support", path: "/services/engineering/follow-on" },
        { name: "Operation Readiness and Commissioning Support", path: "/services/engineering/operation-readiness" },
        { name: "Project Management", path: "/services/engineering/project-management" },
      ]
    },
    { id: "construction", name: "Construction and Marine Logistics", path: "/services/construction" },
    { id: "petroleum", name: "Petroleum Asset Consulting", path: "/services/petroleum" },
    { id: "well-production", name: "Well and Production", path: "/services/well-production" },
    { id: "flow-systems", name: "Flow Systems and Technology", path: "/services/flow-systems" },
    { id: "energy-gas", name: "Energy, Gas and Power", path: "/services/energy-gas" },
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
        // Added 10px to create a gap between the navbar and the dropdown
        const dropdownTopOffset = navRect.bottom - headerRect.top + 10; // Added +10 for the space
        headerRef.current.style.setProperty("--dropdown-top-offset", `${dropdownTopOffset}px`);
      }
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      clearTimeout(servicesDropdownTimeoutId.current); // Cleanup timeout on unmount
    };
  }, [homeLinkRef.current, headerRef.current, navRef.current]);

  return (
    <header className="w-full relative" ref={headerRef}>
      <nav className="flex justify-between items-center px-4 py-2 xl:py-6 2xl:px-4 xl:px-20 md:px-6 md:py-6 lg:px-2 bg-white mx-auto container" ref={navRef}>
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
                to="/services"
                onClick={(e) => {
                  if (window.innerWidth >= 768) {
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
            onClick={() => setIsUserMenuOpen(prev => !prev)}
          />
          <img
            className="w-[24px] h-[24px] cursor-pointer md:hidden"
            src={eptMobileMenu}
            alt="Mobile Menu"
            onClick={() => setIsMenuOpen(prev => !prev)}
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
                <Link to="/services">Services</Link>
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

      {/* Dropdown Menu for Services (Desktop Only) */}
      {isServicesDropdownOpen && (
        <div
          className={`absolute top-[var(--dropdown-top-offset)]
                      left-[var(--home-offset)]
                      bg-white p-4 rounded-lg shadow-lg z-50
                      w-[574px] h-[266px] /* Default for desktop */
                      md:w-[calc(100vw-4rem)] md:max-w-[450px] md:mx-auto md:h-auto /* Added for tablet */
                      transition-opacity duration-300 ease-in-out opacity-100
                      hidden md:block
                      pointer-events-auto
                      `}
          onMouseEnter={handleMouseEnterServices} // Keep open if mouse enters dropdown
          onMouseLeave={handleMouseLeaveServices} // Hide if mouse leaves dropdown
        >
          {/* Grid for 2 columns and 3 rows */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-3">
            {serviceLinks.map((link, index) => (
              <div key={link.id || index} className="relative group"> {/* Added relative group wrapper for nested dropdown positioning */}
                <a
                  href={link.path}
                  className="text-black font-Inter text-[16px] font-[500]
                             bg-[#E6F3EC]
                             w-[257px] h-[55px] /* Default for desktop */
                             md:w-full /* Added for tablet */
                             p-3 rounded-md
                             flex items-center justify-center text-center
                             hover:bg-[#008A3F] hover:text-white
                             transition-colors duration-200
                             relative group" /* Added relative group for underline effect */
                  onMouseEnter={() => {
                    clearTimeout(servicesDropdownTimeoutId.current); // Keep main dropdown open
                    setActiveSubDropdownId(link.id); // Set this link as active for its sub-dropdown
                  }}
                  onMouseLeave={() => {
                    servicesDropdownTimeoutId.current = setTimeout(() => {
                      setActiveSubDropdownId(null); // Hide sub-dropdown after delay
                    }, 150);
                  }}
                >
                  {link.name}
                  {/* Underline effect for dropdown buttons - Changed color to #F6C200 */}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F6C200] transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>

                  {/* Nested Dropdown for Engineering & Project Management */}
                  {link.subLinks && activeSubDropdownId === link.id && (
                    <div
                      className="absolute top-0 left-full ml-4 bg-white p-4 rounded-lg shadow-lg z-50
                                 w-[280px] h-auto flex flex-col gap-2
                                 transition-opacity duration-300 ease-in-out opacity-100
                                 pointer-events-auto"
                      onMouseEnter={() => {
                        clearTimeout(servicesDropdownTimeoutId.current); // Keep main dropdown open
                        setActiveSubDropdownId(link.id); // Keep this sub-dropdown active
                      }}
                      onMouseLeave={() => {
                        servicesDropdownTimeoutId.current = setTimeout(() => {
                          setActiveSubDropdownId(null); // Hide sub-dropdown after delay
                        }, 150);
                      }}
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <a
                          key={subIndex}
                          href={subLink.path}
                          className="text-black font-Inter text-[16px] font-[500]
                                     bg-[#E6F3EC]
                                     w-full h-[55px]
                                     p-3 rounded-md
                                     flex items-center justify-center text-center
                                     hover:bg-[#008A3F] hover:text-white
                                     transition-colors duration-300
                                     relative group"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
