import React from 'react'
import { IoMdTime } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa";

import CustomCareAndRecipient from './CustomCareAndRecipient';

function CareRecipient() {
      const  datas = [
            {
                h6:"Vetted Professionals",
                p:"All caregivers undergo thorough background checks and credential verification.",
                icon: <FaUserCheck />
            },
            {
                h6:"Personalized Matching",
                p:"Find caregivers who match your specific needs, preferences, and personality.",
                icon:<CiHeart />
            },
            {
                h6:"In-Home Assistance",
                p:"Receive care in the comfort of your own home, maintaining independence and dignity.",
                icon:<TbSmartHome />
            },
            {
                h6:"Flexible Care Options",
                p:"From a few hours of companionship to specialized care, we adapt to your needs.",
                icon:<IoMdTime />
            },
        ]
  return (
    <>
    <section className='bg-[#F1F7FC] px-6 py-12'>
    <CustomCareAndRecipient 
    divClassName={" flex  gap-4 items-center justify-between flex-col-reverse lg:flex-row-reverse"}
       img={"./"}
       imgWidth={"w-[600px] h-[400px] md:w-[400px] xl:w-[600px]  md:h-[800px]  "}
       role={"For Care Recipient"}
       h1={"Join Our Network of Compassionate Caregivers"}
       p={"As a caregiver on our platform, you'll have the opportunity to build meaningful relationships with elderly clients while advancing your career in a supportive environment."}

       datas={datas}
       link={"Find a Caregiver"}/>
    </section>
    </>
  )
}

export default CareRecipient