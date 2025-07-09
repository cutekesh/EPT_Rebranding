import React from 'react'
import { FeedProcess } from '../../db'
const ProvenFeedProcess = () => {
  return (
    <div className="w-11/12 mx-auto mt-4 md:mt-16">
      <div className="text-center space-y-1">
        <h1 className="text-[#008A3F] text-xl md:text-4xl font-bold">Our Proven FEED Process</h1>
        <p className="text-[#000101] text-sm md:text-base font-Inter font-medium">We take your goals and turn them into a full technical package ready for execution.</p>
      </div>

      {/* cards */}
      <div className="hidden md:grid md:grid-cols-2 justify-items-center py-12 gap-8">
        {FeedProcess.map((process) => (
          <div className="w-full flex flex-col border-[1.53px] border-[#969797] rounded-lg overflow-hidden group" key={process.id}>
          <div className="relative w-full h-56 xl:h-80 2xl:h-150 overflow-hidden">
            <img className="w-full h-full rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105" src={process.img} alt={process.title} />

            {/* Hover Overlay Image */}
            <img className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-200 transition-opacity duration-300 z-90" src="/src/assets/client consultation1.png" alt="hover-overlay"/>
          </div>

            <div className="w-full h-80 z-50">
              <div className="bg-black text-center">
                <h3 className="text-[#FEFFFF] text-[28.2px] font-inter font-bold py-2 group-hover:text-[#F6C200]">{process.title}</h3>
              </div>
              <div className="text-[#000101] font-Inter text-base px-4 py-8 text-center">
                <p>{process.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* carousel for mobile view */}
      <div className="flex md:hidden mt-4 gap-1 overflow-x-auto scrollbar-hide">
        {FeedProcess.map((process) => (
          <div className="w-11/12 border-[1.53px] border-[#969797] rounded-lg  flex-shrink-0 flex flex-col" key={process.id}>
            <img className="w-full h-65 object-cover rounded-t-md" src={process.img} alt={process.title} />
            <div className="w-full h-56">
              <div className="bg-black text-center">
                <h3 className="text-[#FEFFFF] text-[24.2px] font-inter font-bold py-2 group-hover:text-[#F6C200]">{process.title}</h3>
              </div>
              <div className="text-[#000101] font-Inter text-xs py-8 px-4 text-center">
                <p>{process.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProvenFeedProcess
