import React from 'react'
import { FaStar } from "react-icons/fa";
import Headings from './Headings';
import { IoIosStarHalf } from "react-icons/io";


function Testimonial() {
    const testimonials = [
        {
            
            review:"Finding the right caregiver for my mother was incredibly stressful until we discovered HummingBirds CI. The matching process was seamless, and Sarah, her caregiver, has become like family to us. Mom's quality of life has improved dramatically.",
            img:"./careImg.jpg",
            role:"Daughter of Care Receiver",
            name:"John Doe"
        },
        {
           
            review:"Finding the right caregiver for my mother was incredibly stressful until we discovered HummingBirds CI. The matching process was seamless, and Sarah, her caregiver, has become like family to us. Mom's quality of life has improved dramatically.",
            img:"./careImg.jpg",
            role:"Daughter of Care Receiver",
            name:"Jane Doe"
        },
        {
          
            review:"Finding the right caregiver for my mother was incredibly stressful until we discovered HummingBirds CI. The matching process was seamless, and Sarah, her caregiver, has become like family to us. Mom's quality of life has improved dramatically.",
            img:"./careImg.jpg",
            role:"Daughter of Care Receiver",
            name:"Jill Doe"
        },
    ]
  return (
    <>
    <section className='bg-[#265782] p-2 px-3 md:py-8 md:px-20'>
        <div className='flex flex-col gap-[52px] justify-center items-center'>
        <Headings
        header={"What Our Clients Say"}
        paragraph={`Hear from families who have experienced the difference our care services make in their loved ones' lives.`}
        />
       <div className='flex justify-center items-center flex-col lg:flex-row gap-4'>
        
       {
        testimonials.map((data, index)=>(
            <TestimonialCard 
            key={index}
            img={data.img}
            review={data.review}
            role={data.role}
            name={data.name}
            />
        ))
       }
       </div>
       
        </div>
    </section>
    </>
  )
}

export default Testimonial



export  function TestimonialCard({ name, img, review, role,key}) {
  return (
    <>
    <section>
        <div className='w-full border md:w-[403px]  px-3 py-4' key={key}>
            <span className='flex text-amber-400'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>
            <p className='my-3 text-white text-left leading-[120% tracking-[-2%] font-normal align-middle'>{review}</p>
            <div className='flex gap-3 items-center'>
                <img className='w-[100px] h-[100px] rounded-full' src={img} alt="" />
                <span className='flex gap-1 flex-col'>
                    <p className='font-normal text-white text-xl'>{name}</p>
                    <p className='text-[#BDBDBD]'>{role}</p>
                    </span>
            </div>
        </div>
    </section>
    </>
  )
}
