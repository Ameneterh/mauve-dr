import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function FooterComponent() {
  return (
    <div className="bg-[#A95AC0] p-2 lg:py-8 lg:px-20 pb-8 flex gap-y-4 flex-col md:flex-row justify-between text-white">
      <div className="flex gap-2 items-center">
        <img src="/logo.png" className="h-14 md:h-28" />
        <div className="flex flex-col items-center">
          {/* <h1 className="text-3xl font-extrabold">Mauve</h1> */}
          {/* <p className="text-sm">Driver Recruit</p> */}
          {/* <p className="text-[8px]">connecting professional drivers to you</p> */}
        </div>
      </div>
      <div className="flex flex-col md:gap-2 text-md">
        <h1 className="text-xl font-extrabold">Quick Links</h1>
        <Link to="/" className="hover:underline underline-offset-2">
          Home
        </Link>
        <Link to="/service" className="hover:underline underline-offset-2">
          Services
        </Link>
        <Link to="/about" className="hover:underline underline-offset-2">
          About Us
        </Link>
        <Link to="/log-in" className="hover:underline underline-offset-2">
          Log-in
        </Link>
        <Link to="/sign-up" className="hover:underline underline-offset-2">
          Sign-up
        </Link>
        <Link to="/tnc" className="hover:underline underline-offset-2">
          Terms and Conditions
        </Link>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="text-xl font-extrabold">Help & Support</h1>
        <Link to="/faq" className="hover:underline underline-offset-2">
          FAQ
        </Link>
        <Link to="/blog" className="hover:underline underline-offset-2">
          Blog
        </Link>
        <Link to="/contact" className="hover:underline underline-offset-2">
          Contact
        </Link>
        <Link to="/support" className="hover:underline underline-offset-2">
          Support
        </Link>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="text-xl font-extrabold">Connect with Us</h1>
        <div className="flex gap-3 items-center">
          <Link to="https://www.facabook.com" className="text-3xl">
            <FaFacebook className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
          <Link to="https://www.instagram.com" className="text-3xl">
            <FaInstagramSquare className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
          <Link to="/" className="text-3xl">
            <BiLogoGmail className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
        </div>
      </div>
    </div>
  );
}
