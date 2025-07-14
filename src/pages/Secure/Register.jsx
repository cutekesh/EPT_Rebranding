// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";

// const Register = () => {
//   // State for holding form input values: email, password, and repeatPassword.
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     repeatPassword: "",
//   });
//   // State for holding error messages during registration.
//   const [error, setError] = useState("");
//   // State for holding success messages when registration is successful.
//   const [success, setSuccess] = useState("");
//   // Extract the register function from the Auth context to handle registration.
//   const { register } = useAuth(); // Get the register function from the AuthContext

//   // Event handler for updating form data when the user types in input fields.
//   const handleChange = (event) => {
//     // Update the corresponding property in formData based on the input's name attribute.
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   // Event handler for form submission.
//   const handleSubmit = async (event) => {
//     // Prevent the default form submission behavior (which would refresh the page).
//     event.preventDefault();
//     try {
//       // Call the register function (from Auth context) with the form data.
//       await register(formData);
//       // If registration is successful, show a success message.
//       setSuccess("Registration successful. Please log in.");
//       // Clear any previous error messages.
//       setError("");
//     } catch (err) {
//       // If an error occurs, update the error state with the server's message or a default one.
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };
//   return <div></div>;
// };

// export default Register;

import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import SignupImg from '../../assets/signup img.png';
import Logo from '../../assets/eptLogo.svg';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const { signup, googleLogin } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      // Ensure signup returns a boolean or throws on error
      await signup(data.fullName, data.email, data.password);
      setSuccessMessage("Registration successful!");
      reset();
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setServerError(err?.response?.data?.message || err?.message || "Registration failed. Please try again.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      const success = await googleLogin();
      if (success) {
        navigate("/dashboard"); // adjust route as needed
      }
    } catch (err) {
      setServerError(err?.message || "Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <img className="w-full h-full object-cover" src={SignupImg} alt="Signup banner" />
        </div>

        <div className="flex flex-col justify-center w-full">
          <Link to="/" className="hidden lg:block w-24 mx-auto lg:mt-8">
            <img src={Logo} alt="EPT Logo" />
          </Link>

          <div className="lg:mt-10 w-11/12 lg:w-9/12 mx-auto mb-8 lg:mr-20 font-Inter text-[#000101] text-xs md:text-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Register Now</h3>
              <p>Fill in your details below to become a member</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="flex flex-col gap-4">

                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">FULL NAME</label>
                  <input
                    {...register('fullName', {
                      required: 'Full name is required',
                      pattern: {
                        value: /^[a-zA-Z\s'-]+$/,
                        message: 'Please enter a valid full name',
                      },
                    })}
                    type="text"
                    placeholder="Enter your name*"
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.fullName ? 'border-red-700' : 'border-[#BABCD4]'
                    } focus:border-[#008A3F] focus:outline-none`}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-[12px]">{errors.fullName.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">EMAIL</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    type="email"
                    placeholder="Enter your email*"
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.email ? 'border-red-700' : 'border-[#BABCD4]'
                    } focus:border-[#008A3F] focus:outline-none`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[12px]">{errors.email.message}</span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="hidden lg:block font-bold">PASSWORD</label>
                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.password ? 'border-red-700' : 'border-[#BABCD4]'
                    } focus:border-[#008A3F] focus:outline-none`}
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-3 lg:top-[38px] cursor-pointer text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {errors.password && (
                    <span className="text-red-500 text-[12px]">{errors.password.message}</span>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="hidden lg:block font-bold">CONFIRM PASSWORD</label>
                  <input
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => value === password || 'Passwords do not match',
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.confirmPassword ? 'border-red-700' : 'border-[#BABCD4]'
                    } focus:border-[#008A3F] focus:outline-none`}
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-3 lg:top-[38px] cursor-pointer text-gray-600"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-[12px]">{errors.confirmPassword.message}</span>
                  )}
                </div>

                {/* Terms checkbox */}
                <div className="flex items-center justify-center md:justify-start gap-2 md:px-4">
                  <input
                    type="checkbox"
                    {...register('terms', { required: 'You must agree to the terms' })}
                    className={`accent-[#008A3F] bg-white w-4 h-4 rounded-sm border ${
                      errors.terms ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#008A3F] focus:outline-none`}
                  />
                  <div className="lg:tracking-tight xl:tracking-normal">
                    I agree to the <span className="text-[#008A3F]">terms of services</span> and <span className="text-[#008A3F]">privacy policies</span>
                  </div>
                </div>
                {errors.terms && (
                  <span className="text-red-500 text-[12px]">{errors.terms.message}</span>
                )}
              </div>

              {/* Messages */}
              {serverError && <p className="text-red-600 mt-4">{serverError}</p>}
              {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}

              {/* Buttons */}
              <div className="font-medium text-sm flex flex-col gap-4 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`rounded-md text-white w-full py-2 transition-all ${
                    loading ? 'bg-gray-400' : 'bg-[#008A3F]'
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
                className={`w-full flex gap-2 items-center justify-center border border-[#BABCD4] rounded-md py-2 transition-all ${
                  loading ? "bg-gray-200 cursor-not-allowed" : "hover:opacity-90"
                }`}
              >
                <FcGoogle size={16} />
                {loading ? "Please wait..." : "Continue with Google"}
              </button>

                <Link to="/Login" className="text-center">
                  Already have an account? <span className="text-[#008A3F]">Sign In</span>
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
