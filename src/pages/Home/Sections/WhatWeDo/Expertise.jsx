import React from "react";
import { Link } from "react-router-dom";
import concept from "../../../../assets/concept studies.png";
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
      title: "COMMISSIONING & START UP", // Corrected spelling
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
        "We believe knowledge empowers safe and \nefficient operations. That’s why we offer \nhands-on, structured training programs in \nthree core areas.",
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
      <div className="md:py-[80px] py-[22.95px] px-[15px] flex flex-col justify-center items-center gap-[5.15px] md:gap-[29.38px] w-full md:max-w-11/12">
        <div className="flex flex-col items-center">
          <p className="text-black md:text-[27.43px] font-[400] font-Inter text-[14.75px]">
            WHAT WE DO
          </p>
          <h2 className="md:text-[#008A3F] md:text-[54.85px] text-[16px] font-[700] font-Inter md:font-IBM-Plex-Sans-Hebrew text-[25.49px] text-[#013F1E]">
            End-to-End Energy Expertise
          </h2>
        </div>
        <div className="md:grid md:grid-cols-3 grid-rows-1 md:gap-[50.53px] gap-[10px] w-full md:max-w-10/12 flex overflow-x-auto">
          {services.map((service) => (
            <div className="group text-center md:h-[557.32px] md:w-full w-11/12 rounded-[7.84px] md:border md:border-[0.98px] border-[#969797] flex-shrink-0 md:flex-shrink md:bg-white bg-[#E6F3EC] md:hover:bg-gray-50">
              <img src={service.image} alt="" className="w-full" />
              <div className="flex flex-col gap-[26.45px] md:bg-white md:group-hover:bg-gray-50">
                <h3 className="bg-black font-[700] text-white text-xl sm:text-2xl font-bold font-Inter group-hover:text-[#F6C200]">
                  {service.title}
                </h3>
                <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                  {service.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                  Learn more <FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expertise;
