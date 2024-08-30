import React from "react";
import { Link } from "react-router-dom";
import heroeclipse from "/heroeclipse.png";
import heroimage from "/heroimage.png";

export default function HeroComponent() {
  return (
    <div className="flex justify-between items-center mt-4 lg:mt-10 max-w-6xl mx-auto px-2 lg:px-0 border-2">
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
      <div className="relative lg:w-[500px] bg-black h-[500px]">
        {/* <img src={heroeclipse} className="h-80 absolute bottom-0 right-0" /> */}
        <div className="absolute bottom-0 right-0 lg:w-[544px] bg-red-200 h-[507px] rounded-full">
          <img
            src={heroimage}
            className="h-[700px] w-[822px] absolute -bottom-4 -right-5"
          />
        </div>
      </div>
    </div>
  );
}
