import React, { useState } from "react";
import EmailIcon from "../../assets/email-icon.svg";
import CustomInput from "../../components/CustomInput";
import { Link } from "react-router";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4  sm:w-[400px] mx-auto">
      <h2 className="text-[28px] font-semibold text-gray-900">Log In</h2>
      <p className="text-base text-[#667185] font-normal text-center sm:w-[400px] mx-auto">
        Enter your credentials to access your account
      </p>
      <form action="" className="mt-5 w-full">
        <CustomInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="abc@gmail.com"
          icon={<img src={EmailIcon} />}
        />

        <CustomInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={"Enter you rpassword"}
          togglePassword={true}
        />

        <p className="text-black font-normal text-base cursor-pointer text-right">
          Forgot password?
        </p>

        <button className="py-3 px-6 rounded-full bg-[#357ABB] text-base  w-full hover:bg-blue-700 text-center font-normal text-white mt-10 sm:mt-20 cursor-pointer">
          Proceed to Sign Up
        </button>

        <p className="text-base text-black font-normal text-center mt-5">
          Don’t have an account? {' '}
          <Link to={"/singup"} className="text-[#357ABB] cursor-pointer font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
