import React from 'react'
import Image from "../../assets/our ceo.png"
import { execuctives } from '../../db'

const MeetThePeopleCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10 2xl:gap-16">
        {execuctives.map((executive) => (
          <div className="relative" key={executive.id}>
                <img className="w-full" src={executive.image} alt="ceo-image"/>
                <div className="absolute w-13 h-13 lg:w-18 lg:h-18 xl:w-26 xl:h-26 2xl:w-35 2xl:h-35 bottom-13 right-0 bg-[#F6C200] rounded-full"></div>
                <div className="mt-2">
                  <h4 className="text-[#007A4D] text-lg font-bold">{executive.name}</h4>
                  <p className="text-[#333333] text-xs font-semibold">{executive.role}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeetThePeopleCard
