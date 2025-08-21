import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CustomInput from "../../src/components/CustomInput";
import PhoneIcon from "../assets/pn-icon.svg";
import FullNameIcon from "../assets/fn-icon.svg";
import EmailIcon from "../assets/email-icon.svg";
import WaitListFormLogo from "../assets/w-logo.svg";
import { Link } from "react-router";

const WaitListForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    category: "",
    careNeeds: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const categoriesData = [
    { value: "familyMember", label: "Family Member" },
    { value: "careRecipient", label: "Care Recipient" },
    { value: "careGiver", label: "Care Giver" },
  ];

  const careOptions = [
    { value: "companionship", label: "Companionship" },
    { value: "nursing", label: "Nursing" },
    { value: "home-assistance", label: "Home Assistance" },
    { value: "other", label: "Other" },
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, careNeeds: [...prevData.careNeeds, value] };
      } else {
        return {
          ...prevData,
          careNeeds: prevData.careNeeds.filter((item) => item !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true); // switch to success component
  };

  const contactReasons = [
    { value: "support", label: "Support" },
    { value: "sales", label: "Sales" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between bg-white px-2 py-4 h-screen">
        {/* Left side */}
        <div className="bg-[url(/w-bg.svg)] h-[615px] w-[600px] rounded-[30px] hidden lg:block form-bg">
          <div className="py-10 px-10">
            <h1 className="text-6xl text-white font-semibold w-[504px] leading-16 title">
              Secure Your Spot on the HCI Waitlist
            </h1>
            <p className="text-xl text-white font-normal mt-1">
              Fill in your details below to reserve early access to our trusted
              elderly care services.
            </p>

            <img src={WaitListFormLogo} className="absolute bottom-10" />
          </div>
        </div>

        {/* Right side */}
        <div
          className="w-full h-screen overflow-y-auto sm:w-[600px]  mx-auto lg:mx-0 py-12 lg:py-16 px-4 lg:px-0 shadow-2xl lg:shadow-none rounded-lg lg:rounded-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {!submitted ? (
            <form className="sm:w-[454px] mx-auto" onSubmit={handleSubmit}>
              <h1 className="text-[32px] font-semibold text-[#1B1818] mb-5">
                Join the Waitlist
              </h1>
              <CustomInput
                label="Full Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="eg. Jude Jonzz"
                icon={<img src={FullNameIcon} />}
              />

              <CustomInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                icon={<img src={EmailIcon} />}
              />

              <CustomInput
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="eg. 0813***"
                icon={<img src={PhoneIcon} />}
              />

              <CustomInput
                label="Select your category"
                name="reason"
                value={formData.category}
                onChange={handleChange}
                placeholder="Kindly select category"
                options={categoriesData}
                icon={<FaChevronDown />}
              />

              {/* Checkbox Section */}
              <div className="mt-6">
                <p className="block mb-3 font-medium text-black text-base">
                  Preferred Care Needs (Optional)
                </p>
                <div className="">
                  {careOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.careNeeds.includes(option.value)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white cursor-pointer mt-10"
              >
                Join the waitlist
              </button>
            </form>
          ) : (
            // Success Component
            <div className="sm:w-[454px] mx-auto text-center mt-20">
              <h1 className="text-[32px] font-semibold text-[#101928] mb-4">
                You’re on the List!
              </h1>
              <p className="text-[#667185] text-base">
               Thank you for signing up. We’ll notify you as soon as a caregiver is available in your area.
              </p>

              <div className="mt-20 flex items-center gap-4 justify-center">
                <p className="text-base text-black font-normal">Return to</p> <Link to={'/'} className="text-base text-[#357ABB] font-semibold">Homepage</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitListForm;
