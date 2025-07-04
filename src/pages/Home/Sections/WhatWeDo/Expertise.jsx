import React from "react";
import { Link } from "react-router-dom";
import concept from "../../../../assets/concept studies.jpeg";
import procurement from "../../../../assets/procurement.jpeg";
import comission from "../../../../assets/comissioning.jpeg";
import engineers from "../../../../assets/engineering.jpeg";
import training from "../../../../assets/training.jpeg";
import testing from "../../../../assets/well testing.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import procon from "../../../../assets/banner projects.png";
import certcon from "../../../../assets/certified engineers.png";
import supercon from "../../../../assets/super maintenance.png";
import failcon from "../../../../assets/banner project failure.png";

const Expertise = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[29.38px]">
      <div className="py-[80px] flex flex-col justify-center items-center gap-[29.38px] w-10/12">
        <p className="text-black lg:text-[27.43px] font-[400] font-Inter sm:text-[12.75px]">
          WHAT WE DO
        </p>
        <h3 className="lg:text-[#008A3F] lg:text-[54.85px] font-[700] font-IBM-Plex-Sans-Hebrew sm:text-[25.49px] sm:text-[#013F1E]">
          End-to-End Energy Expertise
        </h3>
        <div className="md:grid md:grid-cols-3 gap-[22.53px] flex overflow-x-auto w-full">
          <div className="group text-center h-[557.32px] w-[389.83px] rounded-[7.84px] lg:border lg:border-[0.98px] lg:border-[#969797] hover:bg-gray-50">
            <img src={concept} alt="" />
            <div className="flex flex-col gap-[26.45px]">
              <h3 className="bg-black font-[700] font-Inter text-[23.51px] group-hover:text-[#F6C200]">
                CONCEPT STUDIES
              </h3>
              <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                Before any project moves <br />
                into full engineering and development,
                <br />
                we help clients explore their options.
              </p>
              <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                Learn more <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="group text-center h-[557.32px] w-[389.83px] rounded-[7.84px] border border-[0.98px] border-[#969797] hover:bg-gray-50">
            <img src={procurement} alt="" />
            <div className="flex flex-col gap-[26.45px]">
              <h3 className="bg-black font-[700] font-Inter text-[23.51px] group-hover:text-[#F6C200]">
                PROCUREMENT & FABRICATION
              </h3>
              <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                We handle the full process of sourcing high <br />
                quality equipment <br />
                and materials and fabricating <br />
                components to meet project needs.
              </p>
              <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                Learn more <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="group text-center h-[557.32px] w-[389.83px] rounded-[7.84px] border border-[0.98px] border-[#969797] hover:bg-gray-50">
            <img src={comission} alt="" />
            <div className="flex flex-col gap-[26.45px]">
              <h3 className="bg-black font-[700] font-Inter text-[23.51px] group-hover:text-[#F6C200]">
                COMISSIONING & START UP
              </h3>
              <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                Before any plant or system goes live <br />
                we make sure everything works. <br />
                Our team carries out detailed checks <br />
                system test, and safety validations.
              </p>
              <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                Learn more <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="group text-center h-[557.32px] w-[389.83px] rounded-[7.84px] border border-[0.98px] border-[#969797] hover:bg-gray-50">
            <img src={engineers} alt="" />
            <div className="flex flex-col gap-[26.45px]">
              <h3 className="bg-black font-[700] font-Inter text-[23.51px] group-hover:text-[#F6C200]">
                ENGINEERING AND DESIGN
              </h3>
              <p className="font-[500] font-inter text-[15.67px] text-[#000101] text-center">
                We design smart, safe systems that bring oil <br />
                and gas projects to life-on time, <br />
                on budget and built to perform efficiently.
              </p>
              <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                Learn more <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="group text-center h-[557.32px] w-[389.83px] rounded-[7.84px] border border-[0.98px] border-[#969797] hover:bg-gray-50">
            <img src={training} alt="" />
            <div className="flex flex-col gap-[26.45px]">
              <h3 className="bg-black font-[700] font-Inter text-[23.51px] group-hover:text-[#F6C200]">
                TRAINING SERVICES
              </h3>
              <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                We believe knowledge empowers safe and <br />
                efficient operations. That’s why we offer <br />
                hands-on, structured training programs in <br />
                three core areas.
              </p>
              <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                Learn more <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="group text-center h-[557.32px] w-[389.83px] rounded-[7.84px] border border-[0.98px] border-[#969797] hover:bg-gray-50">
            <img src={testing} alt="" />
            <div className="flex flex-col gap-[26.45px]">
              <h3 className="bg-black font-[700] font-Inter text-[23.51px] group-hover:text-[#F6C200]">
                WELL TESTING & PRODUCTION
              </h3>
              <p className="font-[500] font-Inter text-[15.67px] text-[#000101] text-center">
                Get early results and fast flow. <br />
                We test your wells and start production <br />
                quickly, safely and with reliable data.
              </p>
              <Link className="flex items-center justify-center text-[#008A3F] font-[500] font-Inter text-[19.59px]">
                Learn more <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#008A3F] md:w-full flex py-[80px] justify-center px-[126px] lg:w-full items-center gap-[48.97px]">
        <div className="flex items-center gap-[10.77px]">
          <img src={procon} alt="" />
          <h3 className="text-[27.43px] font-[500] font-Inter text-[#FEFFFF] text-start">
            200+ <br />
            Projects
          </h3>
        </div>

        <div className="flex items-center gap-[10.77px] border-l-[0.98px] ps-[73.46px]">
          <img src={certcon} alt="" />
          <h3 className="text-[27.43px] font-[500] font-Inter text-[#FEFFFF] text-start">
            Certified <br />
            Engineers
          </h3>
        </div>

        <div className="flex items-center gap-[10.77px] border-l-[0.98px] ps-[73.46px]">
          <img src={supercon} alt="" />
          <h3 className="text-[27.43px] font-[500] font-Inter text-[#FEFFFF] text-start">
            24/7 Super <br />
            Maintenance
          </h3>
        </div>

        <div className="flex items-center gap-[10.77px] border-l-[0.98px] ps-[73.46px]">
          <img src={failcon} alt="" />
          <h3 className="text-[27.43px] font-[500] font-Inter text-[#FEFFFF] text-start">
            Zero Project <br />
            Failure
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
