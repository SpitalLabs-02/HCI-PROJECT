import React from 'react'
import Headings from '../components/Headings'
import Caregivers from '../components/Caregivers'
import CareRecipient from '../components/CareRecipient'

function Services() {
  return (
    
       <section>
        <Headings 
        h1color={"text-black"}
        pcolor={"text-black"}
        header={"Our Care Services"}
        paragraph={"HummingBirds Care Initiative offers specialized services for both caregivers and care recipients, creating meaningful connections based on trust, compassion, and expertise."}
        btn1={"Care Givers"}
        btn2={"Care Recipient"}
        />

        

        <Caregivers />
        <CareRecipient />
       </section>
    
  )
}

export default Services