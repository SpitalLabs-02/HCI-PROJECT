import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import WhyChooseUs from '../components/homepage/WhyChooseUs'
import Faq from '../components/homepage/Faq'
import PerfectCareSolution from '../components/homepage/PerfectCareSolution'

function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <Faq/>
      <PerfectCareSolution/>
    </div>
  )
}

export default Home