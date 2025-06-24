import React, { useRef, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import UploadIcon from "../../../../assets/upload-icon.svg";
import UploadSuccessIcon from "../../../../assets/upload-success-icon.svg";
import PdfIcon from "../../../../assets/pdf-icon.svg";
import DeleteIcon from "../../../../assets/delete-icon.svg";
import EllipseIcon from "../../../../assets/ellipse-icon.svg";
import { IoCloseOutline } from "react-icons/io5";

const ProfileValidation = ({ back, next}) => {
  const uploadData = [
    {
      icon: <img src={PdfIcon} />,
      fileName: "Professional License",
      uploadDateTime: "11 May, 2025 | 12:24pm",
      uploadSize: "13MB",
    },
    {
      icon: <img src={UploadSuccessIcon} />,
      fileName: "Government-issued ID",
      uploadDateTime: "11 May, 2025 | 12:24pm",
      uploadSize: "13MB",
    },
    {
      icon: <img src={UploadSuccessIcon} />,
      fileName: "Certifications",
      uploadDateTime: "11 May, 2025 | 12:24pm",
      uploadSize: "13MB",
    },
  ];

  const fileInputRef = useRef(null);
  const [fileInfo, setFileInfo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
      });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="sm:w-[400px] mx-auto">
      {/* Upload area */}
      <div
        onClick={handleUploadClick}
        className="w-full cursor-pointer border-2 border-dashed border-[#D0D5DD] bg-[#F7F9FC] rounded-2xl py-8"
      >
        <img src={UploadIcon} className="mx-auto" alt="Upload" />
        <p className="text-sm text-center text-[#357ABB] font-semibold">
          Tap to upload document
        </p>
        <p className="text-xs font-normal text-gray-400 text-center">
          JPG, PNG or PDF (max. 800x400px)
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* File info display */}
      {fileInfo && (
        <div className="mt-4 text-sm text-gray-700 flex flex-col items-center">
          <p>
            <span className="font-medium">File:</span> {fileInfo.name}
          </p>
          <p>
            <span className="font-medium">Size:</span> {fileInfo.size}
          </p>
        </div>
      )}

      <div className="flex items-center gap-4 mt-5">
        <p className="text-base font-semibold text-gray-500">Uploaded Files</p>

        <div className="w-6 h-6 rounded-full text-white text-xs font-semibold bg-[#357ABB] flex items-center justify-center">
          2
        </div>
      </div>

      {/* Uploaded and uploading files */}

      {uploadData.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-[#F0F2F5] py-4"
        >
          <div className="flex items-center gap-4">
            {file.icon}
            <div>
              <p className="text-xs sm:text-sm font-normal text-black">
                {file.fileName}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-normal flex gap-1 flex-wrap sm:flex-nowrap">
                {file.uploadDateTime}{" "}
                <span className="flex items-center gap-1">
                  <img src={EllipseIcon} /> {file.uploadSize}
                </span>
              </p>
            </div>
          </div>
          {index === 0 ? (
            <div className="flex items-center gap-2">
              <div className="relative w-16 h-16">
                <svg
                  className="absolute transform -rotate-90"
                  width="64"
                  height="64"
                >
                  {/* Gray background circle */}
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E7EB" // Tailwind's gray-200
                    strokeWidth="6"
                    fill="none"
                  />
                  {/* Progress bar circle */}
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#357ABB"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset={176 * (1 - 0.25)} // 25% progress
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex items-center justify-center h-full text-blue-600 font-bold text-sm">
                  25%
                </div>
              </div>

              <IoCloseOutline
                className="text-gray-400 cursor-pointer"
                size={28}
              />
            </div>
          ) : (
            <>
              <img src={DeleteIcon} className="cursor-pointer" />
            </>
          )}
        </div>
      ))}

      <div className="mt-5">
        <button
          onClick={next}
          className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-full hover:bg-blue-700 text-center font-normal text-white mt-10 cursor-pointer"
        >
          Submit for Review
        </button>
      </div>
    </div>
  );
};
export default ProfileValidation;
