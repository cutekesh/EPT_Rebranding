import React from 'react'
import Image from "../../assets/our ceo.png"

const MeetOurCeo = () => {
  return (
    <div className="w-11/12 mx-auto container grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6 md:mt-12 ">
      <div className="w-full xl:w-[528px] 2xl:w-[725px] font-Inter">
        <div className="relative">
          <img className="w-full xl:w-[528px] 2xl:w-[725px]" src={Image} alt="ceo-image"/>
          <div className="absolute w-11 h-11 lg:w-16 lg:h-16 bottom-15 md:w-24 md:h-24 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 right-1 bg-[#F6C200] rounded-full"></div>
          <div className="mt-2">
            <h4 className="text-[#007A4D] text-lg font-bold">Ifeanyi Ezuka</h4>
            <p className="text-[#333333] text-xs font-medium">CEO EPT LIMITED</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-4xl font-bold space-y-1 -mt-12 md:-mt-0 font-IBM">
          <h3 className="text-[#013F1E] md:text-[#333333]">Meet Our CEO</h3>
          <div className="hidden md:block border-b-2 border-[#007A4D]  w-28"></div>
        </div>
        <div className="text-[#000101] text-lg 2xl:text-xl mt-6">
          <div className="flex flex-col gap-4">
            <p>"My vision for EPT is to redefine what is possible in Nigeria's Oil and Gas industry by building an engineering powerhouse rooted in sustainability, precision, and national pride. At EPT, we are not just executing project, we are empowering futures."</p>
            <p>As Founder and CEO, <span className="text-[#007A4D]">Ifeanyi Ezuka</span> is committed to delivering infrastructure that doesn’t just meet international standards, but sets new ones for Nigeria. Under his leadership, EPT champions a future where energy development is smart, safe, and inclusive where local talent is nurtured, and communities benefit directly from industrial progress.</p>
            <p>His goals are clear:</p>
          </div>
          <ul className="flex flex-col gap-2 mt-2 text-base 2xl:text-lg list-inside list-disc">
            <li className="text-[#007A4D]"><span className="text-[#000101]">To become Nigeria’s most trusted execution partner in engineering, construction, and energy infrastructure</span></li>
            <li className="text-[#007A4D]"><span className="text-[#000101]">To integrate sustainability at every phase of project delivery</span></li>
            <li className="text-[#007A4D]"><span className="text-[#000101]">To build a workforce that reflects Nigeria’s potential skilled, empowered, and globally competitive.</span></li>
          </ul>
          <p className="mt-2">With a passion for long-term transformation, Mr. Ezuka leads EPT to deliver not just projects but lasting progress for Nigeria’s energy landscape.</p>
        </div>
      </div>
    </div>
  )
}

export default MeetOurCeo
