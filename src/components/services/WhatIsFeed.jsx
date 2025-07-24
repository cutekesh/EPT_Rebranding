import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import modalImageDesktop from "../../assets/ModalImageDesktop.png";
import closeIcon from "../../assets/closeModalIcon.svg";

const WhatIsFeed = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFormSuccess = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleNavigateHome = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      handleCloseModal();
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    handleFormSuccess();
    reset();
  };

  return (
    <div className="w-full mt-4 lg:mt-10 mb-10 transition-opacity duration-300">
      <div className="container mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 lg:space-y-8 flex flex-col justify-center">
          <div className="font-bold text-[#013F1E]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">What is FEED?</h2>
            <h4 className="text-xl sm:text-2xl lg:text-3xl">
              (Front End Engineering Design)
            </h4>
          </div>
          <div className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] text-[#000101] font-medium leading-7 space-y-4">
            <p className="leading-[120%]">
              Front-End Engineering & Design (FEED) is the critical step between
              your idea and construction.
            </p>
            <p className="leading-[120%]">
              EPT uses its multi-discipline engineering expertise to turn early
              studies into a detailed project plan that’s ready for execution.
            </p>
          </div>
        </div>

        <div className="bg-[#EEF4F0A3] rounded-md p-5 sm:p-6 lg:p-8 space-y-6">
          <div>
            <h4 className="text-[#008A3F] text-xl sm:text-2xl lg:text-3xl font-semibold">
              Get Started Now
            </h4>
            <h5 className="text-sm sm:text-base lg:text-lg text-[#000000] font-normal">
              Fill in the details to book a consultation with us now
            </h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-base text-[#2B2C2C] mb-1">
                Your Name
              </label>
              <input
                id="name"
                placeholder="Enter your name*"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 rounded bg-white outline-none text-[#000101]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-base text-[#2B2C2C] mb-1">
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
                className="w-full p-2 rounded bg-white outline-none text-[#000101]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-base text-[#2B2C2C] mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message*"
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 rounded bg-white outline-none h-24 sm:h-28 lg:h-32 resize-none text-[#000101]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#008A3F] text-white px-4 py-3 rounded-md font-bold text-base sm:text-lg hover:bg-[#006f2e] transition"
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
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 md:p-4 p-10"
        >
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-14 w-full max-w-sm sm:max-w-md md:max-w-lg text-center relative">
            {/* Close Button */}
            <img
              className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-[#DD0B15] p-1 rounded-full hover:cursor-pointer"
              onClick={handleCloseModal}
              src={closeIcon}
              alt="Close modal"
            />
            <div className="flex justify-center mb-4 sm:mb-6">
              <img className="" src={modalImageDesktop} alt="Success icon" />
            </div>
            <p className="text-[#000101] text-lg sm:text-xl md:text-2xl my-4 sm:my-6 font-Inter">
              Your consultation has been successfully booked and an email has been sent!
            </p>
            <button
              onClick={handleNavigateHome}
              className="w-full bg-[#008A3F] text-white py-3 rounded-md hover:bg-[#006A3F] transition font-bold text-base sm:text-lg"
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
