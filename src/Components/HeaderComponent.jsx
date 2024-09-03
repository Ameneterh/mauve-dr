import { Button, Navbar, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Divider from "./Divider";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="w-full py-1 px-3 lg:px-20 lg:py-3 flex gap-4 lg:gap-12 items-center justify-between z-50 sticky top-0 bg-white">
      <Link to="/">
        <img
          src="/mauve_logo.png"
          alt="mauve logo"
          className=" h-[50px] md:h-[60px] lg:h-[70px]"
        />
      </Link>
      <div className="px-8 bg-[#D484EA] hidden lg:flex items-center justify-center gap-4 h-12 rounded-md text-lg">
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
      {/* <input
        type="text"
        className="hidden md:inline-block rounded-full w-10 md:w-56 border-[#D484EA]"
      /> */}

      {/* dropdown */}
      <div
        className="inline-block lg:hidden cursor-pointer"
        onClick={() => setMenuVisible(true)}
      >
        <BiMenuAltRight className="text-4xl text-[#D484EA]" />
      </div>

      {/* dropdown menu */}

      <div
        className={`flex flex-col bg-[#d660f7] absolute top-0 right-0 overflow-hidden transition-all ${
          menuVisible === true ? "w-full min-h-screen p-2" : "w-0 p-0"
        }`}
      >
        <div
          className="flex items-center gap-1 text-white cursor-pointer p-2 hover:text-red-300"
          onClick={() => setMenuVisible(false)}
        >
          <RiArrowGoBackLine />
          Back
        </div>
        <div className="flex-1 p-2 flex flex-col gap-2 text-white text-center">
          <Link
            to="/"
            className="p-2 w-full bg-[#eca8ff] opacity-100 rounded-md hover:bg-[#dcb5e7] hover:text-[#D484EA]"
            onClick={() => setMenuVisible(false)}
          >
            Home
          </Link>
          <Link
            to="/service"
            className="p-2 w-full bg-[#eca8ff] opacity-100 rounded-md hover:bg-[#dcb5e7] hover:text-[#D484EA]"
            onClick={() => setMenuVisible(false)}
          >
            Service
          </Link>
          <Link
            to="/about"
            className="p-2 w-full bg-[#eca8ff] opacity-100 rounded-md hover:bg-[#dcb5e7] hover:text-[#D484EA]"
            onClick={() => setMenuVisible(false)}
          >
            About
          </Link>
          <Link
            to="/price"
            className="p-2 w-full bg-[#eca8ff] opacity-100 rounded-md hover:bg-[#dcb5e7] hover:text-[#D484EA]"
            onClick={() => setMenuVisible(false)}
          >
            Price
          </Link>
          <Link
            to="/log-in"
            className="p-2 w-full bg-[#eca8ff] opacity-100 rounded-md hover:bg-[#dcb5e7] hover:text-[#D484EA]"
            onClick={() => setMenuVisible(false)}
          >
            Log in
          </Link>
          <Link
            to="/sign-up"
            className="p-2 w-full bg-[#eca8ff] opacity-100 rounded-md hover:bg-[#dcb5e7] hover:text-[#D484EA]"
            onClick={() => setMenuVisible(false)}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
