import React, { useState } from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router";

const CareRecipientSignUp = () => {
  const [selectedRole, setSelectedRole] = useState("care-recipient"); // default
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate(`/${selectedRole}`);
  };

  const roles = [
    {
      label: "I am the one receiving Care",
      value: "care-recipient",
      description:
        "Provide essential services and emotional support to those in need.",
    },
    {
      label: "I am a Care Representative",
      value: "care-representative",
      description:
        "Join to access personalized support from trusted caregivers.",
    },
  ];

  return (
    <div className="mt-10 sm:mt-0 flex flex-col items-center justify-center px-4 pb-8 sm:w-[578px] mx-auto">
      <h2 className="text-[28px] font-semibold text-gray-900 text-center">
        Sign Up as a Care Recipient
      </h2>
      <p className="text-base text-[#667185] font-normal text-center sm:w-[400px] mx-auto">
        Select a role to access tailored features that best suit your needs
      </p>
      <div className=" w-full mt-6">
        {roles.map((role) => {
          const isSelected = selectedRole === role.value;
          return (
            <div
              key={role.value}
              onClick={() => setSelectedRole(role.value)}
              className={`flex items-center gap-4 border-2 rounded-lg p-6 mb-5 cursor-pointer   ${
                isSelected ? "border-[#357ABB] shadow-md" : "border-[#DFE7F5]"
              }`}
            >
              {isSelected ? (
                <IoMdRadioButtonOn size={24} color="#357ABB" />
              ) : (
                <IoMdRadioButtonOff size={24} color="black" />
              )}
              <h3 className="text-lg sm:text-xl font-medium text-black">
                {role.label}
              </h3>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleProceed}
        className="py-3 px-6 rounded-full bg-[#357ABB] text-base  w-full hover:bg-blue-700 text-center font-normal text-white mt-10 sm:mt-20 cursor-pointer"
      >
        Proceed to Sign Up
      </button>

      <p className="text-base text-black font-normal text-center mt-5">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="text-[#357ABB] cursor-pointer font-semibold"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default CareRecipientSignUp;
