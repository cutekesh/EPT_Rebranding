import React from "react";
import phoneIcon from "../../assets/phoneIcon2.svg";
import mailIcon from "../../assets/mailIcon.svg";
import locationIcon from "../../assets/locationIcon2.svg";
import facebookIcon from "../../assets/facebookicon.svg";
import instagramIcon from "../../assets/InstagramIcon.svg";
import xIcon from "../../assets/xIcon.svg";

const ContactInfoSection = () => {
  return (
    <div className=" p-6 md:p-8 rounded-lg bg-[#E6F3EC] ">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#000101] mb-4 font-Inter">
          CONTACT INFORMATION
        </h2>
        <div className="border-b-[1px] border-[#000000] w-full mt-8 mb-10"></div>
      </div>
      <div className="space-y-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src={phoneIcon}
              alt="Phone"
              className="w-12 h-12 bg-[#008A3F] p-3 rounded-full animate__animated animate__heartBeat animate__slow"
            />

            <div>
              <p className="block font-Inter text-[#000101] font-bold">PHONE</p>
              <p className="text-[20px] font-light text-[#000101] font-Inter">
                (+234) 805 - 9755 - 032
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={mailIcon}
              alt="Mail"
              className="w-12 h-12 bg-[#008A3F] p-3 rounded-full animate__animated animate__heartBeat animate__slow"
            />

            <div>
              <p className="block font-Inter text-[#000101] font-bold">MAIL</p>
              <p className="text-[20px] font-light text-[#000101] font-Inter">
                Sales@ept.ng
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-start gap-4">
            <img
              src={locationIcon}
              alt="Address"
              className="w-12 h-12 bg-[#008A3F] p-3 rounded-full animate__animated animate__heartBeat animate__slow"
            />

            <div>
              <p className="block font-Inter text-[#000101] font-bold">
                ADDRESS
              </p>
              <p className="text-[20px] font-light text-[#000101] font-Inter">
                26 Furo Ezimora Street, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="hover:cursor-pointer"
              src={facebookIcon}
              alt="facebookIcon"
            />
            <img
              className="hover:cursor-pointer"
              src={instagramIcon}
              alt="instagramIcon"
            />
            <img className="hover:cursor-pointer" src={xIcon} alt="xIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
