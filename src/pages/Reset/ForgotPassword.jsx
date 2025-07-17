import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import banner from "../../assets/image 107.png";
import logo from "../../assets/ept logo.png";
import { useAuth } from "../../context/AuthContext"; // Import useAuth

const ForgotPassword = () => {
  const {
    register,
    handleSubmit, // Use handleSubmit from react-hook-form
    formState: { errors },
    reset, // To clear the form after successful submission
  } = useForm({
    mode: "onBlur", // Validate on blur
  });

  const { initiateForgotPassword } = useAuth(); // Destructure initiateForgotPassword from AuthContext

  const [loading, setLoading] = useState(false); // For loading state
  const [serverMessage, setServerMessage] = useState(""); // For success/error messages from backend
  const [serverError, setServerError] = useState(""); // To differentiate error messages

  // --- Handle Form Submission ---
  const onSubmit = async (data) => {
    setLoading(true);
    setServerMessage(""); // Clear previous messages
    setServerError(""); // Clear previous errors

    try {
      const responseMessage = await initiateForgotPassword(data.email);
      setServerMessage(
        responseMessage || "Password reset link sent successfully!"
      ); // Use backend message or default
      reset(); // Clear the email field
    } catch (err) {
      console.error("Forgot password request error:", err);
      setServerError(
        typeof err === "string"
          ? err
          : err?.response?.data?.message ||
              err?.message ||
              "Failed to send password reset link. Please try again."
      ); // Display backend error or generic
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-6/8 lg:w-full mx-auto grid lg:grid-cols-2 h-screen">
        <div className="hidden lg:block h-full">
          <img
            src={banner}
            alt="three men standing"
            className="w-full h-screen object-cover"
          />
        </div>

        <div className="flex items-center justify-center p-5">
          <div className="w-full md:w-10/12  mx-auto text-[#000101]">
            <Link to="/">
              <img
                src={logo}
                alt="EPT logo"
                className="w-[100px] mx-auto mb-10"
              />
            </Link>

            <h2 className="text-xl md:text-2xl lg:text-[25px] font-semibold font-Inter mb-1">
              Forgot Password?
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal font-Inter mb-5">
              Enter your email to receive a password reset link
            </p>

            {/* Display messages */}
            {serverMessage && (
              <p className="text-green-600 text-center mb-3 text-sm">
                {serverMessage}
              </p>
            )}
            {serverError && (
              <p className="text-red-500 text-center mb-3 text-sm">
                {serverError}
              </p>
            )}

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
                  ${
                    errors.email
                      ? "border border-red-500"
                      : "border border-transparent"
                  }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm block mb-3">
                  {errors.email.message}
                </span>
              )}

              <button
                type="submit"
                disabled={loading} // Disable button while loading
                className={`bg-[#008A3F] mt-4 text-white text-base w-full py-3 rounded-md transition
                  ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "cursor-pointer hover:bg-white hover:text-[#008A3F] hover:border hover:border-[#008A3F]"
                  }`}
              >
                {loading ? "Sending..." : "Send reset link"}
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
