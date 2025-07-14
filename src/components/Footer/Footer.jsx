import React from "react";
import logo from "../../assets/white ept logo.png";
import facebooklogo from "../../assets/raphael_facebook.png";
import instagramlogo from "../../assets/streamline_instagram-solid.png";
import xlogo from "../../assets/streamline-logos_x-twitter-logo-block.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#013F1E] text-[#FBFEFF] py-8 lg:py-13 mx-auto">
      <div className="w-11/12 mx-auto container">
        <div className="lg:flex lg:justify-between items-start lg:mb-10">
          {/* Logo & Newsletter */}
          <div>
            <Link to="/">
              <img className="mb-10" src={logo} alt="ept logo" />
            </Link>

            {/* For desktop view only */}
            <div className="hidden lg:block">
              <p className="lg:text-[16px] lg:font-semibold lg:mb-2">
                Subscribe to Our Newsletters
              </p>
              <form className="relative lg:mb-9">
                <input
                  className="bg-white w-full md:h-12 lg:rounded-md placeholder:text-[#969797] lg:placeholder:text-[15px] px-2 lg:pb-2 lg:pt-1 focus:outline-none text-black"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />

                <button
                  className="bg-[#008A3F] lg:px-6 h-[48px] rounded-md lg:text-[15px] font-medium absolute right-0 lg:top- tracking-wide hover:bg-white hover:text-[#008A3F] hover:border-[1px]"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>

              <div className="mt-5 flex lg:gap-6 items-center mb-8">
                <p className="lg:text-[16px] md:tracking-wide">
                  Connect With Us
                </p>

                <div className="flex lg:gap-1 items-center">
                  <img
                    className="w-6 hover:cursor-pointer"
                    src={facebooklogo}
                    alt="facebook logo"
                  />

                  <img
                    className="w-6 hover:cursor-pointer"
                    src={instagramlogo}
                    alt="instagram logo"
                  />

                  <img
                    className="w-6 hover:cursor-pointer"
                    src={xlogo}
                    alt="x logo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="mb-20">
            <p className="text-[20px] lg:text-[18px] font-semibold mb-6 lg:tracking-wide">
              Company
            </p>

            <ul className="text-[18px] lg:text-[16px]">
              <li className="mb-4 hover:underline">
                <a href="#">About EPT</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Leadership</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Careers</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Training & Certification</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-20">
            <p className="text-[20px] lg:text-[19px] font-semibold mb-6 lg:tracking-wide">
              Services
            </p>

            <ul className="text-[18px] lg:text-[16px]">
              <li className="mb-4 hover:underline">
                <a href="#">EPT Services</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Engineering Design</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Equipment Rental</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Project Support</a>
              </li>

              <li className="mb-4 hover:underline">
                <a href="#">Plant Construction</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mb-15">
            <p className="text-[20px] lg:text-[19px] font-semibold mb-6 lg:tracking-wide">
              Contact Us
            </p>

            <ul className="text-[18px] lg:text-[16px] mb-5">
              <p className="mb-4 leading-6">
                Energy & Plant Technology Limited <br /> RC: 7956423
              </p>

              <p className="mb-4 leading-6">
                Lagos Office: 26 Furo Ezimora Street <br /> Lekki Phase 1,
                Lagos, Nigeria
              </p>
            </ul>

            <div className="text-[18px] leading-6">
              <p>Email: sales@ept.ng</p>
              <p>Phone: +234 708 020 0099</p>
            </div>
          </div>

          {/* For moblie view only */}
          <div className="lg:hidden">
            <p className="mt-8 text-[18px] font-semibold tracking-wide mb-4">
              Subscribe to Our Newsletters
            </p>
            <form className="relative w-full md:w-[326px]">
              <input
                className="bg-white w-full h-11 rounded-md placeholder:text-[#969797] placeholder:text-sm px-3
              focus:outline-none text-black"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email adddress"
              />

              <button
                className="bg-[#008A3F] px-6 h-[45.5px] rounded-md text-[16px] font-medium absolute right-0 top-[-1px] hover:bg-white hover:text-[#008A3F] hover:border-[1px] hover:cursor-pointer"
                type="submit"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-5 flex gap-8 items-center mb-8">
              <p className="text-[18px]">Connect With Us</p>

              <div className="flex gap-3 items-center">
                <img className="w-6" src={facebooklogo} alt="facebook logo" />

                <img className="w-6" src={instagramlogo} alt="instagram logo" />

                <img className="w-6" src={xlogo} alt="x logo" />
              </div>
            </div>
          </div>
        </div>

        <hr className="" />

        {/* Footer Bottom text */}
        <div className="lg:w-100 lg:m-auto mb-5">
          <p className="mt-9 text-center text-[14px] leading-5 tracking-wide">
            &copy; 2025 Energy & Plant Technology Ltd. All Rights Reserved.
            Built with precision. Powered by innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
