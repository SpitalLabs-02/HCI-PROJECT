import React from "react";
import HeroImage from "../../assets/hero-img.svg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeroAvatar from "../../assets/hero-avatar.png";

const HeroSection = () => {
  const avatarData = [HeroAvatar, HeroAvatar, HeroAvatar];
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-4 bg-[#F1F7FC] pt-24 lg:pt-5">
      <div className="flex items-start justify-between flex-wrap lg:flex-nowrap">
        {/* Left Side */}
        <div className="lg:w-[600px]  lg:pt-18">
          <p className="text-xs text-[#357ABB] text-center font-normal rounded-lg border border-[#357ABB] px-2 w-[200px] py-2 ">
            Trusted Elderly Care Services
          </p>

          <h1 className="text-black font-semibold text-2xl sm:text-3xl xl:text-[40px] mt-5 lg:tracking-wider xl:leading-14">
            Compassionate Care for your Loved Ones
          </h1>
          <p className="text-base text-[#434343] font-normal mt-3">
            Connecting qualified caregivers with seniors who need assistance.
            Our platform makes it easy to find the right care for your specific
            needs.
          </p>

          {/* Hero buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-3 mt-4">
            <Link
              to="/register"
              className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full lg:w-[227px] text-center font-normal text-white flex items-center justify-center gap-3"
            >
              Find Care Services
              <FiArrowRight />
            </Link>

            <Link
              to="/login"
              className="py-3 px-4 rounded-full border border-[#357ABB] text-base w-full lg:w-[156px] text-center font-normal text-[#357ABB]"
            >
              How it Works
            </Link>
          </div>
          {/* Trusted by */}
          <div className="flex items-center justify-center gap-2 lg:justify-start sm:gap-6 mt-5 flex-wrap sm:flex-nowrap">
            <div className="flex items-center">
              {avatarData.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  className={`w-12 h-12 rounded-full border-2 border-white ${
                    index !== 0 ? "-ml-5 sm:-ml-6.5" : ""
                  }`}
                  alt="Avatar"
                />
              ))}
              <p className="text-xs font-normal text-black bg-[#C4C4C4] w-12 h-12 rounded-full border-2 border-white -ml-5 sm:-ml-6.5 flex items-center justify-center">
                +10
              </p>
            </div>

            <p className="text-xs sm:text-sm text-black font-normal">
              Trusted by 2,000+ families nationwide
            </p>
          </div>
        </div>

        {/* Right side */}
          <img src={HeroImage} width={695} className="mt-5 lg:mt-0 mx-auto lg:-ml-12 lg:w-[620px] xl:w-[695px]" />
        <div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
