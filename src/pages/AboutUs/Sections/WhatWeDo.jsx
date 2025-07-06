import React from "react";
import whatWeDoImg from "../../../assets/whatWeDoImg.png";
import ourClientsEnjoyBgImg from "../../../assets/ourClientsEnjoyBgImg.png";
import ourVisionIcon from "../../../assets/ourVision.svg";
import ourMissionIcon from "../../../assets/ourMission.png";
import automotiveIcon from "../../../assets/automotiveIcon.svg";
import maintenanceIcon from "../../../assets/maintenanceIcon.svg";
import callCenterIcon from "../../../assets/callCenterIcon.svg";

const WhatWeDo = () => {
  return (
    <main>
      {/* What We Do Section */}
      <div className="bg-[#F9FFFC] w-full">
        {/* Added min-h-[600px] to ensure a minimum height for the section */}
        {/* Changed lg:items-start to lg:items-stretch for balanced column heights */}
        <section className="px-4 py-12 md:py-16 xl:py-20 2xl:px-4 xl:px-20 md:px-6 lg:px-2 mx-auto container flex flex-col lg:flex-row items-center lg:items-stretch gap-12 min-h-[600px]">
          {/* Left Content: Text and Bullet Points - Now appears first on mobile, first on large screens */}
          <div className="lg:w-1/2 text-left order-first lg:order-first">
            <h2 className="text-4xl xl:text-6xl md:text-5xl font-bold text-[#333333] font-IBM w-[100%] mb-2 animate__animated animate__backInLeft">
              What We Do
            </h2>
            {/* Border: Now left-aligned on mobile by removing mx-auto */}
            <div className="w-[20%] border-b-4 border-[#007A4D] mb-8 lg:mx-0"></div>
            <p className="text-[16px] md:text-lg text-[#000101] leading-relaxed mb-8 font-normal font-Inter w-[100%]">
              EPT handles complete projects, from the design and construction of
              industrial plants to commissioning, operation, and maintenance.
              With our technology and management capabilities, we deliver with
              strong Project and Customer satisfaction through our work culture
              committed to international Quality, Safety, Health, and
              Environment standards.
            </p>
            {/* Vision and Mission */}
            <div className="space-y-6 relative">
              {/* Connecting Line - This line's properties are kept as per your last instruction */}
              <div className="absolute left-[15px] top-[24px] h-[160px] w-[2px] bg-[#007A4D] z-0"></div>

              <div className="flex items-start gap-4">
                {/* Vision Icon */}
                <img
                  src={ourVisionIcon}
                  alt="Our Vision Icon"
                  className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#333333] p-2 z-10"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be a global choice in sustainable engineering,
                    construction, and project management by delivering
                    remarkable results for customers with outstanding people who
                    enjoy their careers while delivering sustainable economic
                    returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* Mission Icon */}
                <img
                  src={ourMissionIcon}
                  alt="Our Mission Icon"
                  className="flex-shrink-0 w-[32px] h-[32px] rounded-full  bg-[#333333] p-2 z-10"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sustainable execution for a long-term positive legacy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Now appears last on mobile, last on large screens */}
          {/* Added h-full to the div and h-full object-cover to the image for height compliment */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end order-last lg:order-last h-full">
            <img
              src={whatWeDoImg}
              alt="What We Do"
              className="rounded-[100px] w-full h-full object-cover animate__animated animate__backInRight" // Changed w-[90%] to w-full
            />
          </div>
        </section>
      </div>


      {/* Our Clients Enjoy Section */}
      {/* Added min-h-[400px] to ensure a minimum height for the section */}
      <section
        className="w-full py-12 md:py-0 xl:py-6 flex items-center relative overflow-hidden min-h-[400px]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 55%, rgba(0, 104, 48, 0.8), transparent 150%), url(${ourClientsEnjoyBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to make text more readable on background image */}
        <div className="absolute inset-0 "></div>

        <div className="container mx-auto text-center relative z-10 text-white px-4 py-2 xl:py-6 2xl:px-4 xl:px-20 md:px-6 md:py-6 lg:px-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-IBM">
            Our Clients Enjoy
          </h2>

          {/* Grid setup is already responsive: 1 column on mobile, 3 on md and up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {/* Service Card 1: Automotive Parts and Systems */}
            <div className="p-6 flex flex-col justify-between items-center text-center">
              <img
                src={automotiveIcon}
                alt="Automotive Icon"
                className="w-[50px] h-[50px] mb-4 bg-[#F6C200] rounded-full p-3"
              />
              <h3 className="text-2xl font-semibold mb-5 font-Inter">
                Automotive Parts and Systems
              </h3>
              <p className="text-[20px] md:text-base leading-relaxed font-Inter font-light"> {/* Added md:text-base */}
                We provide comprehensive solutions in the design, engineering,
                and integration of automotive parts and systems, tailored to
                meet the demands of modern mobility and industrial applications.
              </p>
            </div>

            {/* Service Card 2: Maintenance Services */}
            <div className=" p-6  flex flex-col items-center text-center">
              <img
                src={maintenanceIcon}
                alt="Maintenance Icon"
                className="w-[50px] h-[50px] mb-4 bg-[#F6C200] rounded-full p-3"
              />
              <h3 className="text-2xl font-semibold mb-5 font-Inter">
                Maintenance Services
              </h3>
              <p className="text-[20px] md:text-base leading-relaxed font-Inter font-light"> {/* Added md:text-base */}
                We provide comprehensive maintenance solutions to ensure the
                long-term efficiency, safety, and reliability of industrial
                plants.
              </p>
            </div>

            {/* Service Card 3: Call Center */}
            <div className="p-6  flex flex-col items-center text-center">
              <img
                src={callCenterIcon}
                alt="Call Center Icon"
                className="w-[50px] h-[50px] mb-4 bg-[#F6C200] rounded-full p-3"
              />
              <h3 className="text-2xl font-semibold mb-4 font-Inter">
                Call Center
              </h3>
              <p className="text-[20px] md:text-base leading-relaxed font-Inter font-light"> {/* Added md:text-base */}
                We provide dedicated Call Center services to ensure seamless
                communication and prompt resolution of client and operational
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;
