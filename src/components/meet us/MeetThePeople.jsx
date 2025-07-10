import React from 'react'
import MeetThePeopleCard from '../reuseable/MeetThePeopleCard'

const MeetThePeople = () => {
  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="text-[#013F1E] md:text-[#333333] text-4xl font-bold font-IBM flex flex-col gap-4 items-center">
        <h2 className="text-center mt-6">Meet The People Who Take Risks</h2>
      </div>
      <MeetThePeopleCard/>
    </div>
  )
}

export default MeetThePeople
