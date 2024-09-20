import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {
  IoMdSettings,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import { BsCardChecklist } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";

export default function DashSidebar() {
  const [tab, setTab] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setTab("dashboard");
  }, []);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [window.innerWidth]);

  return (
    <div className="sticky top-0 left-0 border-r-2 border-r-white w-full py-4 max-h-screen">
      <Link to={"/"}>
        <img src="/mauve_logo.png" alt="" className="h-16 mb-8 px-4" />
      </Link>
      <p
        className="pl-4 sm:hidden flex items-center gap-2"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        Side Bar {showSidebar ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </p>

      {showSidebar && (
        <div
          className={`flex flex-col justify-between h-[70svh] sm:h-[80svh] w-full py-4`}
        >
          <div>
            <div className="h-20 w-ful pr-4 flex flex-col gap-2">
              {/* dashboard component */}
              <div className="flex items-center gap-4">
                <div
                  className={`${
                    tab === "dashboard" ? "bg-[#A95AC0]" : ""
                  } h-12 w-3.5 -ml-2 rounded-lg`}
                ></div>
                <Link
                  to={"/dashboard?tab=dashboard"}
                  onClick={() => setTab("dashboard")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    tab === "dashboard"
                      ? "font-bold text-[#A95AC0]"
                      : "text-[#B1B1B1]"
                  }`}
                >
                  <MdHome className="text-2xl" />
                  <p className={`text-sm`}>Dashboard</p>
                </Link>
              </div>

              {/* registration progress component */}
              <div className="flex items-center gap-4">
                <div
                  className={`${
                    tab === "registration-01" ? "bg-[#A95AC0]" : ""
                  } h-12 w-3.5 -ml-2 rounded-lg`}
                ></div>
                <Link
                  to={"/dashboard?tab=registration-01"}
                  onClick={() => setTab("registration-01")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    tab === "registration-01"
                      ? "font-bold text-[#A95AC0]"
                      : "text-[#B1B1B1]"
                  }`}
                >
                  <BsCardChecklist className="text-2xl" />
                  <p
                    className={`text-sm ${
                      tab === "registration-01"
                        ? "font-bold text-[#A95AC0]"
                        : "text-[#B1B1B1]"
                    }`}
                  >
                    Registration Progress
                  </p>
                </Link>
              </div>

              {/* application status component */}
              <div className="flex items-center gap-4">
                <div
                  className={`${
                    tab === "status" ? "bg-[#A95AC0]" : ""
                  } h-12 w-3.5 -ml-2 rounded-lg`}
                ></div>
                <Link
                  to={"/dashboard?tab=status"}
                  onClick={() => setTab("status")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    tab === "status"
                      ? "font-bold text-[#A95AC0]"
                      : "text-[#B1B1B1]"
                  }`}
                >
                  <FaRegPenToSquare className="text-2xl" />
                  <p
                    className={`text-sm ${
                      tab === "status"
                        ? "font-bold text-[#A95AC0]"
                        : "text-[#B1B1B1]"
                    }`}
                  >
                    Application Status
                  </p>
                </Link>
              </div>

              {/* driver profiles component */}
              <div className="flex items-center gap-4">
                <div
                  className={`${
                    tab === "profile" ? "bg-[#A95AC0]" : ""
                  } h-12 w-3.5 -ml-2 rounded-lg`}
                ></div>
                <Link
                  to={"/dashboard?tab=profile"}
                  onClick={() => setTab("profile")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    tab === "profile"
                      ? "font-bold text-[#A95AC0]"
                      : "text-[#B1B1B1]"
                  }`}
                >
                  <FaUser className="text-2xl" />
                  <p
                    className={`text-sm ${
                      tab === "profile"
                        ? "font-bold text-[#A95AC0]"
                        : "text-[#B1B1B1]"
                    }`}
                  >
                    Driver Profile
                  </p>
                </Link>
              </div>

              {/* Settings component */}
              <div className="flex items-center gap-4">
                <div
                  className={`${
                    tab === "settings" ? "bg-[#A95AC0]" : ""
                  } h-12 w-3.5 -ml-2 rounded-lg`}
                ></div>
                <Link
                  to={"/dashboard?tab=settings"}
                  onClick={() => setTab("settings")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    tab === "settings"
                      ? "font-bold text-[#A95AC0]"
                      : "text-[#B1B1B1]"
                  }`}
                >
                  <IoMdSettings className="text-2xl" />
                  <p
                    className={`text-sm ${
                      tab === "settings"
                        ? "font-bold text-[#A95AC0]"
                        : "text-[#B1B1B1]"
                    }`}
                  >
                    Settings
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <button className="bg-[#FF0000] w-24 px-4 py-2 mx-auto text-white text-sm rounded-md hover:opacity-55">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
