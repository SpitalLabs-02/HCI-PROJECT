import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#357ABB] font-normal text-base"
      : "text-black text-base font-normal hover:text-[#357ABB]";
  return (
    <nav className="bg-[#F1F7FC] absolute lg:relative z-20 lg:z-0 w-full">
      <div className=" mx-auto px-4 lg:px-10 xl:px-18 py-4 flex items-center justify-between font-sans">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          <img src={logo} className="w-32 lg:w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center lg:gap-10 xl:gap-24">
          <div className="flex items-center gap-10">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/how-it-works" className={navLinkClass}>
              How it Works
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="py-3 px-6 rounded-full border border-[#357ABB] text-base w-[122px] text-center font-normal text-[#357ABB]"
            >
              Sign In
            </Link>
            <Link
              to="/singup"
              className="py-3 px-6 rounded-full bg-[#357ABB] text-base w-[122px] text-center font-normal text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-8 mt-5 shadow-md">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu} end>
            Home
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={navLinkClass}
            onClick={toggleMenu}
          >
           How it Works
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={toggleMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>
            Contact
          </NavLink>
          <div className="flex flex-col gap-4">
            <Link
              to="/login"
              className="py-2 px-4 rounded-full border border-[#357ABB] text-base text-center font-normal text-[#357ABB]"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="py-2 px-4 rounded-full bg-[#357ABB] text-base text-center font-normal text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
