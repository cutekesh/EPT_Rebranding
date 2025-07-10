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

import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-screen xl:h-full lg:grid grid-cols-2">
        <div className="hidden lg:block"><img className="w-full h-full" src="/src/assets/signup img.png" alt="signup-image" /></div>
        <div className="flex flex-col justify-center w-full h-full xl:h-auto">
          <div className="hidden lg:block w-24 mx-auto lg:mt-8">
            <img className="" src="/src/assets/eptLogo.svg" alt="" />
          </div>
          <div className="lg:mt-10 w-11/12 lg:w-9/12 mx-auto mb-8 lg:mr-20 font-Inter text-[#000101] text-xs md:text-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Register Now</h3>
              <p>Fill in your details below to become a member</p>
            </div>
            <form>
              <div className="flex flex-col gap-4">
                <div className="mt-4 flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">FULL NAME</label>
                  <input className="w-full bg-[#E6F3EC] rounded-md p-2" placeholder="Enter your name*"/>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">EMAIL</label>
                  <input className="w-full bg-[#E6F3EC] rounded-md p-2" placeholder="Enter your email*"/>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">PASSWORD</label>
                  <input className="w-full bg-[#E6F3EC] rounded-md p-2" placeholder="Password"/>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="hidden lg:block font-bold">CONFIRM PASSWORD</label>
                  <input className="w-full bg-[#E6F3EC] rounded-md p-2" placeholder="Confirm your password"/>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 md:px-4">
                  <input type="checkbox" className="accent-[#008A3F]"/>
                  <div>I agree to the <span className="text-[#008A3F]">terms of services</span> and <span className="text-[#008A3F]">privacy policies</span></div>
                </div>
              </div>

              <div className="font-Inter font-medium text-sm flex flex-col gap-4 mt-6">
                <button className="bg-[#008A3F] rounded-md text-[#FEFFFF] w-full text-center py-2">Sign Up</button>
                <div className="w-full flex justify-center items-center gap-2 px-2">
                  <div className="w-[50%] border border-[#BABCD4]"></div>or
                  <div className="w-[50%] border border-[#BABCD4]"></div>
                </div>

              <button type="button" className="w-full flex gap-2 items-center justify-center border border-[#BABCD4] rounded-md py-2 cursor-not-allowed hover:opacity-90">
                <FcGoogle size={16} />
              Continue with Google
              </button>
              <div className="text-center">Already have an account? <span className="text-[#008A3F]">Sign In</span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
