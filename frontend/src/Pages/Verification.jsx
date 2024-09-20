import React from "react";
import bg_image from "/bg_image.png";
import { Button, TextInput } from "flowbite-react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export default function Verification() {
  return (
    <MainLayout>
      <div
        className="min-h-screen w-full flex justify-center p-4 md:py-14"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="w-full lg:w-[450px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-4 p-5 md:px-8 md:py-8 rounded-2xl bg-white shadow-xl relative">
            <Link to="/sign-up" className="">
              <MdClose className="absolute top-3 right-3 hover:bg-slate-100 hover:shadow-md p-1 w-6 h-6 rounded-full" />
            </Link>
            <h2 className="text-2xl font-bold text-[#A95AC0]">
              Verification Code
            </h2>
            <p className="text-sm text-center">
              A unique code has been sent to your email address. Please check
              and enter the code below to complete the sign up process
            </p>
            <div className="w-full p-2 flex items-center justify-between">
              <TextInput className="w-10 flex items-center justify-center text-center" />
              <TextInput className="w-10 flex items-center justify-center text-center" />
              <TextInput className="w-10 flex items-center justify-center text-center" />
              <TextInput className="w-10 flex items-center justify-center text-center" />
              <TextInput className="w-10 flex items-center justify-center text-center" />
              <TextInput className="w-10 flex items-center justify-center text-center" />
            </div>
            <p className="text-sm flex items-center gap-1">
              <Link
                to="#"
                className="text-[#A95AC0] underline underline-offset-2 font-semibold"
              >
                Click Here
              </Link>{" "}
              if you didn't get the code
            </p>
            <Button className="w-full mt-4 md:mt-10 bg-[#A95AC0]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
