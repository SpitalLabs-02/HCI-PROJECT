import React, { useState } from "react";
import RepresentativeInfo from "../../../components/auth/signup/careRepresentative/RepresentativeInfo";
import OTPVerification from "../../../components/auth/signup/OTPVerification";
import ConfirmInfo from "../../../components/auth/signup/careRepresentative/ConfirmInfo";
import AboutCareRecipient from "../../../components/auth/signup/careRepresentative/AboutCareRecipient";
import RecipientMedicalInfo from "../../../components/auth/signup/careRepresentative/RecipientMedicalInfo";
import Successful from "../../../components/auth/signup/careRepresentative/Successful";

const stepTitles = {
  1: {
    title: "Representative’s Information",
    description:
      "Provide your basic details to get started as a care recipient’s representative",
  },
  2: {
    title: "OTP Verification",
    description:
      "An OTP was sent to the email you provided. Let’s verify it now.",
  },
  3: {
    title: "Confirm your Personal Information",
    description:
      "We’ve fetched your details from the NIN database. Please confirm that all the information is correct.",
  },
  4: {
    title: "Tell us about the Care Recipient",
    description:
      "Please provide details about the individual who will be receiving care.",
  },
  5: {
    title: "Recipient’s Medical Information",
    description:
      "Kindly provide essential health details  of the recipient  for comprehensive care planning.",
  },
  6: {
    title: "",
    description: "",
  },
};

const CareRepresentative = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const steps = {
    1: <RepresentativeInfo next={next} />,
    2: <OTPVerification next={next} back={back} />,
    3: <ConfirmInfo next={next} back={back} />,
    4: <AboutCareRecipient next={next} back={back} />,
    5: <RecipientMedicalInfo next={next} back={back} />,
    6: <Successful back={back} />,
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 md:w-[745px] ">
      {/* Title */}
      <h1 className="text-[28px] font-semibold text-black text-center">
        {stepTitles[step].title}
      </h1>
      {/* Description */}
      <p className="text-base text-[#667185] font-normal text-center sm:w-[420px] mx-auto">
        {stepTitles[step].description}
      </p>
      {step === 6 ? null : (
        <div className="flex items-center justify-center gap-6 my-5">
          {/* Progress bar */}
          <div className="h-3 rounded-full w-[150px] sm:w-[283px] bg-[#F0F2F5]">
            <div className="absolute h-3 w-[75px] sm:w-[150px] rounded-tl-full rounded-bl-full bg-[#357ABB]" />
          </div>
          <p className="text-sm text-black font-normal">Step 1 of 2</p>
        </div>
      )}

      {steps[step]}
    </div>
  );
};

export default CareRepresentative;
