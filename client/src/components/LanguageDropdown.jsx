import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const languages = [
  { code: "eng", flag: "https://flagcdn.com/gb.svg" },
  { code: "fra", flag: "https://flagcdn.com/fr.svg" },
  { code: "spa", flag: "https://flagcdn.com/es.svg" },
  { code: "deu", flag: "https://flagcdn.com/de.svg" },
  { code: "ara", flag: "https://flagcdn.com/sa.svg" },
  { code: "zho", flag: "https://flagcdn.com/cn.svg" },
  { code: "swa", flag: "https://flagcdn.com/ke.svg" },
  { code: "ibo", flag: "https://flagcdn.com/ng.svg" },
  { code: "yor", flag: "https://flagcdn.com/ng.svg" },
  { code: "hau", flag: "https://flagcdn.com/ng.svg" },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("eng");
  const [isOpen, setIsOpen] = useState(false);

  const selected = languages.find((lang) => lang.code === selectedLanguage) || {
    name: "Select Language",
    code: "",
    flag: "",
  };

  const handleSelect = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[105px]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-3 py-2 border border-gray-200 rounded-md bg-white text-left"
      >
        <span className="flex items-center gap-2">
          {selected.flag && (
            <img
              src={selected.flag}
              alt={selected.name}
              className="w-5 h-5 object-cover rounded-full"
            />
          )}
          <span className="text-sm text-gray-400">
            {selected.code.toUpperCase()}
          </span>
        </span>
        {isOpen ? (
          <FaChevronUp className=" text-gray-500 text-xs" />
        ) : (
          <FaChevronDown className=" text-gray-500 text-xs" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded shadow-md max-h-60 overflow-y-auto">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="w-5 h-5 object-cover rounded-full"
                />
                <span>{lang.name}</span>
              </span>
              <span className="text-sm text-gray-400">
                {lang.code.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
