import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/heroHome.svg";
import bgimage from "/bg_image.png";

export default function HeroComponent() {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-center px-4 lg:pl-20"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
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

      <div className="w-full lg:w-[600px]">
        <img src={heroimage} className="" />
      </div>
    </div>
  );
}
