import React from 'react'
import Image from "../../assets/our ceo.png"

const MeetOurCeo = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
      <div className="w-full xl:w-[528px] 2xl:w-[725px] font-Inter">
        <div className="relative">
          <img className="w-full xl:w-[528px] 2xl:w-[725px]" src={Image} alt="ceo-image"/>
          <div className="absolute w-13 h-13 md:w-28 md:h-28 lg:w-18 lg:h-18 xl:w-22 xl:h-22 2xl:w-30 2xl:h-30 bottom-13 right-0 bg-[#F6C200] rounded-full"></div>
          <div className="mt-2">
            <h4 className="text-[#007A4D] text-lg font-bold">Ifeanyi Ezuka</h4>
            <p className="text-[#333333] text-xs font-medium">CEO EPT LIMITED</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-4xl font-bold space-y-1 font-IBM">
          <h3 className="text-[#333333]">Meet Our CEO</h3>
          <div className="border-b-2 border-[#007A4D]  w-28"></div>
        </div>
        <div className="text-[#000101] text-lg 2xl:text-xl mt-6">
          <div className="flex flex-col gap-4">
            <p>"My vision for EPT is to redefine what is possible in Nigeria’s Oil and Gas industry by building an engineering powerhouse rooted in sustainability, precision, and national pride. At EPT, we are not just executing project, we are empowering futures."</p>
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
