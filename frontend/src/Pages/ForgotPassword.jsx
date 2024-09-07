import React from "react";
import bg_image from "/bg_image.png";
import { Button, TextInput } from "flowbite-react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
        <Link to="/">
          <img src="/mauve_logo.png" />
        </Link>
        <div className="w-full flex flex-col items-center gap-4 p-5 md:px-20 md:py-16 rounded-2xl bg-white shadow-xl relative">
          <Link to="/log-in">
            <MdClose className="absolute top-3 right-3" />
          </Link>
          <h2 className="text-xl font-bold">Forgot Your Password?</h2>
          <p className="text-sm text-center">
            Enter your e-mail and let us help reset your password{" "}
          </p>
          <TextInput
            id="email1"
            type="email"
            placeholder="enter your email"
            required
            className="w-full"
          />
          <Button className="mt-4 md:mt-10 bg-[#CA78FA]">Continue</Button>
        </div>
      </div>
    </div>
  );
}
