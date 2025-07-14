import React from "react";
import Worker from "../../assets/image 107.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Logo from "../../assets/image 2.svg";



const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  

  const { password, confirmPassword } = formData;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(""); 
    alert("Password reset successfully");
  
  
  };

  return (
<div  className="grid grid-cols-1 lg:grid-cols-2">
  <div>
      <img className="hidden lg:block" src={Worker} alt="Worker" />
</div>
  <div className="flex  justify-center px-4 sm:px-8  bg-white">
  <div className="w-full max-w-md px-4 mt-10 lg:mt-18 ">
       <img
      src={Logo}
      alt="Logo"
      className="w-24 mb-10 mx-auto hidden lg:block"
    />
          <div>
    <h1 className="text-2xl text-[#000101] lg:text-[28px] font-semibold">Set New Password</h1>
    <p className="text-[#000101]">
      secure your account with a new password.
    </p>
  </div>
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="mb-4 relative">
        <label htmlFor="password" className="block text-sm font-medium text-[#000101] uppercase lg:text-[16px]">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          value={formData.password}
          onChange={ handleChange }
          placeholder="password"
          className="mt-1 block w-full px-3 py-2 rounded-md sm:text-sm bg-[#EFEFEF] outline-none"
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-4 top-12 lg:top-9 transform -translate-y-1/2 w-[20px] lg:bottom-6"
        >
          {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
        </button>
      </div>

      <div className="mb-4 relative">
        <label htmlFor="confirm-password" className="hidden lg:block text-sm font-medium text-[#000101] uppercase lg:text-[16px]">
          Confirm Password
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="mt-1 block w-full px-3 py-2 bg-[#EFEFEF] rounded-md sm:text-sm outline-none"
        />
        <button
          type="button"
          onClick={handleToggleConfirmPassword}
          className="absolute right-4 top-6 lg:top-9  transform -translate-y-1/2 w-[20px] lg:bottom-6"
        >
          {showConfirmPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
        </button>
      </div>

      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      <button
        type="submit"
        className="w-full bg-[#008A3F] text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700"
      >
           Reset Password
      </button>
       <div className="flex items-center justify-center gap-2 my-4">
              <span className="w-full h-[1px] bg-[#000000]"></span>
              <p className="text-[#181A20D1] text-[14px] sm:text-[16px]">or</p>
              <span className="w-full h-[1px] bg-[#000000]"></span>
            </div>
      <p className="mt-4 text-center text-sm text-[#000101] text-[16px] font-normal">
        Back to Login?{" "}
        <Link to="/login" className="text-[#008A3F] font-semibold">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>
</div>
  );
};


export default ResetPassword;
