import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Workers from "../../assets/image 107.png";
import Logo from "../../assets/image 2.svg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Google from "../../assets/flat-color-icons_google.svg";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { reset } = useForm();

  const { login, googleLogin } = useAuth();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLoginClick = async () => {
    setLoading(true);
    setError({});
    try {
      const success = await googleLogin();
      if (success) {
        navigate("/");
      } else {
        setError({
          general: "Google login was cancelled or failed. Please try again.",
        });
      }
    } catch (err) {
      setError({
        general:
          err.message || "Google login failed due to an unexpected error.",
      });
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({}); // Clear errors on input change
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, password } = formData;

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Enter a valid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      // --- FIX 3: Call the actual login function from AuthContext ---
      const success = await login(email, password); // Pass email and password
      if (success) {
        setError({}); // Clear errors on successful login
        reset();
        navigate("/"); // Redirect to dashboard on success
      } else {
        // Error message will be set by AuthContext's login function if it returns false
        // or you can set a generic one here if AuthContext doesn't handle it
        setError({ general: "Login failed. Please check your credentials." });
      }
    } catch (err) {
      setError({
        general:
          err.response?.data?.message ||
          "Login failed due to an unexpected error.",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img
          src={Workers}
          alt="Workers"
          className="w-full h-full object-cover rounded-md hidden lg:block"
        />
      </div>

      <div className="flex items-center justify-center px-4 sm:px-8  bg-white">
        <div className="w-full max-w-md sm:max-w-lg ">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-24 mb-14 mx-auto hidden lg:block"
            />
          </Link>

          <div className="mb-8">
            <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold text-[#000101]">
              Welcome Back
            </h1>

            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error.general && (
              <p className="text-red-500 text-sm">{error.general}</p>
            )}

            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="email"
                className="text-[15px] sm:text-[16px] font-bold uppercase text-[#000101]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="text-[#2632388F] bg-[#E6F3EC] p-2 lg:px-2 md:py-4 rounded-md outline-none"
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className="text-[15px] sm:text-[16px] font-bold uppercase text-[#000101]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="text-[#2632388F] bg-[#E6F3EC] p-2  lg:px-2 md:py-4 rounded-md outline-none"
              />

              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={handleTogglePassword}
                className="absolute right-4 translate-y-3 w-[20px] rounded-full bottom-6 lg:bottom-8 text-gray-600"
              >
                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
              </button>
              {error.password && (
                <p className="text-red-500 text-sm">{error.password}</p>
              )}
            </div>

            {/* Ensure this link points to the correct route, e.g., /forgot-password */}
            <Link
              to="/forgot-password"
              className="text-[14px] sm:text-[16px] font-medium text-end block text-[#000000]"
            >
              Forgot Password?
            </Link>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-[#008A3F] text-white p-2 lg:px-2 lg:py-4 rounded-md font-semibold hover:bg-[#006f2d] transition duration-300 cursor-pointer mt-2"
              >
                Sign In
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 my-4">
              <span className="w-full h-[1px] bg-[#000000]"></span>
              <p className="text-[#181A20D1] text-[14px] sm:text-[16px]">or</p>
              <span className="w-full h-[1px] bg-[#000000]"></span>
            </div>

            <button
              type="button" // Important: change to type="button" to prevent form submission
              onClick={handleGoogleLoginClick}
              className={`w-full flex gap-2 items-center justify-center border border-[#BABCD4] rounded-md py-2 transition-all ${
                loading ? "bg-gray-200 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              <img alt="google icon" src={Google} />
              <p className="text-[#000101]">Continue with Google</p>
            </button>

            <div className="text-center font-medium lg:text-[20px]">
              <span className="text-[#000101]">Don't have an account? </span>
              <Link to="/register" className="text-[#008A3F] hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
