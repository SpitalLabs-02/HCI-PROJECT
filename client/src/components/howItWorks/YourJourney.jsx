import React from "react";

const YourJourney = () => {
  const yourJourneyData = [
    {
      title: "Create Your Profile",
      text1:
        "Sign up and create a detailed profile, specifying your care needs or services offered. The more information you provide, the better we can match you with the right caregiver or care recipient.",
      text2: "For both Caregivers and Care Recipients",
      serialNumber: '1'
    },
    {
      title: "Browse or Get Matched",
      text1:
        "Explore potential caregivers or care recipients through our platform, or allow our advanced matching algorithm to suggest compatible connections based on your specific requirements.",
      text2: "Find the perfect match for your needs",
      serialNumber: '2'
    },
    {
      title: "Connect & Verify",
      text1:
        "Reach out to potential matches through our secure messaging system. For caregivers, we verify credentials, conduct background checks, and validate references to ensure safety and quality.",
      text2: "All caregivers undergo thorough verification",
      serialNumber: '3'
    },
    {
      title: "Schedule Care",
      text1:
        "Once you've found the right match, use our platform to schedule care sessions. Set up recurring appointments or one-time visits based on your needs, with flexible scheduling options.",
      text2: "Flexible scheduling to fit your lifestyle",
      serialNumber: '4'
    },
    {
      title: "Receive Quality Care",
      text1:
        "Experience compassionate, personalized care in the comfort of your home. Our caregivers provide assistance with daily activities, companionship, and specialized services based on your needs.",
      text2: "Compassionate, professional care",
      serialNumber: '5'
    },
    {
      title: "Provide Feedback",
      text1:
        "After each care session, share your experience through our feedback system. Your insights help maintain our high standards of care and improve our matching process for future connections.",
      text2: "Help us continuously improve our service",
      serialNumber: '6'
    },
  ];
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:py-20 h-screen overflow-hidden">
   {/* <div className=""> */}
   <div className="flex flex-col sm:flex-row h-full">
        {/* Left side */}
        <div className="sm:w-[300px] lg:w-[400px] xl:w-[540px]">
          <h1 className="text-black font-medium text-xl sm:text-3xl xl:text-[40px]">
            Your Journey to Compassionate Care
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-[#434343] font-normal mt-3">
            Discover how Hummingbirds Care Initiative simplifies finding the
            right support for your loved ones, every step of the way.
          </p>
        </div>

        {/* Right side */}
       <div className="mt-5 sm:mt-0 flex-1 overflow-y-auto custom-scrollbar ">
       {yourJourneyData.map((data, index)=>(
         <div key={index} className={` sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[549px] rounded-lg p-2 sm:p-3 md:p-4 xl:p-6 border border-[#DEDEDE] sm:ml-auto ${index >=1 ? 'mt-6' : 'mt-0'}`}>
         {/* Top */}
         <div className="flex items-stretch justify-between gap-4">
           {/* Left */}
           <div className="flex items-center flex-col">
             <div className="w-[33px] h-[47px] rounded-full bg-[#357ABB] flex items-center justify-center">
               <h1 className="text-base sm:text-lg text-center font-semibold text-white">
                 {data.serialNumber}
               </h1>
             </div>
             <div className="w-[3px] h-[150px] sm:h-[220px] md:h-[160px] xl:h-[150px] bg-[#357ABB]" />
           </div>

           {/* Right */}
           <div className="sm:w[230px] xl:w-[436px]">
             <h1 className="text-lg sm:text-xl lg:text-[32px] font-medium text-black">
             {data.title}
             </h1>
             <p className="text-sm sm:text-base font-normal text-black mt-3">
              {data.text1}
             </p>
             <p className="text-xs sm:text-base text-[#357ABB] mt-2">
               {data.text2}
             </p>
           </div>
         </div>

         {/* THE BOTTOM */}
         <div className="h-[261px] w-full rounded-lg bg-[#E9E9E9] mt-6"></div>
       </div>
       ))}
       </div>
      </div>
   {/* </div> */}
    </div>
  );
};

export default YourJourney;
