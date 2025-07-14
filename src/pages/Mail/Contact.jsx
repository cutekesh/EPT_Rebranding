import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactFormSection from "../../components/ContactUsComps/ContactFormSection";
import ContactInfoSection from "../../components/ContactUsComps/ContactInfoSection";
import OfficeMapSection from "../../components/ContactUsComps/OfficeMapSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import emailIcon from "../../assets/contactFormEmailIcon.png"; // Import for the modal
import closeIcon from "../../assets/closeModalIcon.svg"; // Import for the modal

const Contact = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Initialize useNavigate


  // Function to be passed to ContactFormSection to open the modal
  const handleFormSuccess = () => {
    setShowModal(true);
  };

  // Function to close the modal AND navigate to home page
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="bg-white">
      <Navbar />
      {/* Main content wrapper for the Contact page. Opacity is applied here. */}
      <div className={`w-11/12 mx-auto md:py-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 container items-stretch transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-100'}`}>
        <div className="lg:col-span-1 order-first md:order-first lg:order-none">
          <h1 className="text-4xl md:text-6xl font-bold text-[#013F1E] mb-0 md:mb-4 font-IBM flex justify-center lg:justify-start uppercase lg:normal-case">
            Contact Us
          </h1>
        </div>

        <div className="hidden lg:block lg:col-span-1">
          <p className=" md:mb-4 mb-0 md:w-[635px] md:h-[48px] h-0"></p>
        </div>

        <div className="h-full order-2 md:order-2 lg:order-none">
          <ContactInfoSection />
        </div>

        {/* Pass the handleFormSuccess function to ContactFormSection */}
        <div className="lg:col-span-1 order-1 md:order-none">
          <ContactFormSection onSuccess={handleFormSuccess} />
        </div>
        <div className="block md:hidden md:order-3 order-3 lg:order-none">
          <h1 className="text-[#008A3F] text-2xl font-Inter font-bold flex items-center justify-center">
            Find Us
          </h1>
        </div>
        {/* Map Section */}
        <div className="lg:col-span-2 order-last md:order-last lg:order-none mb-10">
          <OfficeMapSection />
        </div>
      </div>
      <Footer />

      {/* Success Modal - This is rendered outside the opacity-affected div */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80  flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-14 md:w-[480px] md:h-[460px] w-[340px] h-[360px] text-center relative ">
            {/* Close Button */}
            <img
              className="absolute md:top-8 md:right-8 top-4 right-4 text-2xl hover:cursor-pointer border-[1px] border-[#DD0B15] p-1 rounded-full"
              onClick={handleCloseModal}
              src={closeIcon}
              alt="Close modal"
            />
            <div className="flex justify-center md:mb-6 mb-4">
              <img src={emailIcon} alt="emailIcon" />
            </div>
            {/* <h2 className="md:text-3xl font-bold text-gray-800 mb-4">
              Thank you!
            </h2> */}
            <p className="text-[#000101] md:my-10 font-Inter md:text-2xl my-6">
              Your message has been sent. Our support team will reply to your
              message within 24 hours.
            </p>
            <button
              type="button"
              onClick={handleCloseModal}
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

export default Contact;
