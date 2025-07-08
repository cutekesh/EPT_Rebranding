import React from 'react'
import { FeedProcess } from '../../db'
const ProvenFeedProcess = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="text-center space-y-2">
        <h1 className="text-[#008A3F] text-xl md:text-4xl font-bold">Our Proven FEED Process</h1>
        <p className="text-[#000101] text-sm font-Inter font-medium">We take your goals and turn them into a full technical package ready for execution.</p>
      </div>

      {/* cards */}
      <div className="hidden md:grid md:grid-cols-2 justify-items-center py-12 gap-8">
        {FeedProcess.map((process) => (
          <div className="w-full flex flex-col border-[1.53px] border-[#969797] rounded-lg overflow-hidden" key={process.id}>
            <img className="w-full h-56 xl:h-80 2xl:h-150 object-cover" src={process.img} alt="proven-process" />
            <div>
              <div className="bg-black text-center">
                <h3 className="text-[#FEFFFF] text-[28.2px] font-inter font-bold py-2">{process.title}</h3>
              </div>
              <div className="text-[#000101] font-Inter text-base px-7 py-8">
                <p>{process.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* carousel for mobile view */}
      <div className="flex md:hidden w-full py-12 gap-8 overflow-x-auto scrollbar-hide">
        {FeedProcess.map((process) => (
          <div className="w-full border-[1.53px] border-[#969797] rounded-lg  flex-shrink-0 flex flex-col" key={process.id}>
            <img className="w-full h-56 object-cover" src={process.img} alt="proven-process" />
            <div>
              <div className="bg-black text-center">
                <h3 className="text-[#FEFFFF] text-[24.2px] font-inter font-bold py-2">{process.title}</h3>
              </div>
              <div className="text-[#000101] font-Inter text-sm px-7 py-8">
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
