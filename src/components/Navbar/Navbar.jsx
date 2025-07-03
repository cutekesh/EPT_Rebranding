import React, { useState } from "react";
import eptLogo from "../../assets/eptLogo.svg";
import eptUserLogo from "../../assets/eptUserLogo.svg";
import eptMobileMenu from "../../assets/eptMobileMenu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="w-full">
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
          <ul className="text-[#333333] flex gap-[30px] 2xl:gap-[80px] lg:gap-[40px]">
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                Home
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/services"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                Services
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/about"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                About Us
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-[16px] font-[500] font-Inter relative group">
              <Link
                to="/contact"
                className="hover:text-[#007A4D] transition-all duration-300"
              >
                Contact Us
              </Link>
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

        {/* Tablet and desktop icons */}
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

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-4 bg-white shadow-lg rounded-lg p-4 z-50 md:hidden">
            <ul className="text-[#333333] flex flex-col gap-4">
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/">Home</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/services">Services</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/about">About Us</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#007A4D] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[16px] font-[500] hover:text-[#007A4D] transition-all duration-300 font-Inter relative group">
                <Link to="/contact">Contact Us</Link>
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
    </header>
  );
};

export default Navbar;
