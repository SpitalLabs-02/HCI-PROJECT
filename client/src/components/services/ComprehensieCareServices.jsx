import React from "react";
import CCSIcon1 from "../../assets/ccs-icon1.svg";
import CCSIcon2 from "../../assets/ccs-icon2.svg";
import CCSIcon3 from "../../assets/ccs-icon3.svg";
import CCSIcon4 from "../../assets/ccs-icon4.svg";
import CCSIcon5 from "../../assets/ccs-icon5.svg";
import CCSIcon6 from "../../assets/ccs-icon6.svg";
import CCSTickIcon from "../../assets/ccs-tick-icon.svg";

const ComprehensieCareServices = () => {
  const comprehensiveCareData = [
    {
      title: "Personal Care",
      list: [
        "Bathing and personal hygiene assistance",
        "Dressing and grooming",
        "Mobility assistance",
        "Toileting and incontinence care",
        "Medication reminders",
      ],
      icon: CCSIcon1,
    },
    {
      title: "Household Support",
      list: [
        "Light housekeeping and cleaning",
        "Meal planning and preparation",
        "Laundry and linen changing",
        "Grocery shopping and errands",
        "Organizing and maintaining the home",
      ],
      icon: CCSIcon2,
    },
    {
      title: "Companionship",
      list: [
        "Conversation and social interaction",
        "Recreational activities and games",
        "Accompanying to social events",
        "Reading and engaging activities",
        "Emotional support and reassurance",
      ],
      icon: CCSIcon3,
    },
    {
      title: "Health & Wellness",
      list: [
        "Medication management",
        "Assistance with exercise routines",
        "Health monitoring",
        "Diet and nutrition assistance",
        "Coordination with healthcare providers",
      ],
      icon: CCSIcon4,
    },
    {
      title: "Respite Care",
      list: [
        "Short-term relief for family caregivers",
        "Temporary in-home care",
        "Overnight and weekend care",
        "Vacation coverage",
        "Emergency support services",
      ],
      icon: CCSIcon5,
    },
    {
      title: "Specialized Care",
      list: [
        "Dementia and Alzheimer's care",
        "Post-surgery recovery support",
        "Chronic illness management",
        "Hospice support services",
        "Physical therapy assistance",
      ],
      icon: CCSIcon6,
    },
  ];
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:pb-20">
      <div>
        <h1 className="text-black font-medium text-xl sm:text-3xl xl:text-[40px] text-center">
          Comprehensive Care Services
        </h1>
        <p className="text-[#434343] mx-auto  lg:w-[816px] text-sm sm:text-base lg:text-xl font-normal mt-1.5 text-center">
          We offer a wide range of services to meet the diverse needs of our
          clients, providing compassionate care and support for daily living.
        </p>
      </div>

      {/* Why choose us */}

      <div className="flex items-center justify-center flex-wrap mt-8 gap-3">
        {comprehensiveCareData.map((data, index) => (
          <div
            key={index}
            className={`w-full sm:w-[320px] lg:w-[350px] xl:w-[390px] sm:h-[300px]  border border-[#E3E3E3] p-4 xl:p-3 rounded-lg ${
              index >= 3 ? "xl:mt-4" : "mt-0"
            }`}
          >
            <img src={data.icon} />
            <h1 className="text-xl lg:text-2xl font-normal text-black mt-2">
              {data.title}
            </h1>
            {data.list.map((li, i) => (
              <div key={i} className="flex items-stretch gap-2">
                <img src={CCSTickIcon} className="mt-2" alt="tick icon" />
                <p className="text-sm lg:text-base text-[#434343] font-normal mt-2 ">
                  {li}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprehensieCareServices;
