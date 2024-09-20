import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { drivers } from "../dummy_assets/drivers.js";
import Divider from "./Divider";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <Navbar fluid rounded className="md:px-14 py-4 sticky top-0 shadow-md z-50">
      <Navbar.Brand href="/">
        <img
          src="/favicon.png"
          className="mr-3 h-12 sm:h-16"
          alt="mauve Logo"
        />
        <p className="self-center whitespace-nowrap text-2xl sm:text-3xl font-bold text-[#A95AC0]">
          Mauve
          <span className="block text-xs sm:text-sm">Driver Recruit</span>
        </p>
      </Navbar.Brand>
      <div className="flex gap-3 items-center md:order-2">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={drivers[0].avatar} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{drivers[0].name}</span>
              <span className="block truncate text-sm font-medium">
                {drivers[0].email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <>
            <Link
              to="/log-in"
              className={`h-full flex items-center text-[#A95AC0] border hover:text-white border-[#A95AC0] px-4 py-2 rounded-lg hover:bg-[#af89bb] hover:opacity-55`}
            >
              <FaSignInAlt className="inline-block sm:hidden text-2xl" />
              <span className="hidden sm:inline-block">Sign In</span>
            </Link>
            <Link
              to="/sign-up"
              className={`h-full flex items-center text-[white] bg-[#A95AC0]
              px-4 py-2 rounded-lg hover:opacity-55`}
            >
              <FaSignOutAlt className="inline-block sm:hidden text-2xl" />
              <span className="hidden sm:inline-block">Sign Out</span>
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link active={path === "/"} as="div" className="">
          <Link
            to="/"
            className={`sm:text-[#A95AC0] text-[16px] w-full h-full ${
              path === "/" ? "text-white" : "text-[#A95AC0]"
            }`}
          >
            Home
          </Link>
          {path === "/" ? (
            <hr className="border-[1px] border-[#A95AC0] hidden sm:block" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/service"} as="div">
          <Link
            to="/service"
            className={`sm:text-[#A95AC0] text-[16px] w-full h-full ${
              path === "/service" ? "text-white" : "text-[#A95AC0]"
            }`}
          >
            Service
          </Link>
          {path === "/service" ? (
            <hr className="border-[1px] border-[#A95AC0] hidden sm:block" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as="div">
          <Link
            to="/about"
            className={`sm:text-[#A95AC0] text-[16px] w-full h-full ${
              path === "/about" ? "text-white" : "text-[#A95AC0]"
            }`}
          >
            About
          </Link>
          {path === "/about" ? (
            <hr className="border-[1px] border-[#A95AC0] hidden sm:block" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/price"} as="div">
          <Link
            to="/price"
            className={`sm:text-[#A95AC0] text-[16px] w-full h-full ${
              path === "/price" ? "text-white" : "text-[#A95AC0]"
            }`}
          >
            Price
          </Link>
          {path === "/price" ? (
            <hr className="border-[1px] border-[#A95AC0] hidden sm:block" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as="div">
          <Link
            to="/contact"
            className={`sm:text-[#A95AC0] text-[16px] w-full h-full ${
              path === "/contact" ? "text-white" : "text-[#A95AC0]"
            }`}
          >
            Contact
          </Link>
          {path === "/contact" ? (
            <hr className="border-[1px] border-[#A95AC0] hidden sm:block" />
          ) : (
            <></>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
