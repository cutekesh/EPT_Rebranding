import React from "react";
import procon from "../../assets/banner projects.png";
import certcon from "../../assets/certified engineers.png";
import supercon from "../../assets/super maintenance.png";
import failcon from "../../assets/banner project failure.png";

const Banner = () => {
  return (
    <div className="bg-[#008A3F] w-full">
      <div className="w-11/12 mx-auto container ">
        <div className="flex py-[3.91px] md:py-[80px] justify-evenly items-center mx-auto">
          <div className="flex items-center gap-[3px] md:gap-[10.77px] md:w-auto px-4">
            <img src={procon} alt="" className="md:w-[39px] w-[25px]" />
            <h3 className="lg:text-[27.43px] text-[11px] md:text-[20px] font-[500] font-Inter text-[#FEFFFF] text-start ">
              200+ 
              Projects
            </h3>
          </div>

          <div className="flex items-center gap-[3px] md:gap-[10.77px] 2xl:border-l-[1px] lg:border-white px-4 md:pl-10 md:w-auto ">
            <img src={certcon} alt="" className="md:w-[39px] w-[25px]" />
            <h3 className="lg:text-[27.43px] text-[11px] md:text-[20px] font-[500] font-Inter text-[#FEFFFF] text-start">
              Certified 
              Engineers
            </h3>
          </div>

          <div className="flex items-center gap-[3px] md:gap-[10.77px] 2xl:border-l-[1px] lg:border-white px-4 md:pl-10 md:w-auto">
            <img src={supercon} alt="" className="md:w-[39px] w-[25px]"/>
            <h3 className="lg:text-[27.43px] text-[11px] md:text-[20px] font-[500] font-Inter text-[#FEFFFF] text-start">
              24/7 Super 
              Maintenance
            </h3>
          </div>

          <div className="flex items-center gap-[3px] md:gap-[10.77px]  2xl:border-l-[1px] lg:border-white px-4 md:pl-10 md:w-auto">
            <img src={failcon} alt="" className="md:w-[39px] w-[25px]" />
            <h3 className="lg:text-[27.43px] text-[10px] md:text-[20px] font-[500] font-Inter text-[#FEFFFF] text-start">
              Zero Project 
              Failure
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
