import React, { useState } from "react";
import PersonalInfo from "../../../components/auth/signup/caregiver/PersonalInfo";
import OTPVerification from "../../../components/auth/signup/caregiver/OTPVerification";
import ConfirmInfo from "../../../components/auth/signup/caregiver/ConfirmInfo";
import ProfessionalBg from "../../../components/auth/signup/caregiver/ProfessionalBg";
import GuarantorDetails from "../../../components/auth/signup/caregiver/GuarantorDetails";
import ProfileValidation from "../../../components/auth/signup/caregiver/ProfileValidation";
import Successful from "../../../components/auth/signup/caregiver/Successful";

const stepTitles = {
  1: {
    title: "Sign Up as a Caregiver",
    description:
      " Join our community and start your journey towards making a difference",
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
    title: "Professional Background",
    description:
      "Share your qualifications, language skills, and caregiving experience.",
  },
  5: {
    title: "Guarantor’s Details",
    description:
      "Help us verify your identity with information about your guarantor.",
  },
  6: {
    title: "Profile Validation",
    description: "Upload all required documents to complete your verification.",
  },
  7: {
    title: "",
    description: "",
  },
};

const CareGiver = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nin: "",
    password: "",
    confirmPassword: "",
    otp: "",
    eduLevel: "",
    language: "",
    experience: "",
    serviceType: "",
    state: "",
    address: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorEmail: "",
    guarantorRelation: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const steps = {
    1: <PersonalInfo data={formData} onChange={handleChange} next={next} />,
    2: (
      <OTPVerification
        data={formData}
        onChange={handleChange}
        next={next}
        back={back}
      />
    ),
    3: <ConfirmInfo data={formData} next={next} back={back} />,
    4: (
      <ProfessionalBg
        data={formData}
        onChange={handleChange}
        next={next}
        back={back}
      />
    ),
    5: (
      <GuarantorDetails
        data={formData}
        onChange={handleChange}
        next={next}
        back={back}
      />
    ),
    6: <ProfileValidation next={next} back={back} />,
    7: <Successful back={back} />,
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
      {step === 7 ? null : (
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

export default CareGiver;
