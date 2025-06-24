import React, { useState } from "react";
import CustomInput from "../../../CustomInput";
import PhoneIcon from "../../../../assets/pn-icon.svg";
import FullNameIcon from "../../../../assets/fn-icon.svg";
import EmailIcon from "../../../../assets/email-icon.svg";

const RepresentativeInfo = ({ next }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nin: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            icon={<img src={EmailIcon} />}
            placeholder={"abc@gmail.com"}
          />
        </div>

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            icon={<img src={PhoneIcon} />}
            placeholder={"Enter phone number"}
          />
          <CustomInput
            label="NIN"
            name="nin"
            value={formData.nin}
            onChange={handleChange}
            placeholder={"Input your NIN"}
          />
        </div>

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 ">
          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={"Create a password"}
            togglePassword={true}
          />
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder={"Re-enter password"}
            togglePassword={true}
          />
        </div>
        <button
          type="submit"
          className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white mt-10 sm:mt-20 cursor-pointer"
        >
          Continue
        </button>

        <p className="text-base text-black font-normal text-center mt-5">
          Already have an account?{" "}
          <span className="text-[#357ABB] cursor-pointer">Log In</span>
        </p>
      </form>
    </div>
  );
};
export default RepresentativeInfo;
