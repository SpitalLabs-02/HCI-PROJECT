import React, { useState } from "react";
import {
  RiCheckboxCircleLine,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const medicalConditions = [
  "Diabetes",
  "Hypertension (High Blood Pressure)",
  "Dementia/Alzheimer's",
  "Arthritis",
  "Mobility Issues",
  "Stroke Recovery",
  "Others",
];

const MedicalInfo = ({ next, back }) => {
  const [hasCondition, setHasCondition] = useState(""); // "yes" or "no"
  const [selectedCondition, setSelectedCondition] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  return (
    <div className="sm:w-[416px] mx-auto py-8 px-4 sm:px-0 ">
      <h2 className="text-lg font-normal text-black mb-4">
        Do you have any existing medical conditions?
      </h2>

      <div className="flex gap-8 mb-6">
        {["yes", "no"].map((option) => (
          <div
            key={option}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setHasCondition(option);
              if (option === "no") {
                setSelectedCondition("");
                setOtherDetails("");
              }
            }}
          >
            {hasCondition === option ? (
              <RiCheckboxCircleLine size={24} className="text-black " />
            ) : (
              <RiCheckboxBlankCircleLine size={24} className="text-text-black " />
            )}
            <span className="capitalize text-black text-base font-normal">
              {option}
            </span>
          </div>
        ))}
      </div>

      {hasCondition === "yes" && (
        <div className="space-y-4">
          <h3 className="text-lg font-normal text-black mb-2">
            Kindly indicate which condition describes it
          </h3>
          {medicalConditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setSelectedCondition(condition)}
            >
              {selectedCondition === condition ? (
                <RiCheckboxCircleLine size={24} className="text-black " />
              ) : (
                <RiCheckboxBlankCircleLine size={24} className="text-black " />
              )}
              <span className="text-black text-base font-normal">{condition}</span>
            </div>
          ))}

          {selectedCondition === "Others" && (
            <div className="mt-4">
              <textarea
                id="otherDetails"
                rows={1}
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
                placeholder="Tell us in details"
                className="w-full border border-[#6F6F6F] text-sm font-normal text-[#6F6F6F] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          )}
        </div>
      )}

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

export default MedicalInfo;
