import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-xl font-bold">We're working on it!</p>
        <img src="/notfound.png" className="h-72" />
        <div className="p-[2px] bg-black rounded-full hover:opacity-85 hover:text-white">
          <Link
            to="/"
            className="px-4 py-1 rounded-full bg-[#CA78FA] flex items-center gap-1 border-2 border-white"
          >
            <RiArrowGoBackFill className="h-4 w-6" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
