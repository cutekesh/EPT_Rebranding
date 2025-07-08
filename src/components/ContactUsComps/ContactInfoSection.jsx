import React from "react";
import phoneIcon from "../../assets/phoneIcon2.svg";
import mailIcon from "../../assets/mailIcon.svg";
import locationIcon from "../../assets/locationIcon2.svg";
import facebookIcon from "../../assets/facebookicon.svg";
import instagramIcon from "../../assets/InstagramIcon.svg";
import xIcon from "../../assets/xIcon.svg";

const ContactInfoSection = () => {
  return (
    <div className="p-6 md:p-8 rounded-lg bg-[#E6F3EC]">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#000101] mb-4 font-Inter">
          CONTACT INFORMATION
        </h2>
        <div className="border-b-[1px] border-[#000000] w-full mt-8 mb-10"></div>
      </div>
      <div className="space-y-10">
        {/* Adjusted this div to stack vertically on mobile, then row on md+ */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0"> {/* Added flex-col, md:flex-row, and gap */}
          <div className="flex items-center gap-4 w-full md:w-auto"> {/* Added w-full for mobile stacking */}
            <img
              src={phoneIcon}
              alt="Phone"
              className="md:w-12 md:h-12 w-8 h-8 bg-[#008A3F] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
            />
            <div>
              <p className="block font-Inter text-[#000101] font-bold">PHONE</p>
              <p className="md:text-[20px] font-light text-[#000101] font-Inter">
                (+234) 805 - 9755 - 032
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto"> {/* Added w-full for mobile stacking */}
            <img
              src={mailIcon}
              alt="Mail"
              className="md:w-12 md:h-12 w-8 h-8 bg-[#008A3F] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
            />
            <div>
              <p className="block font-Inter text-[#000101] font-bold">MAIL</p>
              <p className="md:text-[20px] font-light text-[#000101] font-Inter">
                Sales@ept.ng
              </p>
            </div>
          </div>
        </div>

        {/* Adjusted this div to stack vertically on mobile, then row on md+ */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0"> {/* Added flex-col, md:flex-row, and gap */}
          <div className="flex items-start gap-4 w-full md:w-auto"> {/* Added w-full for mobile stacking */}
            <img
              src={locationIcon}
              alt="Address"
              className="md:w-12 md:h-12 w-8 h-8 bg-[#008A3F] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
            />
            <div>
              <p className="block font-Inter text-[#000101] font-bold">
                ADDRESS
              </p>
              <p className="md:text-[20px] font-light text-[#000101] font-Inter">
                26 Furo Ezimora Street, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </div>
          {/* Social icons container: ensure it also behaves responsively */}
          {/* On mobile, it will be a column (due to parent flex-col), then a row on md+ */}
          <div className="flex md:flex-row items-center gap-4 md:space-y-0 mt-4 md:mt-0 justify-center md:justify-start w-full md:w-auto"> {/* Added justify-center for mobile, w-full */}
            <img
              className="hover:cursor-pointer w-6 h-6" // Added explicit w/h for consistency
              src={facebookIcon}
              alt="facebookIcon"
            />
            <img
              className="hover:cursor-pointer w-6 h-6" // Added explicit w/h for consistency
              src={instagramIcon}
              alt="instagramIcon"
            />
            <img className="hover:cursor-pointer w-6 h-6" src={xIcon} alt="xIcon" /> {/* Added explicit w/h for consistency */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
