import React, { useRef, useState, useEffect } from "react";

const OTPVerification = ({ onChange, next, back }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) return;

    const newOtp = [...otp];
    newOtp[index] = val[0];
    setOtp(newOtp);
    onChange?.({ target: { name: "otp", value: newOtp.join("") } });

    // Move to next empty input
    for (let i = index + 1; i < 6; i++) {
      if (newOtp[i] === "") {
        inputRefs.current[i]?.focus();
        break;
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        onChange?.({ target: { name: "otp", value: newOtp.join("") } });
      } else if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        onChange?.({ target: { name: "otp", value: newOtp.join("") } });
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="sm:w-[412px] mx-auto mt-10">
      <div className="flex gap-2 justify-between max-w-sm">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-10 h-10 sm:w-12 sm:h-12 text-center py-6 sm:py-7 px-3 border border-[#DFE7F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357ABB] text-lg"
          />
        ))}
      </div>

      <div className="mt-20">
        {/* <button onClick={back} className="px-4 py-2 border rounded">
          Back
        </button> */}
        <button
          onClick={next}
          className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white  cursor-pointer"
        >
          Verify
        </button>

        <p className="text-base text-black font-normal mt-6 text-center">
          Code expires in{" "}
          <span className="text-[#357ABB] font-semibold">{timer}secs</span>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
