import React from "react";
import HeroComponent from "../Components/HeroComponent";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroComponent />

      {/* second section */}
      <div className="flex flex-col md:flex-row items-center bg-[#A95AC0] w-full my-10 pl-2 lg:pl-24 py-2 lg:py-8">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl text-white font-extrabold">
            Become a Mauve Driver
          </h1>
          <p className="text-2xl lg:text-3xl text-white">
            Ready to be part of a successful Team? Join Mauve Today as a Driver
          </p>
          <Link
            to="#"
            className="bg-white rounded-full w-fit px-3 py-3 text-xl font-bold mt-2 lg:mt-10"
          >
            Become a Mauve Driver
          </Link>
        </div>
        <img src="/home-2.png" alt="driver image" className="mt-6 -ml-2" />
      </div>
    </div>
  );
}
