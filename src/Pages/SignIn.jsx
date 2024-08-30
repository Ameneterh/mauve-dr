import React from "react";
import signinpix from "/signinpix.png";

export default function SignIn() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-screen max-w-6xl mx-auto mt-4 lg:mt-10 px-2 lg:px-0">
      <div>
        <img src={signinpix} className="w-[501px]" />
      </div>
      <div className=""></div>
    </div>
  );
}
