import React from "react";
import { Link } from "react-router";

const Successful = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="sm:w-[471px] mx-auto ">
        <h1 className="text-2xl text-[#101928] font-semibold text-center">
          Thank you for submitting your Application
        </h1>
        <p className="text-base text-[#667185] font-normal text-center">
          Your information have been received and are currently being reviewed.
        </p>
        <p className="text-base text-balck font-normal text-center mt-8">
          {" "}
          Back to{" "}
          <Link to={"/login"} className="font-semibold text-[#357ABB]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Successful;
