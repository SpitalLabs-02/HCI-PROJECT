import React from "react";
import BenefitIcon1 from  "../../assets/be1.svg"
import BenefitIcon2 from  '../../assets/be2.svg';
import BenefitIcon3 from  '../../assets/be3.svg';
import BenefitIcon4 from  '../../assets/be4.svg';

const Benefit = () => {

    const benefitData = [
        {
          title: "Priority Access",
        description: 'Get matched with vetted caregivers before public launch.',
          icon: BenefitIcon1,
        },
        {
          title: "Exclusive Benefits",
        description: 'Early members enjoy special offers and extra support.',
          icon: BenefitIcon2,
        },
        {
          title: "Trusted & Secure",
        description: '100% background-checked caregivers.',
          icon: BenefitIcon3,
        },
        {
          title: "Save Time",
        description: 'Skip delays with faster onboarding.',
          icon: BenefitIcon4,
        },
        
      ];
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:pb-20">
      <div>
        <p className="text-base text-[#357ABB] bg-[#F1F7FC] text-center font-normal rounded-lg border border-[#357ABB] px-3 w-[150px] py-2 mx-auto">
          Key Benefits
        </p>
        <h1 className="text-black font-semibold text-xl sm:text-3xl lg:text-4xl text-center mt-3 sm:w-[534px] mx-auto">
          Why Join HummingBirds Care Initiative Early?
        </h1>
        <p className="text-[#434343] mx-auto  lg:w-[652px] text-sm sm:text-base lg:text-xl font-normal mt-1.5 text-center">
          We provide comprehensive care services tailored to meet the unique
          needs of every senior, ensuring dignity, comfort, and peace of mind
          for families.
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
        {benefitData.map((data, index)=>(
             <div key={index} className={`w-[250px] sm:w-[298px] lg:w-[280px] h-[220px] sm:h-[305px] border border-[#E3E3E3] p-4 rounded-lg ${index >= 3 ? 'xl:mt-4' : 'mt-0' }`}>
             <img src={data.icon} />
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

export default Benefit;
