import React, { useState } from "react";
import signuppix from "/signupImage.svg";
import MainLayout from "../layout/MainLayout";
import { Button, Label, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash, FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-40 min-h-screen max-w-6xl mx-auto mt-4 lg:mt-10 px-2 lg:px-0 text-[#9E5998] mb-24">
        <div>
          <img src={signuppix} className="w-[501px]" />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-5 lg:gap-8 w-full">
          <div>
            <h1 className="text-4xl font-bold">Join Us</h1>
            <p className="text-sm text-[#999BA1] mt-2">
              Enjoy the benefit of Mauve Driver Recruit
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="firstname"
                value="First Name"
                className="font-bold text-[#9E5998]"
              />
              <TextInput
                id="firstname"
                type="text"
                placeholder="Ex: Eliza Maguire"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="email"
                value="Your Email"
                className="font-bold text-[#9E5998]"
              />
              <TextInput
                id="email"
                type="email"
                placeholder="Ex: Maguire@FlexUI.com"
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
            className="bg-[#9E5998] hover:opacity-85 cursor-pointer flex items-center flex-row gap-10"
          >
            <span>Create Account</span>
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="flex flex-col lg:flex-row items-center gap-1 text-[#999BA1]">
            By creating an account, you agree to our
            <Link to="/tnc" className="text-[#6236F5] font-semibold">
              Terms & Conditions
            </Link>
          </p>

          <div className="w-full flex flex-col gap-4 ">
            <div className="w-full flex items-center justify-between gap-2 text-[#999BA1]">
              <div className="flex-1 border-b-[1px] border-[#999BA1]"></div>
              <p className="text-sm font-bold">OR</p>
              <div className="flex-1 border-b-[1px] border-[#999BA1]"></div>
            </div>

            <Button
              as="div"
              className="bg-[#F8F8F8] text-[#19191B] hover:opacity-85 cursor-pointer flex items-center flex-row"
            >
              <FaApple className="pr-2 h-6 w-6" />
              Continue with Apple
            </Button>
            <Button
              as="div"
              className="bg-[#F8F8F8] text-[#19191B] hover:opacity-85 cursor-pointer flex items-center flex-row"
            >
              <FcGoogle className="pr-2 h-6 w-6" />
              Continue with Google
            </Button>
            <Button
              as="div"
              className="bg-[#F8F8F8] text-[#19191B] hover:opacity-85 cursor-pointer flex items-center flex-row"
            >
              <FaFacebook className="pr-2 h-6 w-6 text-blue-700" />
              Continue with Facebook
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
