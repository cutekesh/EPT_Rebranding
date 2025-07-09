import React from 'react';
import { useForm } from 'react-hook-form';

const WhatIsFeed = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset(); 
  };

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1  lg:grid-cols-2 justify-center lg:mb-16 gap-2">
      <div className="space-y-4 lg:space-y-8 lg:flex flex-col justify-center">
        <div className="font-bold">
          <h2 className="text-[31px]  lg:text-4xl">What is FEED?</h2>
          <h4 className="text-[22px] lg:text-2xl">(Front End Engineering Design)</h4>
        </div>
        <div className="text-[18px] lg:text-[24px] xl:text-[28px] text-[#000101] mt-4 font-medium space-y-6 ">
          <p>Front-End Engineering & Design (FEED) is the critical step between your idea and construction.</p>
          <p>EPT uses its multi-discipline engineering expertise to turn early studies into a detailed project plan that’s ready for execution.</p>
        </div>
      </div>

      <div className="bg-[#E6F3EC] p-4 rounded-md space-y-10">
        <div>
          <h4 className="text-[#008A3F] text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-semibold">
            Let’s Turn your Idea into a <br /> Fully Engineered Plan
          </h4>
          <h5 className="font-bold text-[9px] md:text-[12px] lg:text-[16px]">EPT’s FEED services help you design smart, build fast, and stay on budget.</h5>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]">Your Name</label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 rounded mt-2 bg-white xl:py-3 outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]">Your Phone</label>
              <input
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[0-9+()\s-]{7,}$/, message: "Invalid phone number" }
                })}
                className="w-full p-2 rounded mt-2 bg-white xl:py-3 outline-none"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]">Your Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" }
                })}
                className="w-full p-2 rounded mt-2 bg-white xl:py-3 outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]">Subject</label>
              <input
                id="subject"
                type='text'
                {...register("subject", { required: "Subject is required" })}
                className="w-full p-2 rounded mt-2 bg-white xl:py-3 outline-none"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-[12px] md:text-[16px] lg:text-[18px] text-[#2B2C2C]">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 rounded mt-2 bg-white py-3 lg:py-4 h-22 lg:h-32 resize-none outline-none"
              
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#008A3F] lg:text-[26px] font-bold w-full text-white px-4 py-3 rounded-md mt-4 hover:bg-[#006f2e] transition duration-300"
          >
            Book a Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatIsFeed;

