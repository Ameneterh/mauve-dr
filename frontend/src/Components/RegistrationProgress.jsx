import React, { useEffect, useState } from "react";

import { LuAlertTriangle } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import { SlCloudUpload } from "react-icons/sl";
import { GrVideo } from "react-icons/gr";
import { FileInput, Label, Table } from "flowbite-react";
import { drivers } from "../dummy_assets/drivers.js";
import { Link, Navigate } from "react-router-dom";

export default function RegistrationProgress() {
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    setDriver(drivers[0]);
  }, [driver]);

  return (
    <div className="px-2 sm:px-4 py-4 flex flex-col min-h-[80svh] w-full">
      <h1 className="font-extrabold text-2xl text-[#874899]">
        Welcome {driver.name}
      </h1>
      <p>Here are the steps you need to follow to set up your account.</p>
      <div className="px-2 sm:px-6 py-4 flex flex-col min-h-[80svh] w-full bg-[#f2e0f7] rounded-2xl mt-6">
        {/* line showing progress */}
        <div className="flex flex-col w-full max-w-3xl mx-auto">
          <div className="flex items-center w-full h-5 justify-between">
            <div className="h-4 w-4 rounded-full border border-[#A95AC0] flex items-center justify-center bg-white">
              <div className="h-1 w-1 rounded-full bg-[#A95AC0]"></div>
            </div>
            <div className="border-t-2 border-[#A95AC0] flex-1"></div>
            <div className="h-4 w-4 rounded-full border border-[##C6C6C6] flex items-center justify-center bg-white"></div>
            <div className="border-t-2 border-[#C6C6C6] flex-1"></div>
            <div className="h-4 w-4 rounded-full border border-[##C6C6C6] flex items-center justify-center bg-white"></div>
          </div>
          <div className="flex items-center w-full justify-between">
            <p className="text-xs">Step 1</p>
            <p className="text-xs">Step 2</p>
            <p className="text-xs">Step 3</p>
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col w-full max-w-3xl mx-auto border h-full mt-4">
          <p className="text-[#874899] text-sm font-semibold">Driver Profile</p>
          <form className="mt-2 flex flex-col gap-2 gap-y-2">
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <input
                type="date"
                id="dob"
                placeholder="Date of Birth"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
              <input
                type="number"
                id="age"
                placeholder="Age"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
              <select
                name="religion"
                id="religion"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              >
                <option selected disabled>
                  Religion ...
                </option>
                <option value="africantrad">
                  African Traditional Religion
                </option>
                <option value="atheist">Atheist</option>
                <option value="budhist">Budhist</option>
                <option value="christianity">Christianity</option>
                <option value="muslim">Muslim</option>
                <option value="other">Others</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-2">
              <input
                type="text"
                id="state"
                placeholder="What state do you reside in?E.g  Abuja"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
              <input
                type="text"
                id="location"
                placeholder="Where are you currently based ? E.g  Wuse"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-2">
              <input
                type="text"
                id="maritalstatus"
                placeholder="Marital Status: Single, Married, Others"
                className="w-full sm:w-1/2 border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-2">
              <Label
                htmlFor="cv"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#874899] bg-white hover:bg-gray-50 text-[#874899]"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <SlCloudUpload className="text-7xl" />
                  <p className="mb-2 text-sm">
                    <span className="font-semibold">Click to upload</span> your
                    CV
                  </p>
                  <p className="text-xs">PDF, DOC, DOCX, TXT</p>
                </div>
                <FileInput id="cv" className="hidden" />
              </Label>

              <Label
                htmlFor="video"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#874899] bg-white hover:bg-gray-50 text-[#874899]"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <GrVideo className="text-7xl" />
                  <p className="mb-2 text-sm">
                    <span className="font-semibold">
                      Upload a 1 min About You video
                    </span>
                  </p>
                </div>
                <FileInput id="video" className="hidden" />
              </Label>
            </div>

            <Link
              to="/dashboard?tab=registration-02"
              className="bg-[#874899] text-sm text-white hover:opacity-85 py-3 rounded-lg w-full max-w-xl mx-auto mt-8 text-center"
            >
              Continue
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
