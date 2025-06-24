import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon, 
  options, 
  textarea = false,
  togglePassword = false,
  date = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password" && togglePassword;
  const inputType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : type;
  return (
    <div className="mb-6 w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 font-regular text-black text-base"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {textarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={4}
            className="w-full pr-10 px-3 py-2 border border-[#DEDEDE] rounded-md focus:outline-none focus:ring-2  resize-none"
          />
        ) : options ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full pr-10 px-3 py-2 border border-[#DEDEDE] rounded-md focus:outline-none focus:ring-2  appearance-none"
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map(({ value: optValue, label: optLabel }) => (
              <option key={optValue} value={optValue}>
                {optLabel}
              </option>
            ))}
          </select>
        ) : date ? (
          <input
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full pr-10 px-3 py-2 border border-[#DEDEDE] rounded-md focus:outline-none focus:ring-2 "
          />
        ) : (
          <input
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full pr-10 px-3 py-2 border border-[#DEDEDE] rounded-md focus:outline-none focus:ring-2 "
          />
        )}

        {/* Toggle password visibility */}
        {isPasswordType && (
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6F6F6F] cursor-pointer"
          >
            {showPassword ? <LuEye /> : <LuEyeClosed />}
          </div>
        )}

        {/* For icon */}
        {!isPasswordType && icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6F6F6F] pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
