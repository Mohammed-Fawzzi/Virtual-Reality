import { testimonials } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div className="container mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin h-full flex flex-col hover:bg-gradient-to-l from-orange-500 to-orange-800 hover:border-orange-600 transition-all duration-300 shadow-2xl">
              <p className="flex-grow">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <Image
                  width={40}
                  height={40}
                  className="mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.text}
                />
                <div>
                  <h6 className="font-semibold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-400">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
