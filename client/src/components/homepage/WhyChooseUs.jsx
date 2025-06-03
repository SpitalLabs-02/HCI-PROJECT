import React from "react";
import TickIcon from "../../assets/tick-icon.svg";

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: "Trusted & Verified",
      description:
        " All our caregivers undergo rigorous background checks and reference verification to ensure your loved ones are in safe hands.",
    },
    {
      title: "Personalized Matching",
      description:
        "Our advanced matching system pairs seniors with caregivers based on needs, preferences, and personality for optimal compatibility.",
    },
    {
      title: "Compassionate Care",
      description:
        "Our caregivers are selected not just for their skills, but for their empathy, patience, and genuine desire to help seniors.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "From a few hours of companion care to full-time assistance, we offer scheduling options that adapt to your changing needs.",
    },
    {
      title: "Quality Assurance",
      description:
        "Regular check-ins and feedback collection ensure our service consistently meets high standards of quality and satisfaction.",
    },
    {
      title: "24/7 Support",
      description:
        "Our customer support team is available round-the-clock to address any concerns or changes in care requirements.",
    },
  ];
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:pb-20">
      <div>
        <h1 className="text-black font-medium text-xl sm:text-3xl xl:text-[40px] text-center">
          Why choose our Elderly Care Service
        </h1>
        <p className="text-[#434343] mx-auto  lg:w-[628px] text-sm sm:text-base lg:text-xl font-normal mt-1.5 text-center">
          We provide trusted, reliable care solutions to help seniors maintain
          their independence and quality of life.
        </p>
      </div>

      {/* Why choose us */}

      <div className="flex items-center justify-center flex-wrap mt-8 gap-3">
        {whyChooseUsData.map((data, index) => (
          <div key={index} className={`sm:w-[320px] lg:w-[350px] h-[220px] border border-[#E3E3E3] p-4 rounded-lg ${index >= 3 ? 'xl:mt-4' : 'mt-0' }`}>
            <img src={TickIcon} />
            <h1 className="text-xl lg:text-2xl font-normal text-black mt-2">
              {data.title}
            </h1>
            <p className="text-sm lg:text-base text-[#434343] font-normal mt-2">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
