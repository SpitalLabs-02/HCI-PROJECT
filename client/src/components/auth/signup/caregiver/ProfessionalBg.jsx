import React from "react";
import CustomInput from "../../../CustomInput";
import { FaChevronDown } from "react-icons/fa";

const ProfessionalBg = ({ data, onChange, next, back }) => {
  const dropdownOptions = {
    eduLevel: [
      { value: "secondary", label: "Secondary" },
      { value: "tertiary", label: "Tertiary" },
    ],
    language: [
      { value: "english", label: "English" },
      { value: "yoruba", label: "Yoruba" },
    ],
    experience: [
      { value: "1-2", label: "1-2 years" },
      { value: "3-5", label: "3-5 years" },
    ],
    serviceType: [{ value: "nursing", label: "Nursing" }],
    state: [{ value: "lagos", label: "Lagos" }],
  };

  return (
    <div className="mt-10 md:w-[745px] mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          next();
        }}
      >
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="Educational Level"
            name="eduLevel"
            value={data.eduLevel}
            onChange={onChange}
            options={dropdownOptions.eduLevel}
            icon={<FaChevronDown />}
          />
          <CustomInput
            label="Language Fluency"
            name="language"
            value={data.language}
            onChange={onChange}
            options={dropdownOptions.language}
            icon={<FaChevronDown />}
          />
        </div>

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="Experience Level"
            name="experience"
            value={data.experience}
            onChange={onChange}
            options={dropdownOptions.experience}
            icon={<FaChevronDown />}
          />
          <CustomInput
            label="Service Type"
            name="serviceType"
            value={data.serviceType}
            onChange={onChange}
            options={dropdownOptions.serviceType}
            icon={<FaChevronDown />}
          />
        </div>
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="State of Residence"
            name="state"
            value={data.state}
            onChange={onChange}
            options={dropdownOptions.state}
            icon={<FaChevronDown />}
          />
          <CustomInput
            label="Residential Address"
            name="address"
            value={data.address}
            onChange={onChange}
            placeholder={'Enter your address'}
          />
        </div>
        <div className=" mt-10">
          <button
            type="submit"
            className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white mt-10 cursor-pointer"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfessionalBg;
