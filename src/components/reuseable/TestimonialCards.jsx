import { Testimonials } from '../../db'
import { useRef } from 'react';
const TestimonialCards = () => {
  return (
    <div>
      <div className="w-11/12 md:w-full mt-16 md:mt-26 flex gap-4 scrollbar-hide" ref={useRef(null)}>
        {Testimonials.map((testimonial) => (
          <div
            className="relative bg-[#F9FFFC] md:bg-white w-full max-w-md rounded-md text-[#000101] border border-[#00000040] text-center py-10 px-2 flex-shrink-0 font-Inter"
            key={testimonial.id}
          >
            <div className="flex justify-center">
              <img
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20"
                src={testimonial.img}
                alt="testimonial-img"
              />
            </div>
            <div className="flex flex-col-reverse md:flex-col gap-4 py-4">
              <h4 className="text-[#008A3F] text-lg md:text-xl font-bold">{testimonial.title}</h4>
              <p className="text-sm">{testimonial.desc}</p>
            </div>
            <div>
              <h6 className="font-bold">{testimonial.name}</h6>
              <p className="text-[#666666] text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCards
