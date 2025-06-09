import React, { useState } from "react";
import { FaChevronDown, FaCommentDots } from "react-icons/fa";
import CustomInput from "../CustomInput";
import PhoneIcon from "../../assets/pn-icon.svg";
import FullNameIcon from "../../assets/fn-icon.svg";
import EmailIcon from "../../assets/email-icon.svg";
import { Link } from "react-router";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const contactReasons = [
    { value: "support", label: "Support" },
    { value: "sales", label: "Sales" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:p-28">
      <form className=" mx-auto">
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 lg:gap-20">
          <CustomInput
            label="Full Name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Eg. Wisdom Nic"
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
        </div>

        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap sm:gap-10 lg:gap-20">
          <CustomInput
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            icon={<img src={PhoneIcon} />}
          />

          <CustomInput
            label="Contact Reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Select a reason"
            options={contactReasons}
            icon={<FaChevronDown />}
          />
        </div>

        <CustomInput
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter message"
          textarea
        />

        <p className="text-lg font-normal text-[#101928] mb-20 text-center sm:text-start">
          I have read and accepted <Link to='/' className="text-[#357ABB]">terms</Link>{" "}
          and <Link to='/' className="text-[#357ABB]">privacy</Link>
        </p>
        <button
          type="submit"
          className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
