import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className='bg-[#F1F7FC] p-12 xl:flex'>
        <div className='flex flex-col justify-center items-center xl:items-start gap-4 xl:w-[402px]'>
            <span className='flex items-center'>
                <img src="./LogoIcon.png" alt="" />
                <p className='font-bold'>HUMMINGBIRDS <br /> CARE INITIATIVE</p>
            </span>

            <p  className='text-sm leading-[145%] text-center font-400'>Providing Compassionate Care for elderly individuals, connecting caregivers with those who need assistance</p>
            
             <span className='flex gap-3'><FaTwitter /><IoLogoInstagram /><FaLinkedinIn /></span>
            <div className='flex justify-center gap-3 items-center'>

            <div className='bg-black w-48 p-2 text-sm text-white flex items-center'>
                <span className='text-4xl'><FaApple  /></span>
                <span>
                    <p>Download on the</p>
                    <p>App Store</p>
                </span>
             </div>
             <div className='bg-black w-48 p-2 text-sm text-white flex items-center'>
                <span className='text-4xl'><FaGooglePlay /></span>
                <span>
                    <p>GET IT ON</p>
                    <p>Google Play</p>
                </span>
             </div>
            </div>
             <p>© 2025 HummingBirds Care Initiative. All rights reserved.</p>
        </div>


        <div className='md:grid grid-cols-3'>
            <div>
                <h4>Quick Links</h4>
            <ul>
                <li><a href="">Mass Payments</a></li>
                <li><a href="">How it Works</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </div>

            <div>
            <h4>Service</h4>
            <ul>
                <li><a href="">For Care Givers</a></li>
                <li><a href="">For Care Recipient</a></li>
                <li><a href="">Specialize Care</a></li>
                <li><a href="">Resources</a></li>
            </ul>
            </div>

            <div>
            <h4>Resources</h4>
            <ul>
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