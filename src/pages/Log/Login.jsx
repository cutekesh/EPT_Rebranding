import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import Workers from "../../assets/image 107.png";
import Logo from "../../assets/image 2.svg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Google from "../../assets/flat-color-icons_google.svg";



// Define the Login component as a functional component.
const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 
   const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  // Define state for form data with initial values for email and password.
  const [formData, setFormData] = useState({ email: "", password: "" });
  // Define state for error messages.
  const [error, setError] = useState("");
  // Extract the login function from the Auth context.
  // const { login } = useAuth(); // Get the login function from AuthContext
  // Initialize the navigate function to redirect users after login.
  const navigate = useNavigate();

  // Handle changes in the input fields by updating the formData state.
  const handleChange = (event) => {
    // Update the formData state with the new value from the input field.
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // Clear any previous error messages when the user starts typing.
    setError("");
  };

  // Handle the form submission when the user tries to log in.
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior (page reload).
    event.preventDefault();
  
  const { email, password } = formData;

  if (!email) {
    setError("Email are required");
    return;
  }
  if (!password) {
    setError("password are required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }
    try {
      // Call the login function from the Auth context with the form data.
      await login(formData); // Call the context's login function
      // Clear any previous error messages.
      setError("");
      // Redirect the user to the home page upon successful login.
      navigate("/"); // Redirect to the home page upon successful login
    } catch (err) {
      // If an error occurs, set the error state with the error message from the server or a default message.
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-2  lg:pb-0">
      <div className="">
        <img src={Workers} alt="Workers" className="w-full  object-cover rounded-md" />
      </div>
<div className="flex lg:mt-20 justify-center px-4 sm:px-8 md:px-16 lg:px-16">
 
        <div className=" w-full max-w-md sm:max-w-lg  ">
          <span>
        <img src={Logo} alt="Logo" className="w-24 mb-4 mx-auto" />
 </span>
            <div className="mb-8">
                        <h1 className="text-[22px] sm:text-[26px] font-semibold">
                            Welcome Back
                        </h1>
                        <p className="text-[#181A20D1] text-[14px] sm:text-[16px] md:text-[18px]">
                            sign in to your account
                        </p>
                    </div>
     
        <form onSubmit={handleSubmit} className="space-y-4">
             <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[15px] sm:text-[16px] font-medium">
                                Email
                            </label>
                            <input
                             
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className=" text-[#2632388F] bg-[#E6F3EC] p-2 lg:px-2 lg:py-4 rounded-md outline-none"
                            />
                            
                        </div>
             <div className="flex flex-col gap-2 relative">
                            <label htmlFor="password" className="text-[15px] sm:text-[16px] font-medium">
                                Password
                            </label>
                            <input
                                
                                id="password"
                                 type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className=" text-[#2632388F] bg-[#E6F3EC] p-2 lg:px-2 lg:py-4 rounded-md outline-none"
                            />
                              <button
                type="button"
                className="absolute right-4 translate-y-3 w-[20px] rounded-full bottom-8"
                onClick={handleTogglePassword}
              >
                {showPassword ? <MdOutlineRemoveRedEye/>  : <FaRegEyeSlash />}
              </button>
                            
                        </div>
                         <div className="flex items-center justify-center gap-4 border border-black py-3 rounded-md">
                            <img alt="google icon" src={Google} />
                            <p>Continue with Google</p>
                        </div>
          <button
            type="submit"
            className="w-full bg-[#008A3F] text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign up
          </button>
        </form>
      </div>
</div>
   
    </div>
  );
};

export default Login;
