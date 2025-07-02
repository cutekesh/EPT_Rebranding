import React from "react";
import logo from "../../assets/white ept logo.png";
import facebooklogo from "../../assets/raphael_facebook.png";
import instagramlogo from "../../assets/streamline_instagram-solid.png";
import xlogo from "../../assets/streamline-logos_x-twitter-logo-block.png";

const Footer = () => {
  return (
    <footer className="bg-[#013F1E] text-[#FBFEFF] px-6 py-8 md:px-25 md:py-13">
      <div className="md:flex md:gap-45 items-start md:mb-15">
        {/* Logo & Newsletter */}
        <div>
          <img className="mb-10" src={logo} alt="ept logo" />

          {/* For desktop view only */}
          <div className="hidden md:block">
            <p className="md:text-[16px] md:font-semibold md:mb-2">
              Subscribe to Our Newsletters
            </p>
            <form className="relative md:mb-9">
              <input
                className="bg-[#FEF9E6] w-75 md:h-12 md:rounded-lg placeholder:text-[#969797] md:placeholder:text-[15px] px-2 md:pb-2 md:pt-1 focus:outline-none text-black"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />

              <button
                className="bg-[#008A3F] md:px-6 h-[40px] md:rounded-lg md:text-[15px] font-medium absolute right-2 md:top-1 tracking-wide hover:bg-white hover:text-[#008A3F] hover:border-[1px]"
                type="submit"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-5 flex md:gap-6 items-center mb-8">
              <p className="md:text-[16px] md:tracking-wide">Connect With Us</p>

              <div className="flex md:gap-1 items-center">
                <img className="w-6" src={facebooklogo} alt="facebook logo" />

                <img className="w-6" src={instagramlogo} alt="instagram logo" />

                <img className="w-6" src={xlogo} alt="x logo" />
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="mb-20">
          <p className="text-[20px] md:text-[18px] font-semibold mb-6 md:tracking-wide">
            Company
          </p>

          <ul className="text-[18px] md:text-[16px]">
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
          <p className="text-[20px] md:text-[19px] font-semibold mb-6 md:tracking-wide">
            Services
          </p>

          <ul className="text-[18px] md:text-[16px]">
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
          <p className="text-[20px] md:text-[19px] font-semibold mb-6 md:tracking-wide">
            Contact Us
          </p>

          <ul className="text-[18px] md:text-[16px] mb-5">
            <p className="mb-4 leading-6">
              Energy & Plant Technology Limited <br /> RC: 7956423
            </p>

            <p className="mb-4 leading-6">
              Lagos Office: 26 Furo Ezimora Street <br /> Lekki Phase 1, Lagos,
              Nigeria
            </p>
          </ul>

          <div className="text-[18px] leading-6">
            <p>Email: sales@ept.ng</p>
            <p>Phone: +234 708 020 0099</p>
          </div>
        </div>

        <hr className="md:hidden" />

        {/* For moblie view only */}
        <div className="md:hidden">
          <p className="mt-8 text-[18px] font-semibold tracking-wide mb-4">
            Subscribe to Our Newsletters
          </p>
          <form className="relative">
            <input
              className="bg-[#FEF9E6] w-75 h-11 rounded-l-lg placeholder:text-[#969797] placeholder:text-[16px] px-3
              focus:outline-none text-black"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email adddress"
            />

            <button
              className="bg-[#008A3F] px-8 h-[45.5px] rounded-lg text-[16px] font-medium absolute right-2 top-[-1px] hover:bg-white hover:text-[#008A3F] hover:border-[1px] hover:cursor-pointer"
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

      <hr className="md:hidden" />

      {/* Footer Bottom text */}
      <div className="md:w-100 md:m-auto mb-5">
        <p className="mt-9 text-center text-[14px] leading-5 tracking-wide">
          &copy; 2025 Energy & Plant Technology Ltd. All Rights Reserved. Built
          with precision. Powered by innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
