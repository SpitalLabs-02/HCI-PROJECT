import React from "react";
import BenefitIcon1 from "../../assets/be1.svg";
import BenefitIcon2 from "../../assets/be2.svg";
import BenefitIcon3 from "../../assets/be3.svg";
import BenefitIcon4 from "../../assets/be4.svg";
import HowItWorksImg from "../../assets/hiw-img.svg";

const HowItWorks = () => {
  const howItWorksData = [
    {
      title: "Sign Up",
      description:
        "Fill in a quick form with your details to secure your spot on our exclusive waitlist.",
      number: '1',
    },
    {
      title: "Get Verified",
      description:
        "We’ll review and confirm your information to ensure smooth onboarding when it’s your turn.",
      number: '2',
    },
    {
      title: "Receive Notification",
      description:
        "Get notified as soon as a caregiver or service is available for you or your loved one.",
      number: '3',
    },
    {
      title: "Start  Care",
      description:
        "Connect with your matched caregiver and begin trusted, quality elderly care.",
      number: '4',
    },
  ];
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:pb-20">
      <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-6 ">
       <div className="w-[565px]  ">
         <img src={HowItWorksImg}  />
       </div>

        {/* Right side */}
        <div className="lg:w-[612px] h-[769px] mt-10 lg:mt-0  px-2">
        {/* <div className=" mt-10 lg:mt-0 bg-red-500"> */}
        
           <div className="flex flex-col items-center justify-center lg:flex-none lg:items-start lg:justify-start">
             <p className="text-base text-[#357ABB] bg-[#F1F7FC] text-center font-normal rounded-lg border border-[#357ABB] px-3 w-[150px] py-2 ">
              How It Works
            </p>
            <h1 className="text-black font-semibold text-xl sm:text-3xl lg:text-4xl  mt-3 sm:w-[534px] text-center lg:text-start">
              How Our Waitlist Works
            </h1>
            <p className="text-[#434343]  lg:w-[472px] text-sm sm:text-base lg:text-xl font-normal mt-1.5 text-center lg:text-start">
              Getting started is easy. Here’s how you’ll join and benefit from
              the HCI Waitlist.
            </p>
           </div>
         
          <div className="flex items-center lg:items-start justify-center lg:justify-start  flex-wrap gap-2 mt-10">
            {howItWorksData.map((data, index) => (
              <div
                key={index}
                className={`w-[288px] p-2 h-card  ${
                  index >= 3 ? "xl:mt-4" : "mt-0"
                }`}
              >
                <div className="w-[62px] h-[62px] bg-[#357ABB] rounded-full flex items-center justify-center">
                  <p className="text-2xl font-medium text-center text-white">{data.number}</p>
                </div>
                <h1 className="text-xl lg:text-2xl font-normal text-black mt-2">
                  {data.title}
                </h1>
                <p className="text-sm lg:text-lg text-[#434343] font-normal mt-2">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
