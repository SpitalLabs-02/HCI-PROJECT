import React from 'react'
import Hero from '../components/howItWorks/Hero'
import YourJourney from '../components/howItWorks/YourJourney'

function HowItWorksPage() {
  return (
    <div>
        <Hero 
        h1={"How HummingBirds Care Initiative works"}
        p={"Our simple, secure process connects caregivers with elderly individuals who need assistance, creating  meaningful relationships built on love and compassion "}
        />
        <YourJourney/>
    </div>
  )
}

export default HowItWorksPage