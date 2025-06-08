import React from 'react'
import Hero from '../components/howItWorks/Hero'
import YourJourney from '../components/howItWorks/YourJourney'
import PerfectCareSolution from '../components/homepage/PerfectCareSolution'
import ComprehensieCareServices from '../components/howItWorks/ComprehensieCareServices'

function HowItWorksPage() {
  return (
    <div>
        <Hero 
        h1={"How HummingBirds Care Initiative works"}
        p={"Our simple, secure process connects caregivers with elderly individuals who need assistance, creating  meaningful relationships built on love and compassion "}
        />
        <YourJourney/>
        <PerfectCareSolution/>
    </div>
  )
}

export default HowItWorksPage