import React, { useState, useEffect, useRef } from "react";
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeSubDropdownId, setActiveSubDropdownId] = useState(null); // State for which sub-dropdown is active
  const servicesDropdownTimeoutId = useRef(null); // Use useRef for timeout ID

  const homeLinkRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null); // Ref for the nav element

  const location = useLocation(); // Get the current location object

  // Handlers for Services dropdown hover behavior
  const handleMouseEnterServices = () => {
    clearTimeout(servicesDropdownTimeoutId.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesDropdownTimeoutId.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
      setActiveSubDropdownId(null);
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

  const serviceLinks = [
    {
      id: "engineering",
      name: "Engineering & Project Management",
      path: "/services/engineering",
      subLinks: [
        {
          name: "Front End Engineering Design",
          path: "/services/engineering/front-end",
        },
        {
          name: "Detailed Engineering Design",
          path: "/services/engineering/detailed",
        },
        {
          name: "Follow On Engineering and Construction Support",
          path: "/services/engineering/follow-on",
        },
        {
          name: "Operation Readiness and Commissioning Support",
          path: "/services/engineering/operation-readiness",
        },
        {
          name: "Project Management",
          path: "/services/engineering/project-management",
        },
      ],
    },
    {
      id: "construction",
      name: "Construction and Marine Logistics",
      path: "/services/construction",
    },
    {
      id: "petroleum",
      name: "Petroleum Asset Consulting",
      path: "/services/petroleum",
    },
    {
      id: "well-production",
      name: "Well and Production",
      path: "/services/well-production",
    },
    {
      id: "flow-systems",
      name: "Flow Systems and Technology",
      path: "/services/flow-systems",
    },
    {
      id: "energy-gas",
      name: "Energy, Gas and Power",
      path: "/services/energy-gas",
    },
  ];

  useEffect(() => {
    const calculateOffsets = () => {
      if (homeLinkRef.current && headerRef.current && navRef.current) {
        const homeRect = homeLinkRef.current.getBoundingClientRect();
        const headerRect = headerRef.current.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        const homeOffset = homeRect.left - headerRect.left;
        headerRef.current.style.setProperty("--home-offset", `${homeOffset}px`);

        const dropdownTopOffset = navRect.bottom - headerRect.top + 10;
        headerRef.current.style.setProperty(
          "--dropdown-top-offset",
          `${dropdownTopOffset}px`
        );
      }
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      clearTimeout(servicesDropdownTimeoutId.current);
    };
  }, [homeLinkRef.current, headerRef.current, navRef.current]);

  // Helper function to determine if a link is active
  const isActiveLink = (path) => {
    // For services, check if the current path starts with /services
    if (path === "/services") {
      return location.pathname.startsWith("/services");
    }
    // For other links, check for exact match
    return location.pathname === path;
  };

  return (
    <header className=" relative" ref={headerRef}>
      <nav
        className="flex justify-between items-center  py-2 xl:py-6  md:py-6 bg-white w-11/12 mx-auto container"
        ref={navRef}
      >
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
            {/* Home Link */}
            <li
              className="text-[16px] font-[500] font-Inter relative group"
              ref={homeLinkRef}
            >
              <Link
                to="/"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Home
              </Link>
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </li>
            {/* Services Link */}
            <li
              className="text-[16px] font-[500] font-Inter relative group"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <Link
                to="/services"
                onClick={(e) => {
                  if (window.innerWidth >= 768) {
                    e.preventDefault(); // Prevent immediate navigation on desktop to allow dropdown hover
                  }
                }}
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Services
              </Link>
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/services") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </li>
            {/* About Us Link */}
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/about"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                About Us
              </Link>
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </li>
            {/* Contact Us Link */}
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/contact"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex text-[#333333] gap-[20px] items-center">
          <Link to="/login">
            <button className="text-[16px] font-[400] bg-[#008A3F] py-[17.5px] px-[24.5px] rounded-xl cursor-pointer text-[#FEFFFF] border-1 font-Inter hover:bg-green-600 hover:text-black">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="text-[16px] font-[400] bg-white py-[17.5px] px-[24.5px] rounded-xl cursor-pointer border-1 font-Inter hover:text-[#007A4D]">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Tablet and mobile icons */}
        <div className="flex lg:hidden items-center gap-4">
          <img
            className="w-[24px] h-[24px] cursor-pointer"
            src={eptUserLogo}
            alt="Auth Button"
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
          />
          <img
            className="w-[24px] h-[24px] cursor-pointer md:hidden"
            src={eptMobileMenu}
            alt="Mobile Menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Mobile Dropdown Menu (for Home, About Us, Contact Us) */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-1 bg-white shadow-lg rounded-lg p-4 z-50 w-full md:hidden">
            <ul className="text-[#333333] flex flex-col gap-4 items-center">
              {/* Mobile Home Link */}
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/">Home</Link>
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </li>
              {/* Mobile Services Link */}
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/services">Services</Link>
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/services") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </li>
              {/* Mobile About Us Link */}
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/about">About Us</Link>
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </li>
              {/* Mobile Contact Us Link */}
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/contact">Contact Us</Link>
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${isActiveLink("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
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
                      w-[574px] h-[266px] 
                      md:w-[calc(100vw-4rem)] md:max-w-[450px] md:mx-auto md:h-auto 
                      transition-opacity duration-300 ease-in-out opacity-100
                      hidden md:block
                      pointer-events-auto
                      `}
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          {/* Grid for 2 columns and 3 rows */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-3">
            {serviceLinks.map((link, index) => (
              <div key={link.id || index} className="relative group">
                {" "}
                <Link // Changed from <a> to <Link> for React Router
                  to={link.path}
                  className="text-black font-Inter text-[16px] font-[500]
                             
                             w-[257px] h-[55px] 
                             md:w-full 
                             p-3 rounded-md
                             flex items-center justify-center text-center
                             hover:bg-[#E6F3EC]
                             transition-colors duration-200
                             relative group"
                  onMouseEnter={() => {
                    clearTimeout(servicesDropdownTimeoutId.current);
                    setActiveSubDropdownId(link.id);
                  }}
                  onMouseLeave={() => {
                    servicesDropdownTimeoutId.current = setTimeout(() => {
                      setActiveSubDropdownId(null);
                    }, 150);
                  }}
                >
                  {link.name}

                  {/* Nested Dropdown for Engineering & Project Management */}
                  {link.subLinks && activeSubDropdownId === link.id && (
                    <div
                      className="absolute top-0 left-full ml-4 bg-white p-4 rounded-lg shadow-lg z-50
                                 w-[280px] h-auto flex flex-col gap-2
                                 transition-opacity duration-300 ease-in-out opacity-100
                                 pointer-events-auto"
                      onMouseEnter={() => {
                        clearTimeout(servicesDropdownTimeoutId.current);
                        setActiveSubDropdownId(link.id); // Keep this sub-dropdown active
                      }}
                      onMouseLeave={() => {
                        servicesDropdownTimeoutId.current = setTimeout(() => {
                          setActiveSubDropdownId(null);
                        }, 150);
                      }}
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link // Changed from <a> to <Link> for React Router
                          key={subIndex}
                          to={subLink.path}
                          className="text-black font-Inter text-[16px] font-[500]
                                     hover:bg-[#E6F3EC]
                                     w-full h-[55px]
                                     p-3 rounded-md
                                     flex items-center justify-center text-center
                                     transition-colors duration-300
                                     relative group"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
