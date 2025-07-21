import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/white ept logo.png";
import facebooklogo from "../../assets/raphael_facebook.png";
import instagramlogo from "../../assets/streamline_instagram-solid.png";
import xlogo from "../../assets/streamline-logos_x-twitter-logo-block.png";

const Footer = () => {
  return (
    <footer className="bg-[#013F1E] text-[#FBFEFF] py-10">
      <div className="w-11/12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Newsletter */}
          <div className="flex-1">
            <Link to="/">
              <img className="w-24" src={logo} alt="ept logo" />
            </Link>

            {/* Desktop Newsletter */}
            <div className="hidden lg:block">
              <p className="text-base tracking-tight font-semibold my-3">
                Subscribe to Our Newsletters
              </p>
              <form className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="bg-white text-black w-full h-11 rounded-md px-4 placeholder:text-[#969797] text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute w-24 right-1 top-1.5 bg-[#008A3F] px-5 h-8 rounded-md text-sm font-medium hover:bg-[#006A3F]"
                >
                  Subscribe
                </button>
              </form>

              <div className="flex items-center gap-4">
                <p className="text-sm tracking-tight font-medium">
                  Connect With Us
                </p>
                <div className="flex gap-3">
                  <img
                    className="w-5 cursor-pointer"
                    src={facebooklogo}
                    alt="facebook"
                  />
                  <img
                    className="w-5 cursor-pointer"
                    src={instagramlogo}
                    alt="instagram"
                  />
                  <img
                    className="w-5 cursor-pointer"
                    src={xlogo}
                    alt="twitter-x"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="#" className="hover:underline">
                  About EPT
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Training & Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="#" className="hover:underline">
                  EPT Services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Engineering Design
                </Link>
              </li>
              <li>
                <Link to="/equipments" className="hover:underline">
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Project Support
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Plant Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-base">
              <p>
                Energy & Plant Technology Limited <br /> RC: 7956423
              </p>
              <p>
                Lagos Office: 26 Furo Ezimora Street <br /> Lekki Phase 1,
                Lagos, Nigeria
              </p>
              <div>
                <p>Email: sales@ept.ng</p>
                <p>Phone: +234 708 020 0099</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#D1FFE74D] block md:hidden" />

        {/* Mobile Newsletter & Social */}
        <div className="lg:hidden mt-8">
          <p className="text-base font-semibold mb-3">
            Subscribe to Our Newsletters
          </p>
          <form className="relative mb-6 w-full md:w-75">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="bg-white text-black w-full h-11 rounded-md px-4 placeholder:text-[#969797] text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="absolute w-35 right-0 top-0 bg-[#008A3F] px-5 h-11 rounded-md text-sm font-medium hover:bg-[#006A3F]"
            >
              Subscribe
            </button>
          </form>

          <div className="flex items-center gap-6  mb-6">
            <p className="text-base font-medium">Connect With Us</p>
            <div className="flex gap-3">
              <img
                className="w-5 cursor-pointer"
                src={facebooklogo}
                alt="facebook"
              />
              <img
                className="w-5 cursor-pointer"
                src={instagramlogo}
                alt="instagram"
              />
              <img className="w-5 cursor-pointer" src={xlogo} alt="twitter-x" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-8 border-[#D1FFE74D] block md:hidden" />
        <p className="text-center text-sm md:mt-10 lg:mt-16">
          &copy; 2025 Energy & Plant Technology Ltd. All Rights Reserved.
          <br className="hidden md:block" /> Built with precision. Powered by
          innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
