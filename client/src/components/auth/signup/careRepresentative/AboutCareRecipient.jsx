import React, { useState } from "react";
import CustomInput from "../../../CustomInput";
import FullNameIcon from "../../../../assets/fn-icon.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

const AboutCareRecipient = ({ next, back }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dOB: "",
    gender: "",
    language: "",
    state: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const dropdownOptions = {
    language: [
      { value: "english", label: "English" },
      { value: "yoruba", label: "Yoruba" },
    ],
    gender: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    state: [
      { value: "lagos", label: "Lagos" },
      { value: "portHarcourt", label: "Port Harcourt" },
    ],
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          next();
        }}
      >
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            icon={<img src={FullNameIcon} />}
            placeholder={"Eg. Wisdom Nic"}
          />
          <CustomInput
            label="Date of Birth"
            name="dOB"
            type="date"
            value={formData.dOB}
            onChange={handleChange}
            placeholder={"Enter DOB"}
            date={true}
          />
        </div>

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={dropdownOptions.gender}
            icon={<FaChevronDown />}
          />
          <CustomInput
            label="Language Fluency"
            name="language"
            value={formData.language}
            onChange={handleChange}
            options={dropdownOptions.language}
            icon={<FaChevronDown />}
          />
        </div>

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="State of Residence"
            name="state"
            value={formData.state}
            onChange={handleChange}
            options={dropdownOptions.state}
            icon={<FaChevronDown />}
          />
          <CustomInput
            label="Residential Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder={"Enter your address"}
          />
        </div>

        {/* Button area */}
        <div className="mt-10 sm:mt-20">
          <button
            type="submit"
            className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white mt-10 sm:mt-20 cursor-pointer"
          >
            Continue
          </button>

          <button
            onClick={back}
            className=" flex items-center  gap-3 text-[#357ABB] cursor-pointer text-base font-semibold mx-auto mt-10"
          >
            <IoIosArrowRoundBack size={24} />
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutCareRecipient;
