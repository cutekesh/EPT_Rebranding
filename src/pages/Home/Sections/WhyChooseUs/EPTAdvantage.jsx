import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import plan from "../../../../assets/plan and design.jpeg";
import build from "../../../../assets/build and deliver.jpeg";
import equip from "../../../../assets/equip and support.jpeg";

const EPTAdvantage = () => {
  return (
    <div className="py-[80px] px-[97.95px] flex flex-col justify-center items-center lg:gap-[29.38px] sm:gap-[15.97px]">
      <div className="flex flex-col items-center">
        <p className="text-black lg:text-[27.43px] font-[400] font-Inter sm:text-[12.75px]">
          WHY CHOOSE US?
        </p>
        <h2 className="lg:text-[#008A3F] lg:text-[54.85px] font-[700] font-IBM-Plex-Sans-Hebrew sm:text-[25.49px] sm:text[#013F1E]">
          The EPT Advantage
        </h2>
      </div>

      <div className="flex lg:gap-[14.69px] sm:flex-col sm:gap-[12.52px] lg:flex-row">
        <div
          className="bg-cover bg-center rounded-[7.84px] text-start w-[391.79px] h-[477.98px] pt-[289.92px] ps-[19.59px] flex flex-col gap-[19.59px]"
          style={{
            backgroundImage: `url(${plan})`,
          }}
        >
          <h3 className="text-[#FEFFFF] text-[27.43px] font-[700] font-Inter">
            We Plan & Design
          </h3>
          <p className="text-[#FEFFFF] text-[15.67px] font-[400] font-Inter">
            Smart blueprints for oil, gas, and power <br />
            systems.
          </p>
          <Link className="bg-[#F6C200] flex items-center gap-[1.96px] rounded-[7.84px] text-black text-[20px] font-inter font-[600] py-[11.75px] px-[7.84px] h-[47.51px] w-[151.14px]">
            Learn More <FaArrowRightLong />
          </Link>
        </div>

        <div
          className="bg-[url-(/assets/)] text-start w-[391.79px] h-[477.98px] pt-[289.92px] ps-[19.59px] flex flex-col gap-[19.59px] bg-cover bg-center rounded-[7.84px]"
          style={{
            backgroundImage: `url(${build})`,
          }}
        >
          <h3 className="text-[27.43px] font-[700] font-Inter">
            We Build & Deliver
          </h3>
          <p className="text-[15.67px] font-[400] font-Inter">
            From foundation to finish, we build safely <br />
            and fast
          </p>
          <Link className="bg-[#F6C200] flex items-center gap-[1.96px] rounded-[7.84px] text-black text-[20px] font-inter font-[600] py-[11.75px] px-[7.84px] h-[47.51px] w-[151.14px]">
            Learn More <FaArrowRightLong />
          </Link>
        </div>

        <div
          className="bg-[url-(/assets/)] text-start w-[391.79px] h-[477.98px] pt-[289.92px] ps-[19.59px] flex flex-col gap-[19.59px] bg-cover bg-center rounded-[7.84px]"
          style={{
            backgroundImage: `url(${equip})`,
          }}
        >
          <h3 className="text-[27.43px] font-[700] font-Inter">
            We Equip & Support
          </h3>
          <p className="text-[15.67px] font-[400] font-Inter">
            Rent or buy equipment, get project support <br />
            no delays
          </p>
          <Link className="bg-[#F6C200] flex items-center gap-[1.96px] rounded-[7.84px] text-black text-[20px] font-inter font-[600] py-[11.75px] px-[7.84px] h-[47.51px] w-[151.14px]">
            Learn More
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EPTAdvantage;
