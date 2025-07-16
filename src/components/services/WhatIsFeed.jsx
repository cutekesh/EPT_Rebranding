import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import consultationIcon from "../../assets/consultationIcon.png";
import closeIcon from "../../assets/closeModalIcon.svg";

const WhatIsFeed = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to open the modal
  const handleFormSuccess = () => {
    setShowModal(true);
  };

  // Function to close the modal AND navigate to home page
  const handleNavigateHome = () => {
    setShowModal(false);
    navigate("/"); // Navigate to the home page
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      handleCloseModal();
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Simulate successful submission and open the modal
    // In a real application, you'd perform an API call here.
    // If the API call is successful, then call handleFormSuccess().
    handleFormSuccess(); // Call this to show the modal on successful submission
    reset(); // Reset form fields after submission
  };

  return (
    // Apply opacity to the main content div based on modal state
    <div
      className={`w-full md:my-10 mt-5 mb-10 lg:my-30 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-100"
      }`}
    >
      <div className="w-11/12 mx-auto container grid grid-cols-1 lg:grid-cols-2 justify-center lg:mb-16 gap-2">
        <div className="space-y-4 lg:space-y-8 lg:flex flex-col justify-center">
          <div className="font-bold text-[#013F1E]">
            <h2 className="text-[31px] lg:text-5xl">What is FEED?</h2>
            <h4 className="text-[22px] lg:text-3xl">
              (Front End Engineering Design)
            </h4>
          </div>
          <div className="mr-6 text-[18px] lg:text-[24px] xl:text-[28px] text-[#000101] mt-4 font-medium space-y-6 lg:mr-16 xl:mr-0 lg:w-[560px] leading-7 ">
            <p className="leading-[120%]">
              Front-End Engineering & Design (FEED) is the critical step between
              your idea and construction.
            </p>
            <p className="lg:pr-6 leading-[120%]">
              EPT uses its multi-discipline engineering expertise to turn early
              studies into a detailed project plan that’s ready for execution.
            </p>
          </div>
        </div>

        <div className="bg-[#EEF4F0A3] p-4 rounded-md space-y-4 lg:p-6">
          <div>
            <h4 className="text-[#008A3F] text-[18px] md:text-[22px] lg:text-[26px] xl:text-[34px] font-semibold">
              Get Started Now
            </h4>
            <h5 className="font-normal text-[9px] md:text-[16px] lg:text-[18px] text-[#000000]">
              Fill in the details to book a consultation with us now
            </h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]"
              >
                Your Name
              </label>
              <input
                id="name"
                placeholder="Enter your name*"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 rounded mt-2 bg-white xl:py-3 outline-none text-[#000101]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]"
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 rounded mt-2 bg-white xl:py-3 outline-none text-[#000101]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message*"
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 rounded mt-2 bg-white py-3 lg:py-4 h-22 lg:h-32 resize-none outline-none text-[#000101]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#008A3F] lg:text-[26px] font-bold w-full text-white px-4 py-3 rounded-md mt-4 hover:bg-[#006f2e] transition duration-300"
            >
              Book a Consultation
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          id="modal-backdrop"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
        >
          <div className="bg-white rounded-lg shadow-xl p-14 md:w-[480px] md:h-[460px] w-[340px] h-[360px] text-center relative">
            {/* Close Button */}
            <img
              className="absolute md:top-8 md:right-8 top-4 right-4 text-2xl hover:cursor-pointer border-[1px] border-[#DD0B15] p-1 rounded-full"
              onClick={handleCloseModal}
              src={closeIcon}
              alt="Close modal"
            />
            <div className="flex justify-center md:mb-6 mb-4">
              <img src={consultationIcon} alt="emailIcon" />
            </div>
            <p className="text-[#000101] md:my-10 font-Inter md:text-2xl my-6">
              Your message consultation has been successfully booked and an
              email has been sent!
            </p>
            <button
              type="button"
              onClick={handleNavigateHome}
              className="w-full bg-[#008A3F] text-white py-3 rounded-md hover:bg-[#006A3F] transition-colors font-bold md:text-lg hover:cursor-pointer"
            >
              Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatIsFeed;
