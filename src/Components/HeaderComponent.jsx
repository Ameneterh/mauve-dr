import { Button, Navbar, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="w-full mt-4 lg:mt-6 px-3 lg:px-14 flex gap-4 lg:gap-12 items-center justify-between">
      <img
        src="/mauve_logo.png"
        alt="mauve logo"
        className=" h-10 lg:h-[60px]"
      />
      <div className="px-8 bg-[#D484EA] hidden lg:flex items-center justify-center gap-4 h-10 rounded-md text-sm">
        <Link
          to="/"
          className={`h-full flex items-center px-2 ${
            path === "/" ? "bg-white text-[#D484EA]" : "bg-[#D484EA] text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/service"
          className={`h-full flex items-center px-2 ${
            path === "/service"
              ? "bg-white text-[#D484EA]"
              : "bg-[#D484EA] text-white"
          }`}
        >
          Service
        </Link>
        <Link
          to="/about"
          className={`h-full flex items-center px-2 ${
            path === "/about"
              ? "bg-white text-[#D484EA]"
              : "bg-[#D484EA] text-white"
          }`}
        >
          About
        </Link>
        <Link
          to="/price"
          className={`h-full flex items-center px-2 ${
            path === "/price"
              ? "bg-white text-[#D484EA]"
              : "bg-[#D484EA] text-white"
          }`}
        >
          Price
        </Link>
        <Link
          to="/log-in"
          className={`h-full flex items-center px-2 ${
            path === "/log-in"
              ? "bg-white text-[#D484EA]"
              : "bg-[#D484EA] text-white"
          }`}
        >
          Log-in
        </Link>
        <Link
          to="/sign-up"
          className={`h-full flex items-center px-2 ${
            path === "/sign-up"
              ? "bg-white text-[#D484EA]"
              : "bg-[#D484EA] text-white"
          }`}
        >
          Sign-up
        </Link>
      </div>

      {/* search */}
      <input
        type="text"
        className="hidden lg:inline-block rounded-full w-10 lg:w-56 border-[#D484EA]"
      />

      {/* dropdown */}
      <div
        className="inline-block lg:hidden cursor-pointer"
        onClick={() => setMenuVisible(true)}
      >
        <BiMenuAltRight className="text-3xl text-[#D484EA]" />
      </div>

      {/* dropdown menu */}
      <div
        className={`flex flex-col h-56 bg-slate-950 opacity-75 absolute top-0 right-0 overflow-hidden transition-all ${
          menuVisible === true ? "w-full sm:w-96" : "w-0"
        }`}
      >
        <div
          className="flex items-center gap-1 text-white cursor-pointer p-2"
          onClick={() => setMenuVisible(false)}
        >
          <RiArrowGoBackLine />
          Back
        </div>
      </div>
    </div>
  );
}
