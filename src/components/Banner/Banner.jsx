import React from "react";
import procon from "../../assets/banner projects.png";
import certcon from "../../assets/certified engineers.png";
import supercon from "../../assets/super maintenance.png";
import failcon from "../../assets/banner project failure.png";

const Banner = () => {
  return (
    <div className="bg-[#008A3F] w-full">
      <div className="md:max-w-11/12 flex py-[3.91px] md:py-[80px] justify-center lg:max-w-full items-center md:gap-[10px] gap-[13px]">
        <div className="flex items-center gap-[3px] md:gap-[10.77px] md:px-[73.46px] px-[4px]">
          <img src={procon} alt="" className="w-[20.51px] md:w-full" />
          <h3 className="md:text-[27.43px] text-[11px] font-[500] font-Inter text-[#FEFFFF] text-start">
            200+ <br />
            Projects
          </h3>
        </div>

        <div className="flex items-center gap-[3px] md:gap-[10.77px] border-l-[0.98px] md:px-[73.46px] px-[4px]">
          <img src={certcon} alt="" className="w-[20.51px] md:w-full" />
          <h3 className="md:text-[27.43px] text-[11px] font-[500] font-Inter text-[#FEFFFF] text-start">
            Certified <br />
            Engineers
          </h3>
        </div>

        <div className="flex items-center gap-[3px] md:gap-[10.77px] border-l-[0.98px] md:px-[73.46px] px-[4px]">
          <img src={supercon} alt="" className="w-[20.51px] md:w-full" />
          <h3 className="md:text-[27.43px] text-[11px] font-[500] font-Inter text-[#FEFFFF] text-start">
            24/7 Super <br />
            Maintenance
          </h3>
        </div>

        <div className="flex items-center gap-[3px] md:gap-[10.77px] border-l-[0.98px] md:ps-[73.46px] ps-[4px]">
          <img src={failcon} alt="" className="w-[20.51px] md:w-[50px]" />
          <h3 className="md:text-[27.43px] text-[10px] font-[500] font-Inter text-[#FEFFFF] text-start">
            Zero Project <br />
            Failure
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
