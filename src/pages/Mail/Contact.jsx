import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactFormSection from "../../components/ContactUsComps/ContactFormSection";
import ContactInfoSection from "../../components/ContactUsComps/ContactInfoSection";
import OfficeMapSection from "../../components/ContactUsComps/OfficeMapSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import emailIcon from "../../assets/contactFormEmailIcon.png";
import closeIcon from "../../assets/closeModalIcon.svg";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFormSuccess = () => {
    setShowModal(true);
  };

  const handleNavigateHome = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-white">
      <Navbar />

      <div className="w-11/12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8 md:py-20 py-10 transition-opacity duration-300">
        {/* Heading Section */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#013F1E] font-IBM uppercase">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#2B2C2C] max-w-3xl mx-auto lg:mx-0">
            Get in touch with us today! We’d love to hear from you — whether you have a question about our services or need assistance.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="order-2 lg:order-1">
          <ContactInfoSection />
        </div>

        {/* Contact Form Section */}
        <div className="order-1 lg:order-2">
          <ContactFormSection onSuccess={handleFormSuccess} />
        </div>

        {/* Mobile: Find Us Label */}
        <div className="block lg:hidden order-3 text-center">
          <h2 className="text-[#008A3F] text-xl font-bold font-Inter">
            Find Us
          </h2>
        </div>

        {/* Map Section */}
        <div className="lg:col-span-2 order-4">
          <OfficeMapSection />
        </div>
      </div>

      <Footer />

      {/* Success Modal */}
      {showModal && (
        <div
          id="modal-backdrop"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
        >
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10 md:p-14 w-full max-w-[480px] text-center relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in">
            {/* Close Button */}
            <img
              className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-[#DD0B15] p-1 rounded-full hover:cursor-pointer"
              onClick={handleCloseModal}
              src={closeIcon}
              alt="Close modal"
            />
            <div className="flex justify-center mb-4 sm:mb-6">
              <img src={emailIcon} alt="Success icon" />
            </div>
            <p className="text-[#000101] text-base sm:text-lg md:text-2xl font-Inter mb-6 sm:mb-10">
              Your message has been sent. Our support team will reply to your message within 24 hours.
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

export default Contact;
