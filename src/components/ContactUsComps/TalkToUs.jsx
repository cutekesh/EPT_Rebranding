import React from 'react'
import contactUsImage from "../../assets/contactUsImage.png";

const TalkToUs = () => {
  return (
    <div className="bg-[#008A3F] md:flex md:align-middle md:justify-content-center md:w-full">
          <div className=" pt-18 pb-16 px-10 text-[#FEFFFF] md:w-1/2 md:my-auto 2xl:mx-24 xl:mx-14 md:p-0 md:mx-10 ">
            <p className="text-[11px] font-medium font-Inter lg:text-[24px] md:text-[13px]">
              CONTACT US
            </p>
            <h1 className="text-[25px] font-bold  font-IBM leading-10 tracking-wide lg:text-[60px] lg:leading-20 ]">
              Talk To Us,<br /> We Tailor Plans
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full lg:h-full"
              src={contactUsImage}
              alt="group of people discussing"
            />
          </div>
        </div>
  )
}

export default TalkToUs