import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import banner from "../../assets/image 107.png";
import logo from "../../assets/ept logo.png";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reset link requested for:", data.email);
    // Call your reset API here
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-6/8 lg:w-full mx-auto grid lg:grid-cols-2 h-screen">
        <div className="hidden lg:block h-full">
          <img
            src={banner}
            alt="three men standing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center p-5">
          <div className="w-full md:w-10/12 mx-auto text-[#000101]">
            <img
              src={logo}
              alt="EPT logo"
              className="w-[100px] mx-auto mb-10"
            />

            <h2 className="text-xl md:text-2xl lg:text-[25px] font-semibold font-Inter mb-1">
              Forgot Password?
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal font-Inter mb-5">
              Enter your email to receive a password reset link
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                htmlFor="email"
                className="font-bold text-sm lg:text-base font-Inter block mb-1"
              >
                EMAIL
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email*"
                className={`bg-[#EFEFEF] w-full p-3 mb-2 mt-1 rounded-md placeholder:text-[#969797] placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-none focus:ring-1 focus:ring-[#008A3F] 
                  ${errors.email ? "border border-red-500" : "border border-transparent"}`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm block mb-3">
                  {errors.email.message}
                </span>
              )}

              <button
                type="submit"
                className="bg-[#008A3F] mt-4 text-white text-base w-full py-3 rounded-md hover:bg-white hover:text-[#008A3F] hover:border hover:border-[#008A3F] transition"
              >
                Send reset link
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-[#000000]" />
              <span className="mx-4 text-[#000000] font-medium text-sm lg:text-base">
                Or
              </span>
              <hr className="flex-grow border-t border-[#000000]" />
            </div>

            <p className="text-sm lg:text-base font-medium text-center font-Inter">
              Remember your password?{" "}
              <Link to="/login" className="text-[#008A3F] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
