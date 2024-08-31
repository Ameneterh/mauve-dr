import React from "react";
import { Link } from "react-router-dom";
import heroimage from "/heroimage.png";

export default function HeroComponent() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center mt-4 lg:mt-10 max-w-6xl mx-auto px-2 lg:px-0">
      <div className="w-full flex-1 flex flex-col gap-6">
        <h1 className="font-extrabold text-2xl md:text-5xl text-[#D484EA]">
          Skip the driver search
        </h1>
        <p className="font-semibold text-sm md:text-xl lg:w-96 text-justify">
          Mauve connects you with verified, professional drivers for your
          personal and business needs.
        </p>
        <Link
          to="#"
          className="px-4 py-2 w-32 sm:px-8 sm:py-3 sm:w-40 font-extrabold text-white text-center hover:opacity-80 bg-[#A95AC0] rounded-full"
        >
          Hire Now
        </Link>
      </div>
      <div className="relative w-full md:w-[500px] h-[400px] md:h-[500px]">
        {/* <img src={heroeclipse} className="h-80 absolute bottom-0 right-0" /> */}
        <div className="absolute bottom-0 right-0 w-full md:w-[430px] bg-[#D484EA] h-[280px] md:h-[400px] rounded-full"></div>
        <img
          src={heroimage}
          className="h-[400px] w-[500px] md:h-[600px] md:w-[650px] absolute -bottom-1 -right-2 md:-right-8"
        />
      </div>
    </div>
  );
}
