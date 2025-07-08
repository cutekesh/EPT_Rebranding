import React from 'react'
import TestimonialCards from '../../../../components/reuseable/TestimonialCards'

const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-10"> 
        <div className="w-full  space-y-2 text-center">
          <p className="text-[#000000] font-Inter font-normal text-lg">OUR WORK IN THEIR WORDS</p>
          <h2 className="text-[#008A3F] text-lg md:text-4xl font-IBM font-bold">Client Testimonials</h2>
        </div>
        <div className='w-full overflow-x-auto'>
          <TestimonialCards/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
