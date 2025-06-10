import React from "react";
import Headings from "../components/Headings";
import Caregivers from "../components/services/Caregivers";
import CareRecipient from "../components/services/CareRecipient";
import ComprehensieCareServices from "../components/services/ComprehensieCareServices";
import PerfectCareSolution from "../components/homepage/PerfectCareSolution";
import Hero from "../components/howItWorks/Hero";

function Services() {
  return (
    <section>
      {/* <Headings 
        h1color={"text-black"}
        pcolor={"text-black"}
        header={"Our Care Services"}
        paragraph={"HummingBirds Care Initiative offers specialized services for both caregivers and care recipients, creating meaningful connections based on trust, compassion, and expertise."}
        btn1={"Care Givers"}
        btn2={"Care Recipient"}
        /> */}

      <Hero
        h1={"Our Care Services"}
        p={
          "HummingBirds Care Initiative offers specialized services for both caregivers and care recipients, creating meaningful connections based on trust, compassion, and expertise."
        }
        isButton={true}
      />

      <Caregivers />
      <CareRecipient />
      <ComprehensieCareServices />
      <PerfectCareSolution />
    </section>
  );
}

export default Services;
