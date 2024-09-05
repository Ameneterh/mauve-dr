import React, { useState } from "react";
import signinpix from "/signinpix.png";
import MainLayout from "../layout/MainLayout";
import { Button, Label, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-40 min-h-screen max-w-6xl mx-auto mt-4 lg:mt-10 px-2 lg:px-0 text-[#9E5998] mb-24">
        <div>
          <img src={signinpix} className="w-[501px]" />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-5 lg:gap-12 w-full">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="text-sm text-[#999BA1] mt-2">
              Please Enter Your Email & Password
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="email"
                value="Email:"
                className="font-bold text-[#9E5998]"
              />
              <TextInput
                id="email"
                type="email"
                placeholder="EX:FemiJames@gmail.com"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="email"
                value="Password:"
                className="font-bold text-[#9E5998]"
              />
              <div className="flex items-center w-full relative">
                <TextInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  // rightIcon={FaEye}
                  placeholder="Enter Password"
                  className="w-full"
                  required
                />
                <span
                  className="absolute right-2 text-[#999BA1] text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          </form>
          <Link to="#" className="font-bold">
            Forgot Password?
          </Link>
          <Button
            as="div"
            className="bg-[#9E5998] hover:opacity-85 cursor-pointer"
          >
            Login
          </Button>
          <p className="flex items-center justify-between">
            Don't have an account?{" "}
            <Link to="/sign-up" className="p-2 px-4 rounded-md bg-[#F8F8F8]">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
