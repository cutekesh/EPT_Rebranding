import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import SignupImg from "../../assets/image 107.png";
import Logo from "../../assets/image 2.svg";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase"; // Adjust the import based on your firebase setup
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: handleFormSubmit,
    watch,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    mode: "onBlur",
  });

  const password = watch("password");

  const handleChange = (e) => {
    setServerError("");
    setSuccessMessage("");
    clearErrors(e.target.name);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    const { name, email, password } = data;

    try {
      const success = await signup(name, email, password);

      if (success) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        reset();
        setTimeout(() => {
          navigate("/login");
        });
      } else {
        setServerError("Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setServerError(err || "An unexpected error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      loginUser(userData, token, true); // Assume rememberMe for Google sign-in

      toast.success("Google Sign-up successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Google sign-up failed", error);
      let googleErrorMessage = "Google sign-up failed. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        googleErrorMessage = "Google sign-in window closed. Please try again.";
      } else if (error.code === "auth/cancelled-popup-request") {
        googleErrorMessage =
          "Google sign-in already in progress. Please wait or try again.";
      } else if (error.message) {
        googleErrorMessage = error.message;
      }
      toast.error(googleErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-6/8 lg:w-full mx-auto min-h-screen lg:grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src={SignupImg}
            alt="Signup banner"
          />
        </div>

        <div className="flex flex-col pt-24 lg:pt-0 justify-center w-full">
          <Link to="/" className="w-24 mx-auto my-8">
            <img src={Logo} alt="EPT Logo" />
          </Link>

          <div className="lg:mt-10 w-11/12 lg:w-9/12 mx-auto mb-8 lg:mr-20 font-Inter text-[#000101] text-xs md:text-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Register Now</h3>
              <p>Fill in your details below to become a member</p>
            </div>

            <form onSubmit={handleFormSubmit(onSubmit)} className="mt-4">
              <div className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">FULL NAME</label>
                  <input
                    {...register("name", {
                      required: "Full name is required",
                      pattern: {
                        value: /^[a-zA-Z\s'-]+$/,
                        message: "Please enter a valid full name",
                      },
                    })}
                    type="text"
                    placeholder="Enter your name*"
                    onChange={handleChange}
                    className={`w-full rounded-md p-3 pr-10 bg-[#EFEFEF] border ${
                      errors.name ? "border-red-700" : "border-[#BABCD4]"
                    } focus:outline-none focus:ring-1 focus:ring-[#008A3F]`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[12px]">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">EMAIL</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email*"
                    onChange={handleChange}
                    className={`w-full rounded-md p-3 pr-10 bg-[#EFEFEF] border ${
                      errors.email ? "border-red-700" : "border-[#BABCD4]"
                    } focus:outline-none focus:ring-1 focus:ring-[#008A3F]`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[12px]">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="hidden lg:block font-bold">PASSWORD</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                    className={`w-full rounded-md p-3 pr-10 bg-[#EFEFEF] border ${
                      errors.password ? "border-red-700" : "border-[#BABCD4]"
                    } focus:outline-none focus:ring-1 focus:ring-[#008A3F]`}
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-3 lg:top-[38px] cursor-pointer text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {errors.password && (
                    <span className="text-red-500 text-[12px]">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="hidden lg:block font-bold">
                    CONFIRM PASSWORD
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    onChange={handleChange}
                    className={`w-full rounded-md p-3 pr-10 bg-[#EFEFEF] border ${
                      errors.confirmPassword
                        ? "border-red-700"
                        : "border-[#BABCD4]"
                    } focus:outline-none focus:ring-1 focus:ring-[#008A3F]`}
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-3 lg:top-[38px] cursor-pointer text-gray-600"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-[12px]">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                {/* Terms checkbox */}
                <div className="flex items-center justify-center md:justify-start gap-2 md:px-4">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to the terms",
                    })}
                    className={`accent-[#008A3F] bg-white w-4 h-4 rounded-sm border ${
                      errors.terms ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-[#008A3F] focus:outline-none`}
                    onChange={handleChange}
                  />
                  <div className="lg:tracking-tight xl:tracking-normal">
                    I agree to the{" "}
                    <span className="text-[#008A3F]">terms of services</span>{" "}
                    and <span className="text-[#008A3F]">privacy policies</span>
                  </div>
                </div>
                {errors.terms && (
                  <span className="text-red-500 text-[12px]">
                    {errors.terms.message}
                  </span>
                )}
              </div>

              {/* Messages */}
              {serverError && (
                <p className="text-red-600 mt-4">{serverError}</p>
              )}
              {successMessage && (
                <p className="text-green-600 mt-4">{successMessage}</p>
              )}

              {/* Buttons */}
              <div className="font-medium text-sm flex flex-col gap-4 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`rounded-md text-white w-full py-3 transition-all ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#008A3F] hover:bg-[#006f2d]"
                  }`}
                >
                  {loading ? "Submitting..." : "Sign Up"}
                </button>

                <div className="w-full flex justify-center items-center gap-2 px-2">
                  <div className="w-[50%] border border-[#BABCD4]"></div>or
                  <div className="w-[50%] border border-[#BABCD4]"></div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className={`w-full flex gap-2 items-center justify-center border border-[#BABCD4] rounded-md py-3 transition-all ${
                    loading
                      ? "bg-gray-200 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                >
                  <FcGoogle size={16} />
                  {loading ? "Please wait..." : "Continue with Google"}
                </button>

                <Link to="/login" className="text-center">
                  Already have an account?{" "}
                  <span className="text-[#008A3F]">Sign In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
