import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const toggleOptions = ["Care Givers", "Care Recipient"];
const faqData = [
    {
      question: "How do I sign up as a caregiver on the platform?",
      answer:
        "To sign up, click on the 'Sign Up' button on the homepage, select 'Caregiver' during registration, and complete the form with your personal and professional details.",
    },
    {
      question: "How long does the verification and approval process take?",
      answer:
        "The verification process typically takes 3–5 business days, depending on the completeness of your documents and background check results.",
    },
    {
      question: "Is there a background check during onboarding?",
      answer:
        "Yes, all caregivers must undergo a thorough background check to ensure the safety and trust of our clients.",
    },
    {
      question: "How are caregiving assignments or clients matched to me?",
      answer:
        "We match caregivers based on location, availability, qualifications, and the specific needs of the client. You’ll receive notifications for suitable assignments.",
    },
    {
      question: "Can I decline a caregiving request or assignment?",
      answer:
        "Yes, you have the flexibility to accept or decline assignments based on your availability and comfort level.",
    },
  ];
  

const Faq = () => {
  const [toggle, setToggle] = useState(0);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-4 lg:px-10 xl:px-18 py-10 lg:pb-20">
      <div>
        <p className="text-base text-[#357ABB] bg-[#F1F7FC] text-center font-normal rounded-lg border border-[#357ABB] px-3 w-[66px] py-2 mx-auto">
          FAQ
        </p>
        <h1 className="text-black font-medium text-xl sm:text-3xl xl:text-[40px] text-center mt-3">
          Frequently Asked Questions
        </h1>
        <p className="text-[#434343] mx-auto  lg:w-[652px] text-sm sm:text-base lg:text-xl font-normal mt-1.5 text-center">
          Got questions? We've got answers. Find everything you need to know
          about HummingBirds Care Initiative
        </p>
      </div>

      {/* Toggle section */}

      <div className="flex items-center gap-10 justify-center mt-8">
        {toggleOptions.map((label, index) => (
          <button
            key={index}
            className={`text-sm font-medium transition-colors ${
              toggle === index ? "text-[#357ABB]" : "text-[#BAC1CC]"
            }`}
            onClick={() => setToggle(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FAQ */}

      <div className="mt-10">
        {faqData.map((item, index) => (
          <div key={index} className="sm:w-[600px] lg:w-[650px] xl:w-[731px] mx-auto">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center sm:px-4 py-3 sm:py-6 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              <span className="text-xs sm:text-lg font-medium text-black">{item.question}</span>
              {openIndex === index ? (
                <FiMinus className="text-lg" color="#357ABB" size={24} />
              ) : (
                <FiPlus className="text-lg" color="#357ABB" size={24} />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-600 border-t text-xs sm:text-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
