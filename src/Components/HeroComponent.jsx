import React from "react";
import { Link } from "react-router-dom";
import heroimage from "/heroimage.png";

export default function HeroComponent() {
  return (
    <div className="flex justify-between items-center mt-4 lg:mt-10 max-w-6xl mx-auto px-2 lg:px-0">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="font-extrabold text-5xl text-[#D484EA]">
          Skip the driver search
        </h1>
        <p className="font-semibold text-xl w-96 text-justify">
          Mauve connects you with verified, professional drivers for your
          personal and business needs.
        </p>
        <Link
          to="#"
          className="px-8 py-3 w-40 font-extrabold text-white text-center hover:opacity-80 bg-[#A95AC0] rounded-full"
        >
          Hire Now
        </Link>
      </div>
      <div className="relative lg:w-[500px] h-[500px]">
        {/* <img src={heroeclipse} className="h-80 absolute bottom-0 right-0" /> */}
        <div className="absolute bottom-0 right-0 lg:w-[430px] bg-[#D484EA] h-[400px] rounded-full"></div>
        <img
          src={heroimage}
          className="h-[600px] w-[650px] absolute -bottom-1 -right-8"
        />
      </div>
    </div>
  );
}
