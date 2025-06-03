import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import WhyChooseUs from '../components/homepage/WhyChooseUs'
import Faq from '../components/homepage/Faq'
import PerfectCareSolution from '../components/homepage/PerfectCareSolution'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <Testimonial/>
      <Faq/>
      <PerfectCareSolution/>
    </div>
  )
}

export default Home