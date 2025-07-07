import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";

const Energylevel = () => {
  return (
    <div className="bg-[#E6F3EC]">
      <div className="w-11/12 mx-auto py-6 flex flex-col-reverse md:flex-row gap-6 md:gap-10 lg:gap-16  xl:gap-[20%] justify-between">
        <div className="w-full space-y-6">
        <h3 className="hidden md:flex text-[#000000] text-lg md:text-xl lg:text-[25px] font-bold">Integrated Consulting, Engineering <br/>& Asset Services</h3>
        <div className="text-[#333333] text-sm 2xl:text-base flex flex-col gap-6">
          <div className='flex gap-2 items-start'><span className='rounded-full p-0.5 bg-[#007A4D]'><IoMdArrowRoundForward className=' text-white' /></span><p>Consulting and Technology including proprietary workflows and technology focused on the monetization of hydrocarbons,(phase separations systems), project management</p></div>
          <div className='flex gap-2 items-start'><span className='rounded-full p-0.5 bg-[#007A4D]'><IoMdArrowRoundForward className=' text-white' /></span><p>Engineering & Construction, including onshore oil and gas; chemicals; fertilizers; offshore oil and gas, floating solutions top sides (FPU, FPSO,MOPU, FSO); maintenance services and program management.</p></div>
          <span className='flex gap-2 items-start'><span className='rounded-full p-0.5 bg-[#007A4D]'><IoMdArrowRoundForward className=' text-white' /></span><p>Re-manufacturing of Process Equipment and Vessels</p></span>
        </div>
      </div>
      
      <div className="w-full text-4xl font-bold px-6 md:px-0 lg:ml-8 xl:ml-0 flex flex-col gap-2 justify-center">
        <h2 className="text-[#333333]">Take <span className="text-[#007A4D]">Energy</span> to <br/>the next level</h2>
        <div className="w-29 border-b-2 border-b-[#007A4D]"></div>
      </div>
      </div>
    </div>
  )
}

export default Energylevel
