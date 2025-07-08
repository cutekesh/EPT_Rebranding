import React from "react";
import WorkCards from "../../../../components/reuseable/WorkCards";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProvenProcess = () => {
  return (
    <div className="bg-[#E6F3EC]">
      <div className="w-11/12 mx-auto py-10 flex flex-col font-Inter">
        <div className="w-full text-[#000101] text-center">
          <p>HOW IT WORKS</p>
          <h2 className="text-[#008A3F] text-base md:text-4xl xl:text-5xl font-bold font-IBM">
            A Proven Process Built for Nigeria's
            <br /> Oil and Gas Realities
          </h2>
        </div>
        <WorkCards />
        <div className="w-full bg-[#FEFFFF] rounded-md py-2">
          <p className="tracking-tight flex gap-2 justify-center text-[#000101] text-xs md:text-lg font-semibold">
            Ready to put your project in motion?
            <Link to="/contact">
              <span className="flex items-center  gap-1 text-[#008A3F] font-medium underline underline-offset-2">
                Contact Us<span></span>
                <FaArrowRight />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProvenProcess;
