import React, { useState } from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState("caregiver"); // default
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate(`/${selectedRole}`);
  };

  const roles = [
    {
      label: "Caregiver",
      value: "caregiver",
      description:
        "Provide essential services and emotional support to those in need.",
    },
    {
      label: "Care Recipient",
      value: "care-recipient-singup",
      description:
        "Join to access personalized support from trusted caregivers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:w-[520px] mx-auto">
      <h2 className="text-[28px] font-semibold text-gray-900">Sign Up</h2>
      <p className="text-base text-[#667185] font-normal text-center sm:w-[400px] mx-auto">
        Select a role to access tailored features that suit your needs
      </p>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl mt-8">
        {roles.map((role) => {
          const isSelected = selectedRole === role.value;
          return (
            <div
              key={role.value}
              onClick={() => setSelectedRole(role.value)}
              className={`flex-1 border-2 rounded-md p-4 cursor-pointer sm:w-[240px]   ${
                isSelected ? "border-[#357ABB] shadow-md" : "border-[#DFE7F5]"
              }`}
            >
              <div className="flex items-center justify-between">
                <FaRegUser />
                {isSelected ? (
                  <IoMdRadioButtonOn size={24} color="#357ABB" />
                ) : (
                  <IoMdRadioButtonOff size={24} color="black" />
                )}
              </div>
              <h3 className="text-xl font-medium text-black mt-4">
                {role.label}
              </h3>
              <p className="text-base text-black mt-3">{role.description}</p>
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
        <Link to={'/login'} className="text-[#357ABB] cursor-pointer font-semibold">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
