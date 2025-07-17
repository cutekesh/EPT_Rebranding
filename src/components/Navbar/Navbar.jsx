import React, { useState, useEffect, useRef } from "react";
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeSubDropdownId, setActiveSubDropdownId] = useState(null);
  const [isEngineeringSubDropdownOpen, setIsEngineeringSubDropdownOpen] =
    useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const servicesDropdownTimeoutId = useRef(null);

  const homeLinkRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const engineeringSubDropdownRef = useRef(null);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const location = useLocation();

  // Handlers for Services dropdown hover behavior
  const handleMouseEnterServices = () => {
    clearTimeout(servicesDropdownTimeoutId.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    if (!isEngineeringSubDropdownOpen) {
      servicesDropdownTimeoutId.current = setTimeout(() => {
        setIsServicesDropdownOpen(false);
        setIsOverlayActive(false);
      }, 150);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const handleEngineeringClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearTimeout(servicesDropdownTimeoutId.current);
    const newState = !isEngineeringSubDropdownOpen;
    setIsEngineeringSubDropdownOpen(newState);
    setIsOverlayActive(newState);
    setIsServicesDropdownOpen(true);
  };

  const serviceLinks = [
    {
      id: "engineering",
      name: "Engineering & Project Management",
      path: "/services/engineering",
      subLinks: [
        {
          name: "Front End Engineering Design",
          path: "/services",
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
          const servicesDropdownRect =
            servicesDropdownRef.current.getBoundingClientRect();
          const engineeringSubDropdownLeftOffset =
            servicesDropdownRect.right - headerRect.left + 20;
          const engineeringSubDropdownTopOffset =
            servicesDropdownRect.top - headerRect.top;
          headerRef.current.style.setProperty(
            "--engineering-sub-dropdown-left",
            `${engineeringSubDropdownLeftOffset}px`
          );
          headerRef.current.style.setProperty(
            "--engineering-sub-dropdown-top",
            `${engineeringSubDropdownTopOffset}px`
          );
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

  // Handle click outside for dropdowns and menus
  useEffect(() => {
    function handleClickOutside(event) {
      // Services dropdown
      if (
        isServicesDropdownOpen &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
        setIsEngineeringSubDropdownOpen(false);
        setIsOverlayActive(false);
        setActiveSubDropdownId(null);
      }
      // Engineering sub-dropdown
      if (
        isEngineeringSubDropdownOpen &&
        engineeringSubDropdownRef.current &&
        !engineeringSubDropdownRef.current.contains(event.target) &&
        !servicesDropdownRef.current?.contains(event.target)
      ) {
        setIsEngineeringSubDropdownOpen(false);
        setIsOverlayActive(false);
        setIsServicesDropdownOpen(false);
      }
      // User menu
      if (
        isUserMenuOpen &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        event.target !== document.querySelector('img[alt="Auth Button"]')
      ) {
        setIsUserMenuOpen(false);
      }
      // Mobile menu
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        event.target !== document.querySelector('img[alt="Mobile Menu"]')
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line
  }, [isServicesDropdownOpen, isEngineeringSubDropdownOpen, isUserMenuOpen, isMenuOpen]);

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
          <div
            className="absolute top-[60px] right-1 bg-white shadow-lg rounded-lg p-4 z-50 w-full md:hidden"
            ref={mobileMenuRef}
          >
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
          <div
            className="absolute top-[60px] right-4 bg-white shadow-lg drop-shadow-md rounded-lg p-4 z-50"
            ref={userMenuRef}
          >
            <div className="w-30 flex flex-col gap-4">
              <Link to="/login">
                <button className="w-full text-[16px] font-[400] bg-[#008A3F] py-2 px-4 rounded-xl cursor-pointer text-[#FEFFFF] border-1 font-Inter hover:bg-green-600 hover:text-black">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="w-full text-[16px] border border-green-500 text-green-500 font-[400] bg-white py-2 px-4 rounded-xl cursor-pointer border-1 font-Inter hover:text-[#007A4D]">
                  Sign Up
                </button>
              </Link>
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-3">
            {serviceLinks.map((link, index) => (
              <div key={link.id || index} className="relative group">
                <Link
                  to={link.path}
                  onClick={
                    link.id === "engineering"
                      ? handleEngineeringClick
                      : undefined
                  }
                  className={`text-black font-Inter text-[16px] font-[500] w-[257px] h-[55px] md:w-full p-3 rounded-md flex items-center text-start hover:bg-[#008A3F] hover:text-white transition-colors duration-200 relative group
                    ${ link.id === "engineering" &&
                    isEngineeringSubDropdownOpen
                    ? "bg-[#008A3F] text-white"
                    : ""
                    }`}
                >
                  {link.name}

                  {/* Nested Dropdown for Engineering & Project Management */}
                  {link.subLinks && activeSubDropdownId === link.id && (
                    <div
                      className="absolute top-0 left-full ml-4 bg-white p-4 rounded-lg shadow-lg z-50 w-[280px] h-auto flex flex-col gap-2 transition-opacity duration-300 ease-in-out opacity-100 pointer-events-auto"
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
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          className="text-black font-Inter text-[16px] font-[500] hover:bg-[#E6F3EC] w-full h-[55px] p-3 rounded-md flex items-center justify-center text-center transition-colors duration-300 relative group">
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
          {serviceLinks
            .find((link) => link.id === "engineering")
            ?.subLinks.map((subLink, subIndex) => (
              <Link
                key={subIndex}
                to={subLink.path}
                className="text-black font-Inter text-[16px] font-[500] hover:bg-[#008A3F] hover:text-white w-full h-[55px] p-3 rounded-md flex items-center text-start transition-colors duration-300 relative group">
                {subLink.name}
              </Link>
            ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
