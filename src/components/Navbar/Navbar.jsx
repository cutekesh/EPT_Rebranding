import React, { useState, useEffect, useRef } from "react";
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEngineeringSubDropdownOpen, setIsEngineeringSubDropdownOpen] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const servicesDropdownTimeoutId = useRef(null);

  const homeLinkRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const engineeringSubDropdownRef = useRef(null);

  const location = useLocation();

  // Handlers for Services dropdown hover behavior
  const handleMouseEnterServices = () => {
    clearTimeout(servicesDropdownTimeoutId.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    // Only close if engineering sub-dropdown is not open
    if (!isEngineeringSubDropdownOpen) {
      servicesDropdownTimeoutId.current = setTimeout(() => {
        setIsServicesDropdownOpen(false);
        setIsOverlayActive(false);
      }, 150);
    }
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Function to toggle the user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  // Handler for Engineering & Project Management link click
  const handleEngineeringClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent click from bubbling to parent onMouseLeave
    clearTimeout(servicesDropdownTimeoutId.current); // Clear any pending close
    const newState = !isEngineeringSubDropdownOpen;
    setIsEngineeringSubDropdownOpen(newState);
    setIsOverlayActive(newState);
    setIsServicesDropdownOpen(true); // Keep main dropdown open
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
    const calculateDropdownPositions = () => {
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

        if (servicesDropdownRef.current) {
          const servicesDropdownRect = servicesDropdownRef.current.getBoundingClientRect();
          const engineeringSubDropdownLeftOffset = servicesDropdownRect.right - headerRect.left + 20;
          const engineeringSubDropdownTopOffset = servicesDropdownRect.top - headerRect.top;
          headerRef.current.style.setProperty("--engineering-sub-dropdown-left", `${engineeringSubDropdownLeftOffset}px`);
          headerRef.current.style.setProperty("--engineering-sub-dropdown-top", `${engineeringSubDropdownTopOffset}px`);
        }
      }
    };

    calculateDropdownPositions();
    window.addEventListener("resize", calculateDropdownPositions);

    return () => {
      window.removeEventListener("resize", calculateDropdownPositions);
      clearTimeout(servicesDropdownTimeoutId.current);
    };
  }, []);

  const isActiveLink = (path) => {
    if (path === "/services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname === path;
  };

  return (
    <header className="relative" ref={headerRef}>
      <nav
        className="flex justify-between items-center py-2 xl:py-6 md:py-6 bg-white w-11/12 mx-auto container"
        ref={navRef}
      >
        {/* Logo */}
        <Link to="/">
          <img
            className="md:w-[158.67px] md:h-[45.06px] w-[120px] h-[40px]"
            src={eptLogo}
            alt="EPT Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="text-[#333333] flex gap-[30px] xl:gap-[40px] 2xl:gap-[80px]">
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
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                  isActiveLink("/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </li>
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
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                  isActiveLink("/services")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/about"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                About Us
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                  isActiveLink("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/contact"
                className="hover:text-[#007A4D] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                  isActiveLink("/contact")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex text-[#333333] gap-[20px] items-center">
          <Link to="/login">
            <button className="text-[16px] font-[400] bg-[#008A3F] py-[17.5px] px-[24.5px] rounded-xl cursor-pointer text-[#FEFFFF] border-1 font-Inter hover:bg-[#006A3F] hover:text-black">
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
            onClick={toggleUserMenu}
          />
          <img
            className="w-[24px] h-[24px] cursor-pointer md:hidden"
            src={eptMobileMenu}
            alt="Mobile Menu"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-1 bg-white shadow-lg rounded-lg p-4 z-50 w-full md:hidden">
            <ul className="text-[#333333] flex flex-col gap-4 items-center">
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/">Home</Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                    isActiveLink("/")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/services">Services</Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                    isActiveLink("/services")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/about">About Us</Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                    isActiveLink("/about")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/contact">Contact Us</Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#007A4D] transition-transform duration-300 ease-out origin-left ${
                    isActiveLink("/contact")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </li>
            </ul>
          </div>
        )}

        {isUserMenuOpen && (
          <div className="absolute top-[60px] right-4 bg-white shadow-lg rounded-lg p-4 z-50">
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

      {/* Full-page Overlay */}
      {isOverlayActive && (
        <div className="fixed inset-0 bg-black/60 z-40"></div>
      )}

      {/* Dropdown Menu for Services (Desktop Only) */}
      {isServicesDropdownOpen && (
        <div
          ref={servicesDropdownRef}
          className={`absolute xl:top-28
                      left-[20%]
                      bg-white p-4 rounded-lg shadow-lg z-50
                      w-[574px] h-[266px]
                      md:w-[calc(100vw-4rem)] md:max-w-[450px] md:mx-auto md:h-auto
                      transition-opacity duration-300 ease-in-out
                      opacity-100
                      hidden md:block
                      pointer-events-auto`}
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {serviceLinks.map((link, index) => (
              <div key={link.id || index} className="relative group">
                <Link
                  to={link.path}
                  onClick={link.id === "engineering" ? handleEngineeringClick : undefined}
                  className={`text-black font-Inter text-[16px] font-[500]
                             w-[257px] h-[55px]
                             md:w-full
                             p-3 rounded-md
                             flex items-center text-start
                             hover:bg-[#008A3F] hover:text-white
                             transition-colors duration-200
                             relative group
                             ${link.id === "engineering" && isEngineeringSubDropdownOpen ? 'bg-[#008A3F] text-white' : ''}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Engineering & Project Management Sub-dropdown */}
      {isEngineeringSubDropdownOpen && (
        <div
          ref={engineeringSubDropdownRef}
          className={`absolute bg-white p-4 rounded-lg shadow-lg z-50
                      w-[280px] h-auto flex flex-col gap-2
                      transition-opacity duration-300 ease-in-out opacity-100
                      pointer-events-auto xl:top-28 left-[46.2%]`}
          onMouseEnter={() => clearTimeout(servicesDropdownTimeoutId.current)}
          onMouseLeave={() => {
            servicesDropdownTimeoutId.current = setTimeout(() => {
              setIsEngineeringSubDropdownOpen(false);
              setIsOverlayActive(false);
              setIsServicesDropdownOpen(false);
            }, 150);
          }}
        >
          {serviceLinks.find(link => link.id === "engineering")?.subLinks.map((subLink, subIndex) => (
            <Link
              key={subIndex}
              to={subLink.path}
              className="text-black font-Inter text-[16px] font-[500]
                         hover:bg-[#008A3F] hover:text-white
                         w-full h-[55px]
                         p-3 rounded-md
                         flex items-center text-start
                         transition-colors duration-300
                         relative group"
            >
              {subLink.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;