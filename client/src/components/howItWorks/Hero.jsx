import React from "react";

function Hero({ h1, p, isButton }) {
  return (
    <section className="lg:h-[516px] bg-[#F1F7FC] py-5 ">
      <div className="md:w-[775px] text-center pb-24 pt-24  mx-auto p-4">
        <h1 className="text-xl sm:text-3xl md:text-[56px] font-medium">{h1}</h1>
        <p className="text-sm sm:text-xl mt-4">{p}</p>

        {/* toggle */}
        {isButton && (
          <div className="w-[280px] sm:w-[337px] border border-white bg-[#D9E9F7] rounded-full mx-auto px-4 py-3 flex items-center justify-between mt-10">
            <button className="w-[100px] sm:w-[136px] py-4 px-4 rounded-full flex items-center justify-center  bg-[#357ABB] text-sm sm:text-base font-normal text-white">
              Caregivers
            </button>
            <button className="text-sm sm:text-base font-normal text-[#171717] sm:pr-5">
              Care Recipient
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
