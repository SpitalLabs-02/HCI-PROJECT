import React from "react";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon, // React node for icon, optional
  options, // for dropdown select (array of {value, label})
  textarea = false,
}) => {
  return (
    <div className="mb-6 w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-regular text-black text-base">
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
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full pr-10 px-3 py-2 border border-[#DEDEDE] rounded-md focus:outline-none focus:ring-2 "
          />
        )}

        {/* Icon container */}
        {icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6F6F6F] pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
