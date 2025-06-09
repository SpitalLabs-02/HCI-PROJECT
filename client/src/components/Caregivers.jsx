import React from 'react'
import CustomCareAndRecipient from './CustomCareAndRecipient'
import { P } from 'pino'
import { BiDollar } from "react-icons/bi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";




function Caregivers() {
  const  datas = [
        {
            h6:"Competitive Compensation",
            p:"Set your own rates and receive fair compensation for your valuable services.",
            icon: <BiDollar />
        },
        {
            h6:"Flexible Scheuling",
            p:"Choose assignments that fit your availability and lifestyle preferences.",
            icon:<FaRegCalendarMinus />
        },
        {
            h6:"Professional Development",
            p:"Access training resources and certification opportunities to enhance your skills.",
            icon:<LuAlarmClock />
        },
        {
            h6:"Meaningful Connections",
            p:"Build rewarding relationships with clients who truly appreciate your care.",
            icon:<MdPeopleAlt />
        },
    ]
  return (
    <section className=' px-8 py-12' >
       <CustomCareAndRecipient 
       divClassName={"flex flex-col items-center md:flex-col lg:flex-row gap-3 justify-between "}
       img={"./"}
       imgWidth={"w-[600px] h-[400px] md:w-[400px]   md:h-[800px]  xl:w-[600px]  lg:w-[] "}
       role={"For Care Givers"}
       h1={"Join Our Network of Compassionate Caregivers"}
       p={"As a caregiver on our platform, you'll have the opportunity to build meaningful relationships with elderly clients while advancing your career in a supportive environment."}

       datas={datas}
       link={"Become a Caregiver"}
       />
       
        
    </section>
  )
}

export default Caregivers