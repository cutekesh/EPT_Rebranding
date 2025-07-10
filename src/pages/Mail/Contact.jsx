import React from "react";
import ContactFormSection from "../../components/ContactUsComps/ContactFormSection";
import ContactInfoSection from "../../components/ContactUsComps/ContactInfoSection";
import OfficeMapSection from "../../components/ContactUsComps/OfficeMapSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="w-11/12 mx-auto md:py-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 container items-stretch">
        <div className="lg:col-span-1 order-first md:order-none">
          <h1 className="text-4xl md:text-6xl font-bold text-[#013F1E] mb-0 md:mb-4 font-IBM flex justify-center md:justify-start uppercase md:normal-case">
            Contact Us
          </h1>
        </div>

        <div className="hidden md:block lg:col-span-1">
          <p className=" md:mb-4 mb-0 md:w-[635px] md:h-[48px] h-0"></p>
        </div>

        <div className="h-full order-2 md:order-none">
          <ContactInfoSection />
        </div>

        <div className="lg:col-span-1 order-1 md:order-none">
          <ContactFormSection />
        </div>
        <div className="block md:hidden order-3 md:order-none">
          <h1 className="text-[#008A3F] text-2xl font-Inter font-bold flex items-center justify-center">
            Find Us
          </h1>
        </div>
        {/* Map Section */}
        <div className="lg:col-span-2 order-last md:order-none mb-10">
          <OfficeMapSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
