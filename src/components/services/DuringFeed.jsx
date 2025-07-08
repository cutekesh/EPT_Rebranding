import React from 'react'
import { Feeds } from '../../db'

const DuringFeed = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="font-Inter text-[#000101] text-center">
        <h1 className="text-[#008A3F] font-IBM font-bold">What We Do During FEED</h1>
        <p className="font-medium">We take your goals and turn them into a full technical package  ready for execution.</p>
      </div>

      {/* cards */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 py-8">
          {Feeds.map((Feed) => (
            <div className="bg-[#E6F3EC] rounded-md flex flex-col md:flex gap-2 items-center text-center w-80 font-Inter text-[#000101] py-8 px-6" key={Feed.id}>
            <img className="w-20" src={Feed.img} alt="feed-process" />
            <h3 className="font-IBM font-bold">{Feed.title}</h3>
            <p className="font-normal text-center">{Feed.desc}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DuringFeed
