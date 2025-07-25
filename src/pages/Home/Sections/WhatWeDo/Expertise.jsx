import React from "react";
import { Link } from "react-router-dom";
import concept from "../../../../assets/concept studies.jpeg";
import procurement from "../../../../assets/procurement.jpeg";
import comission from "../../../../assets/comissioning.jpeg";
import engineers from "../../../../assets/engineering.jpeg";
import training from "../../../../assets/training.jpeg";
import testing from "../../../../assets/well testing.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const Expertise = () => {
  const services = [
    {
      id: 1,
      image: concept,
      title: "CONCEPT STUDIES",
      description:
        "Before any project moves \ninto full engineering and development,\nwe help clients explore their options.",
    },
    {
      id: 2,
      image: procurement,
      title: "PROCUREMENT & FABRICATION",
      description:
        "We handle the full process of sourcing high \nquality equipment \nand materials and fabricating \ncomponents to meet project needs.",
    },
    {
      id: 3,
      image: comission,
      title: "COMMISSIONING & START UP",
      description:
        "Before any plant or system goes live \nwe make sure everything works. \nOur team carries out detailed checks \nsystem test, and safety validations.",
    },
    {
      id: 4,
      image: engineers,
      title: "ENGINEERING AND DESIGN",
      description:
        "We design smart, safe systems that bring oil \nand gas projects to life-on time, \non budget and built to perform efficiently.",
    },
    {
      id: 5,
      image: training,
      title: "TRAINING SERVICES",
      description:
        "We believe knowledge empowers safe and \nefficient operations. That's why we offer \nhands-on, structured training programs in \nthree core areas.",
    },
    {
      id: 6,
      image: testing,
      title: "WELL TESTING & PRODUCTION",
      description:
        "Get early results and fast flow. \nWe test your wells and start production \nquickly, safely and with reliable data.",
    },
  ];

  return (
    <>
      <div className="md:py-[80px] py-[22.95px] flex flex-col justify-center items-center gap-[5.15px] md:gap-[29.38px] mt-6">
        <div className="w-11/12 mx-auto container space-y-6">
          <div className="flex flex-col justify-center items-center md:mb-8 mb-4">
            <p className="text-[#000000] md:text-[27.43px] font-[400] font-Inter text-[14.75px]">
              WHAT WE DO
            </p>
            <h2 className="xl:text-[54.85px] md:text-5xl font-[700] font-IBM text-[25.49px] text-[#013F1E] justify-center text-center">
              End-to-End Energy Expertise
            </h2>
          </div>
          {/* Modified: Added 'flex flex-nowrap' for mobile to enable horizontal scrolling */}
          <div className="flex flex-nowrap md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-8 gap-4 mx-auto overflow-x-auto w-full">
            {services.map((service) => (
              <div
                className="group text-center rounded-[7.84px] border-[0.98px] border-[#969797] flex-shrink-0 md:flex-shrink md:bg-white bg-[#E6F3EC] md:hover:bg-gray-50 md:w-full w-11/12 "
                key={service.id}
              >
                <img src={service.image} alt="" className="w-full" />
                <div className="flex flex-col gap-[26.45px] md:bg-white md:group-hover:bg-gray-50">
                  <h3 className="bg-black text-white lg:text-xl sm:text-2xl md:text-xl font-bold font-Inter group-hover:text-[#F6C200]">
                    {service.title}
                  </h3>
                  <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                    {service.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  <Link className="flex gap-2 items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px] group-hover:text-[#000101] xl:mb-6 mb-4">
                    Learn more <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
