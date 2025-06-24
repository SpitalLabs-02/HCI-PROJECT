import React from "react";
import CustomInput from "../../../CustomInput";
import PhoneIcon from "../../../../assets/pn-icon.svg";
import FullNameIcon from "../../../../assets/fn-icon.svg";
import EmailIcon from "../../../../assets/email-icon.svg";

const GuarantorDetails = ({ data, onChange, next, back }) => {
  const relationOptions = [
    { value: "parent", label: "Parent" },
    { value: "sibling", label: "Sibling" },
    { value: "friend", label: "Friend" },
  ];

  return (
    <div className="mt-10 sm:w-[500px] mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          next();
        }}
      >
        <CustomInput
          label="Name"
          name="guarantorName"
          value={data.guarantorName}
          onChange={onChange}
          placeholder={'Enter guarantor"s name'}
          icon={<img src={FullNameIcon} />}
        />
        <CustomInput
          label="Phone Number"
          name="guarantorPhone"
          value={data.guarantorPhone}
          onChange={onChange}
          placeholder={"Enter phone number"}
          icon={<img src={PhoneIcon} />}
        />
        <CustomInput
          label="Email"
          name="guarantorEmail"
          value={data.guarantorEmail}
          onChange={onChange}
          placeholder={'Enter guarantor"s email'}
          icon={<img src={EmailIcon} />}
        />
        <CustomInput
          label="Relationship"
          name="guarantorRelation"
          value={data.guarantorRelation}
          onChange={onChange}
          options={relationOptions}
        />
        <div className="mt-10">
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
export default GuarantorDetails;
