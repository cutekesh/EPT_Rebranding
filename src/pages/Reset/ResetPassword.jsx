import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Worker from "../../assets/image 107.png";
import Logo from "../../assets/image 2.svg";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  const { password, confirmPassword } = formData;

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Password reset successfully");
    setFormData({ password: "", confirmPassword: "" });
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-6/8 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
      <div className="hidden lg:block">
        <img className="w-full h-full object-cover" src={Worker} alt="Worker" />
      </div>

      <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 py-10">
        <div className="w-full max-w-md">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-24 mb-10 mx-auto hidden lg:block" />
          </Link>

          <div>
            <h1 className="text-2xl lg:text-[28px] font-semibold text-[#000101]">Set New Password</h1>
            <p className="text-[#000101]">Secure your account with a new password.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-black">
            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-[#000101] uppercase lg:text-[16px]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className={`mt-1 block w-full px-3 py-2 rounded-md bg-[#EFEFEF] outline-none focus:ring-2 focus:ring-[#008A3F] sm:text-sm border ${
                  errors.password ? "border-red-600" : "border-[#BABCD4]"
                }`}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-4 top-[42px] transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
              </button>
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#000101] uppercase lg:text-[16px]">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`mt-1 block w-full px-3 py-2 rounded-md bg-[#EFEFEF] outline-none focus:ring-2 focus:ring-[#008A3F] sm:text-sm border ${
                  errors.confirmPassword ? "border-red-600" : "border-[#BABCD4]"
                }`}
              />
              <button
                type="button"
                onClick={handleToggleConfirmPassword}
                className="absolute right-4 top-[42px] transform -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#008A3F] text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition-all"
            >
              Reset Password
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-4">
              <span className="w-full h-[1px] bg-black"></span>
              <p className="text-[#181A20D1] text-[14px] sm:text-[16px]">or</p>
              <span className="w-full h-[1px] bg-black"></span>
            </div>

            {/* Back to Login */}
            <p className="text-center text-sm text-[#000101] text-[16px] font-normal">
              Back to Login?{" "}
              <Link to="/login" className="text-[#008A3F] font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
