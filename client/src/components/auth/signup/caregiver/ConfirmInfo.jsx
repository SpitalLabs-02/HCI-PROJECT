import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const ConfirmInfo = ({ next, back }) => {
  const personalInfoData = [
    {
      label: "Full Name",
      value: "John Adewale Douglas",
    },
    {
      label: "Date of Birth",
      value: "14 March 1990",
    },
    {
      label: "Age",
      value: "34",
    },
    {
      label: "Gender",
      value: "Male",
    },
    {
      label: "Nationality",
      value: "Nigerian",
    },
    {
      label: "Phone Number",
      value: "08012345678",
    },
    {
      label: "Address",
      value: "15, Ajose Street, Lagos",
    },
    {
      label: "State of Origin",
      value: "Lagos",
    },
    {
      label: "Local Government",
      value: "Ikeja",
    },
  ];
  return (
    <div className="sm:w-[532px] mx-auto mt-10">
      {/* Personal details */}
      {personalInfoData.map((info, index) => (
        <div
          key={index}
          className="flex items-center justify-between flex-row mt-3"
        >
          <p className="text-base font-normal text-[#949494]">{info.label}</p>
          <p className="text-base font-normal text-black">{info.value}</p>
        </div>
      ))}

      {/* Button area */}
      <div className="mt-10 sm:mt-20">
        <button
          onClick={next}
          className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white  cursor-pointer"
        >
          Confirm & Continue
        </button>

        <button
          onClick={back}
          className=" flex items-center  gap-3 text-[#357ABB] cursor-pointer text-base font-semibold mx-auto mt-10"
        >
          <IoIosArrowRoundBack size={24} />
          Go Back
        </button>
      </div>
    </div>
  );
};
export default ConfirmInfo;
