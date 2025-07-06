import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import plan from "../../../../assets/plan and design.jpeg";
import build from "../../../../assets/build and deliver.jpeg";
import equip from "../../../../assets/equip and support.jpeg";

const EPTAdvantage = () => {
  return (
    // Outermost div now only handles max-width and centering, and vertical padding
    <div className="md:pt-[80px] pt-[22.95px] flex flex-col justify-center items-center md:gap-[29.38px] gap-[15.97px] w-full mx-auto">
      <div className="flex flex-col items-center">
        <p className="text-black md:text-[27.43px] font-[400] font-Inter text-[14.75px]">
          WHY CHOOSE US?
        </p>
        <h2 className="md:text-[#008A3F] md:text-[54.85px] font-[700] font-Inter md:font-IBM-Plex-Sans-Hebrew text-[25.49px] text-[#013F1E]">
          The EPT Advantage
        </h2>
      </div>

      {/* This div now applies the responsive horizontal padding to align content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-4 md:px-8 lg:px-2 2xl:px-4 xl:px-20 container mx-auto">
        <div
          className="group relative rounded-lg text-start w-full flex flex-col justify-end"
          style={{
            backgroundImage: `url(${plan})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "25rem", // Approx 400px for mobile
            height: "auto", // Allow height to adjust if content is larger
          }}
        >
          {/* Content container, positioned at the bottom, with responsive padding */}
          <div
            className="relative z-10 flex flex-col gap-5
                       pt-60 pb-8 pl-4
                       md:pt-72 md:pl-5 text-white text-start"
          >
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-Inter">
              We Plan & Design
            </h3>
            <p className="text-white text-sm sm:text-base font-normal font-Inter">
              Smart blueprints for oil, gas, and power <br />
              systems.
            </p>
            <Link className="bg-[#F6C200] flex items-center gap-1 rounded-lg text-black text-base sm:text-lg font-semibold py-3 px-2 w-fit">
              Learn More <FaArrowRightLong className="ml-1" />
            </Link>
          </div>
        </div>

        <div
          className="group relative rounded-lg text-start w-full flex flex-col justify-end"
          style={{
            backgroundImage: `url(${build})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "25rem", // Approx 400px for mobile
            height: "auto", // Allow height to adjust if content is larger
          }}
        >
          {/* Content container, positioned at the bottom, with responsive padding */}
          <div
            className="relative z-10 flex flex-col gap-5
                       pt-60 pb-8 pl-4
                       md:pt-72 md:pl-5 text-white text-start"
          >
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-Inter">
              We Build & Deliver
            </h3>
            <p className="text-white text-sm sm:text-base font-normal font-Inter">
              From foundation to finish, we build safely <br />
              and fast
            </p>
            <Link className="bg-[#F6C200] flex items-center gap-1 rounded-lg text-black text-base sm:text-lg font-semibold py-3 px-2 w-fit">
              Learn More <FaArrowRightLong className="ml-1" />
            </Link>
          </div>
        </div>

        <div
          className="group relative rounded-lg text-start w-full flex flex-col justify-end"
          style={{
            backgroundImage: `url(${equip})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "25rem", // Approx 400px for mobile
            height: "auto", // Allow height to adjust if content is larger
          }}
        >
          {/* Content container, positioned at the bottom, with responsive padding */}
          <div
            className="relative z-10 flex flex-col gap-5
                       pt-60 pb-8 pl-4
                       md:pt-72 md:pl-5 text-white text-start"
          >
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-Inter">
              We Equip & Support
            </h3>
            <p className="text-white text-sm sm:text-base font-normal font-Inter">
              Rent or buy equipment, get project support <br />
              no delays
            </p>
            <Link className="bg-[#F6C200] flex items-center gap-1 rounded-lg text-black text-base sm:text-lg font-semibold py-3 px-2 w-fit">
              Learn More <FaArrowRightLong className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPTAdvantage;
