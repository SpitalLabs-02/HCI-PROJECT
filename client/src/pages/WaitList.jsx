import React from 'react'
import HeroSection from '../components/waitlist/HeroSection'
import Benefit from '../components/waitlist/Benefit'
import HowItWorks from '../components/waitlist/HowItWorks'
import Testimonial from '../components/Testimonial'
import Faq from '../components/homepage/Faq'
import DontMissOut from '../components/waitlist/DontMissOut'
import Footer from '../components/Footer'

const WaitList = () => {
  return (
    <div>
        <HeroSection/>
        <Benefit/>
        <HowItWorks/>
        <Testimonial/>
        <Faq/>
        <DontMissOut/>
        <Footer/>
    </div>
  )
}

export default WaitList