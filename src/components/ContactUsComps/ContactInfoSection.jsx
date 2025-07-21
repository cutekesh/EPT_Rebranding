import React from "react";
import phoneIcon from "../../assets/phoneIcon2.svg";
import mailIcon from "../../assets/mailIcon.svg";
import locationIcon from "../../assets/locationIcon2.svg";

const ContactInfoSection = () => {
  return (
    <div className="flex-1 h-full  bg-white rounded-md">
      <div className="hidden lg:block">
        <h2 className="text-xl md:text-[28px] font-bold text-[#000101]">
          Get In Touch With Us
        </h2>
        <p className="text-[20px] text-[#000101] font-Inter font-normal my-4">
          If you have any questions, please feel free to get in touch with us
          via phone, text, email, the form below, or even social media!
        </p>
      </div>
      <div className="border-b-[1px] border-[#000000] w-full my-8 mb-"></div>

      <div className="space-y-10">
        {/* Phone */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img
            src={phoneIcon}
            alt="Phone"
            className="md:w-12 md:h-12 w-8 h-8 bg-[#008A3F] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block font-Inter text-[#000101] font-bold">PHONE</p>
            <p className="md:text-[20px] font-light text-[#000101] font-Inter">
              (+234) 805 - 9755 - 032
            </p>
          </div>
        </div>
        {/* Mail */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img
            src={mailIcon}
            alt="Mail"
            className="md:w-12 md:h-12 w-8 h-8 bg-[#008A3F] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block font-Inter text-[#000101] font-bold">MAIL</p>
            <p className="md:text-[20px] font-light text-[#000101] font-Inter">
              Sales@ept.ng
            </p>
          </div>
        </div>
        {/* Address */}
        <div className="flex items-start gap-4 w-full md:w-auto">
          <img
            src={locationIcon}
            alt="Address"
            className="md:w-12 md:h-12 w-8 h-8 bg-[#008A3F] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block font-Inter text-[#000101] font-bold">ADDRESS</p>
            <p className="md:text-[20px] font-light text-[#000101] font-Inter">
              26 Furo Ezimora Street, Lekki <br /> Phase 1, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
