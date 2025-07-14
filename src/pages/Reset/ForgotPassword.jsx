import React from "react";
import banner from "../../assets/image 107.png";
import logo from "../../assets/ept logo.png";
import hamburgerIcon from "../../assets/eptMobileMenu.svg";
import userIcon from "../../assets/eptUserLogo.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="lg:flex lg-justify-between items-start">
      <div className="hidden lg:block">
        <img src={banner} alt="three men standing" />
      </div>
      <div className="p-5 my-5 lg:my-20 lg:mx-15 md:w-[566px] mx-auto">
          <img
            className="w-[100px] m-auto mb-10"
            src={logo}
            alt="EPT logo"
          />
          <h2 className=" text-[24px] lg:text-[25px] font-Inter font-semibold mb-1 lg:tracking-wide">
            Forgot Password?
          </h2>
          <p className="lg:hidden text-[15px] font-Inter font-normal mb-5">
            Enter your email to receive a password link
          </p>
          <p className="hidden lg:block text-[18px] font-Inter font-normal mb-2">
            Enter your email to receive a password reset link
          </p>
          <form action="">
            <label
              className="hidden lg:block font-Inter font-bold text-[16px] mb-1"
              htmlFor=""
            >
              EMAIL
            </label>

            {/* mobile view */}
            <input
              className="lg:hidden bg-[#EFEFEF] w-full mb-7 h-13 ps-2 rounded-[8px] placeholder:text-[16px]"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />

            {/* desktop view */}
            <input
              className="hidden lg:block bg-[#EFEFEF] w-full mb-10 h-13 ps-2 rounded-[8px] placeholder:text-[18px]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email*"
              required
            />
            <button className="bg-[#008A3F] text-[#FEFFFF] text-[18px] block w-full h-13 rounded-[6px] hover:bg-[#fff] hover:text-[#008A3F] hover:border">
              Send reset link
            </button>
          </form>
          <div className="flex items-center my-4 mt-5">
            <hr className="flex-grow border-t border-[#000000]" />
            <span className="mx-4 text-[#000000] font-medium text-[16px] md:text-[17px]">
              Or
            </span>
            <hr className="flex-grow border-t border-[#000000]" />
          </div>
          <p className="text-[16px] lg:text-[18px] font-Inter font-medium text-center">
            Remember you password?{" "}
            <Link className="text-[#008A3F] cursor-pointer" to="/login">
              Login
            </Link>
          </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
