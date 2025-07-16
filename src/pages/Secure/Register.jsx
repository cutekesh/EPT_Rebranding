import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Assuming you're using react-hook-form
import { FiEye, FiEyeOff } from "react-icons/fi"; // For password visibility icons
import { FcGoogle } from "react-icons/fc"; // For Google icon

// Your assets
import SignupImg from "../../assets/image 107.png"; // Adjust path as needed
import Logo from "../../assets/image 2.svg"; // Adjust path as needed

// Your AuthContext
import { useAuth } from "../../context/AuthContext"; // Correct path to your AuthContext

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); // For loading state of buttons
  const [serverError, setServerError] = useState(""); // For backend error messages
  const [successMessage, setSuccessMessage] = useState(""); // For backend success messages

  const { signup, googleLogin } = useAuth(); // Destructure signup and googleLogin from your context
  const navigate = useNavigate();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit: handleFormSubmit, // Rename handleSubmit to avoid conflict with our own
    watch, // To watch password field for confirm password validation
    formState: { errors },
    reset, // To reset form after submission
  } = useForm({
    mode: "onBlur", // Validate on blur
  });

  const password = watch("password"); // Watch the password field

  // This handleChange is generally not needed with react-hook-form's register,
  // but we'll keep it if you have other side effects on change.
  // For standard form inputs with RHF, you usually just rely on {...register()}
  const handleChange = (e) => {
    // You can add any specific logic here if needed,
    // otherwise, RHF handles the input values automatically.
    setServerError(""); // Clear server errors on input change
    setSuccessMessage(""); // Clear success messages on input change
  };

  // --- Handle Standard Signup ---
  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    // Destructure data from react-hook-form
    const { name, email, password } = data;

    try {
      // Call your signup function from AuthContext
      const success = await signup(name, email, password); // Pass 'name' as fullName

      if (success) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        reset(); // Clear form fields
        setTimeout(() => {
          navigate("/login"); // Redirect on success
        }, 2000); // Give user time to read success message
      } else {
        // This 'else' might be hit if signup explicitly returns false,
        // but typically AuthContext throws errors for failures.
        setServerError("Signup failed. Please try again.");
      }
    } catch (err) {
      // Catch errors thrown by AuthContext (e.g., from backend validation)
      console.error("Signup error:", err);
      setServerError(err || "An unexpected error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  // --- Handle Google Login ---
  const handleGoogleLogin = async () => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      const success = await googleLogin(); // Call googleLogin from AuthContext
      if (success) {
        setSuccessMessage("Google login successful! Redirecting...");
        setTimeout(() => {
          navigate("/"); // Redirect on success
        }, 1500);
      } else {
        // This path is hit if the user closes the popup or if googleLogin returns false
        setServerError(
          "Google login was cancelled or failed. Please try again."
        );
      }
    } catch (err) {
      console.error("Google login error:", err);
      setServerError(err || "Google login failed due to an unexpected error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src={SignupImg}
            alt="Signup banner"
          />
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

            {/* --- Use react-hook-form's handleSubmit --- */}
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
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.fullName ? "border-red-700" : "border-[#BABCD4]"
                    } focus:border-[#008A3F] focus:outline-none`}
                    onChange={handleChange} // Keep if you have side effects, otherwise can remove
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-[12px]">
                      {errors.fullName.message}
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
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.email ? "border-red-700" : "border-[#BABCD4]"
                    } focus:border-[#008A3F] focus:outline-none`}
                    onChange={handleChange} // Keep if you have side effects, otherwise can remove
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
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.password ? "border-red-700" : "border-[#BABCD4]"
                    } focus:border-[#008A3F] focus:outline-none`}
                    onChange={handleChange} // Keep if you have side effects, otherwise can remove
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
                        value === password || "Passwords do not match", // Direct comparison with watched 'password'
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={`w-full rounded-md p-2 pr-10 border ${
                      errors.confirmPassword
                        ? "border-red-700"
                        : "border-[#BABCD4]"
                    } focus:border-[#008A3F] focus:outline-none`}
                    onChange={handleChange} // Keep if you have side effects, otherwise can remove
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
                    onChange={handleChange} // Keep if you have side effects, otherwise can remove
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
                  className={`rounded-md text-white w-full py-2 transition-all ${
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
                  type="button" // Important: set type="button" to prevent form submission
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className={`w-full flex gap-2 items-center justify-center border border-[#BABCD4] rounded-md py-2 transition-all ${
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
