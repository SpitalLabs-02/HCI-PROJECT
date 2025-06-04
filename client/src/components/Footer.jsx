import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className=' bg-[#F1F7FC] flex gap-6 flex-col md:pt-28 lg:flex-row md:pb-52 md:px-32 pt-4 pb-4 px-4 xl:justify-between'>
        <div className='flex flex-col justify-center items-center xl:items-start gap-8 xl:w-[402px]'>
            <span className='flex items-center'>
                <img src="./LogoIcon.png" alt="" />
                <p className='font-bold'>HUMMINGBIRDS <br /> CARE INITIATIVE</p>
            </span>

            <p  className='text-sm leading-[145%] text-center lg:text-left font-400'>Providing Compassionate Care for elderly <br /> individuals, connecting caregivers with <br /> those who need assistance</p>
            
             <span className='flex gap-3'><FaTwitter /><IoLogoInstagram /><FaLinkedinIn /></span>
            <div className='flex justify-center gap-3 items-center'>

            <div className='bg-black w-30 p-2 text-[10px] text-white flex items-center'>
                <span className='text-2xl'><FaApple  /></span>
                <span>
                    <p>Download on the</p>
                    <p>App Store</p>
                </span>
             </div>
             <div className='bg-black w-28 p-2 text-[10px] text-white border-amber-300 flex items-center'>
                <span className='text-2xl'><FaGooglePlay /></span>
                <span>
                    <p>GET IT ON</p>
                    <p>Google Play</p>
                </span>
             </div>
            </div>
             <p className='text-center md:text-left'>© 2025 HummingBirds Care Initiative. All rights reserved.</p>
        </div>


        <div className='flex py-3 flex-col justify-center gap-6 items-center md:items-start md:grid lg:w-[657px] lg:h-[344px] grid-cols-3'>
            <div className='flex itmes-center text-center md:text-left justify-center flex-col gap-4'>
                <h4 className='text-lg font-bold leading-[125%]'>Quick Links</h4>
            <ul className='flex flex-col gap-10'>
                <li><a href="">Mass Payments</a></li>
                <li><a href="">How it Works</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </div>

            <div className='flex itmes-center text-center md:text-left justify-center flex-col gap-4'>
            <h4  className='text-lg font-bold leading-[125%]'>Service</h4>
            <ul className='flex flex-col gap-10'>
                <li><a href="">For Care Givers</a></li>
                <li><a href="">For Care Recipient</a></li>
                <li><a href="">Specialize Care</a></li>
                <li><a href="">Resources</a></li>
            </ul>
            </div>

            <div className='flex itmes-center text-center md:text-left justify-center flex-col gap-4'>
            <h4 className='text-lg font-bold leading-[125%]'>Resources</h4>
            <ul className='flex flex-col gap-10 text-center md:text-left'>
                <li><a href="">(+234) 806 5215  490</a></li>
                <li><a href=""> Support@hci.com</a></li>
                <li><a href=""></a>48 Tombia Road. GRA Phase 2 Port Harcourt, Rivers State</li>
                
            </ul>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer