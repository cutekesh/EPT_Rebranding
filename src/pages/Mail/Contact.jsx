import React from "react";
import ContactFormSection from "../../components/ContactUsComps/ContactFormSection";
import ContactInfoSection from "../../components/ContactUsComps/ContactInfoSection";
import BusinessHoursSection from "../../components/ContactUsComps/BusinessHoursSection";
import OfficeMapSection from "../../components/ContactUsComps/OfficeMapSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="w-11/12 mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 container">
        {/* Top-Left: CONTACT US Heading */}
        <div className="lg:col-span-1">
          {/* Removed fixed width (w-[440px]) to prevent mobile overflow */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#000101] mb-2 md:mb-0 font-IBM h-[48px] ">
            CONTACT US
          </h1>
        </div>

        {/* Top-Right: Introductory Text */}
        <div className="lg:col-span-1">
          {/* The md:w-[635px] will only apply on medium screens and up, so it's fine for mobile */}
          <p className="text-[20px] text-[#000101] mb-4 md:w-[635px] md:h-[48px] font-Inter font-normal">
            If you have any questions, please feel free to get in touch with us
            via phone, text, email, the form below, or even social media!
          </p>
        </div>

        {/* Bottom-Left: Get In Touch Form */}
        <div className="lg:col-span-1">
          <ContactFormSection />
        </div>

        {/* Bottom-Right: Contact Information & Business Hours */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <ContactInfoSection />
          <BusinessHoursSection />
        </div>

        {/* Map Section */}
        <div className="lg:col-span-2">
          <OfficeMapSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
