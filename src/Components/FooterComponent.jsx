import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function FooterComponent() {
  return (
    <div className="bg-[#CA78FA] p-2 lg:py-8 lg:px-20 pb-8 flex gap-y-4 flex-col md:flex-row justify-between text-white">
      <div className="flex gap-2 items-center">
        <img src="/logo.png" className="h-14 md:h-28" />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-extrabold">Mauve</h1>
          <p className="text-sm">Driver Recruit</p>
          <p className="text-[8px]">connecting professional drivers to you</p>
        </div>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="text-3xl font-extrabold">Quick Links</h1>
        <Link to="/" className="hover:underline underline-offset-2 text-xl">
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline underline-offset-2 text-xl"
        >
          About Us
        </Link>
        <Link
          to="/service"
          className="hover:underline underline-offset-2 text-xl"
        >
          Services
        </Link>
        <Link
          to="/price"
          className="hover:underline underline-offset-2 text-xl"
        >
          Pricing
        </Link>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="text-3xl font-extrabold">Help & Support</h1>
        <Link to="/faq" className="hover:underline underline-offset-2 text-xl">
          FAQ
        </Link>
        <Link to="/blog" className="hover:underline underline-offset-2 text-xl">
          Blog
        </Link>
        <Link
          to="/contact"
          className="hover:underline underline-offset-2 text-xl"
        >
          Contact
        </Link>
        <Link
          to="/support"
          className="hover:underline underline-offset-2 text-xl"
        >
          Support
        </Link>
      </div>
      <div className="flex flex-col md:gap-2">
        <h1 className="text-3xl font-extrabold">Connect with Us</h1>
        <div className="flex gap-3 items-center">
          <Link to="https://www.facabook.com" className="text-3xl">
            <FaFacebook className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
          <Link to="/" className="text-3xl">
            <FaInstagramSquare className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
          <Link to="/" className="text-3xl">
            <BiLogoGmail className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
          <Link to="/" className="text-3xl">
            <FaLinkedin className="hover:scale-125 transition-all hover:opacity-50" />
          </Link>
        </div>
      </div>
    </div>
  );
}
