import React from "react";
import { Link } from "react-router-dom";
import PCSImage from "../../assets/pcs-img.svg";
import { FiArrowRight } from "react-icons/fi";

const PerfectCareSolution = () => {
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:pb-20">
      <div className="bg-[#265782] rounded-2xl flex items-center flex-wrap justify-between p-5 lg:p-14">
        <div className="sm:w-[481px] mx-auto"> 
          <h1 className="text-white font-normal text-2xl sm:text-3xl xl:text-[40px]">
            Ready to Find the Perfect Care Solution?
          </h1>
          <p className="text-base sm:text-xl text-white font-normal mt-3">
            Whether you're seeking care for a loved one or offering your
            caregiving services, we're here to help you every step of the way.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-3 mt-4">
            <Link
              to="/register"
              className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full lg:w-[207px] text-center font-normal text-white flex items-center justify-center gap-3"
            >
              Find a Caregiver
              <FiArrowRight />
            </Link>

            <Link
              to="/login"
              className="py-3 px-4 rounded-full border border-[#C0D6EA] text-base w-full lg:w-[210px] text-center font-normal text-[#C0D6EA]"
            >
              Become a Caregiver
            </Link>
          </div>
        </div>
        {/* Right side */}
        <img src={PCSImage} width={451} className="mt-5 xl:mt-0 mx-auto " />
      </div>
    </div>
  );
};

export default PerfectCareSolution;
