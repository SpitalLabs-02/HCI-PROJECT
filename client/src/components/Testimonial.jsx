import React from "react";
import { FaStar } from "react-icons/fa";
import Headings from "./Headings";
import { IoIosStarHalf } from "react-icons/io";

function Testimonial() {
  const testimonials = [
    {
      review:
        "Finding the right caregiver for my mother was incredibly stressful until we discovered HummingBirds CI. The matching process was seamless, and Sarah, her caregiver, has become like family to us. Mom's quality of life has improved dramatically.",
      img: "./careImg.jpg",
      role: "Daughter of Care Receiver",
      name: "John Doe",
    },
    {
      review:
        "Finding the right caregiver for my mother was incredibly stressful until we discovered HummingBirds CI. The matching process was seamless, and Sarah, her caregiver, has become like family to us. Mom's quality of life has improved dramatically.",
      img: "./careImg.jpg",
      role: "Daughter of Care Receiver",
      name: "Jane Doe",
    },
    {
      review:
        "Finding the right caregiver for my mother was incredibly stressful until we discovered HummingBirds CI. The matching process was seamless, and Sarah, her caregiver, has become like family to us. Mom's quality of life has improved dramatically.",
      img: "./careImg.jpg",
      role: "Daughter of Care Receiver",
      name: "Jill Doe",
    },
  ];
  return (
    <>
      <section className="bg-[#265782] p-6 md:py-8 md:px-20 md:mb-8">
        
          <Headings
          h1color={"text-white"}
          pcolor={"text-white"}
            header={"What Our Clients Say"}
            paragraph={`Hear from families who have experienced the difference our care services make in their loved ones' lives.`}
          />
        
        <div className="flex justify-center items-center flex-col lg:flex-row gap-4 mt-5 ">
          {testimonials.map((data, index) => (
            <div
              className="w-full border border-white md:w-[403px] rounded-lg px-6 py-4 sm:px-10 sm:py-8"
              key={index}
            >
              <span className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <IoIosStarHalf />
              </span>
              <p className="my-3 text-white text-base font-normal ">
                {data.review}
              </p>
              <div className="flex gap-3 items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={data.img}
                  alt="user image"
                />
                <div className="">
                  <p className="font-normal text-white text-xl">{data.name}</p>
                  <p className="text-[#BDBDBD]">{data.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonial;

export function TestimonialCard({ name, img, review, role, key }) {
  return (
    <>
      <section></section>
    </>
  );
}
