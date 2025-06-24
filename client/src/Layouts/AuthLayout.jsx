import React, { useState } from "react";
import { Outlet } from "react-router";
import logo from "../assets/logo.svg";
import LanguageDropdown from "../components/LanguageDropdown";

const AuthLayout = () => {
    const [language, setLanguage] = useState("");
    
  return (
    <div>
      <div className="flex items-center justify-between p-4 sm:p-6">
        <img src={logo} className="w-32 lg:w-auto" />

        <LanguageDropdown  />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
