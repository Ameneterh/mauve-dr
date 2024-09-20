import React, { useEffect, useState } from "react";

import { LuAlertTriangle } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import { SlCloudUpload } from "react-icons/sl";
import { GrVideo } from "react-icons/gr";
import { FileInput, Label, Table } from "flowbite-react";
import { states } from "../dummy_assets/states.js";
import { Link } from "react-router-dom";

export default function RegistrationProgress2() {
  return (
    <div className="px-2 sm:px-4 py-4 flex flex-col min-h-[80svh] w-full">
      <h1 className="font-extrabold text-3xl mb-2">
        Registration Progress Tracker
      </h1>
      <div className="px-2 sm:px-6 py-4 flex flex-col min-h-[80svh] w-full bg-[#f2e0f7] rounded-2xl mt-6">
        {/* line showing progress */}
        <div className="flex flex-col w-full max-w-3xl mx-auto">
          <div className="flex items-center w-full h-5 justify-between">
            <div className="h-4 w-4 rounded-full border bg-[#A95AC0] border-[#A95AC0] flex items-center justify-center p-1">
              <GiCheckMark className="tex-sm font-bold text-white" />
            </div>
            <div className="border-t-2 border-[#A95AC0] flex-1"></div>
            <div className="h-4 w-4 rounded-full border border-[##C6C6C6] flex items-center justify-center bg-white p-1">
              <div className="h-1 w-1 rounded-full bg-[#A95AC0]"></div>
            </div>
            <div className="border-t-2 border-[#C6C6C6] flex-1"></div>
            <div className="h-4 w-4 rounded-full border border-[##C6C6C6] flex items-center justify-center bg-white p-1"></div>
          </div>
          <div className="flex items-center w-full justify-between">
            <p className="text-xs">Step 1</p>
            <p className="text-xs">Step 2</p>
            <p className="text-xs">Step 3</p>
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col w-full border h-full mt-1">
          <p className="text-[#874899] text-sm font-semibold text-center">
            Driver's License Information / Driving Experience
          </p>
          <form className="mt-6 flex flex-col gap-20 gap-y-2 sm:mt-10 text-sm">
            <div className="flex flex-col sm:flex-row gap-40 gap-y-2">
              <div className="flex flex-col w-full gap-2">
                <p className="mb-2 text-lg font-bold">
                  Driver's License Information
                </p>
                <input
                  type="text"
                  id="licensenumber"
                  placeholder="Driver's License Number"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                />

                <div className="flex flex-col sm:flex-row w-full gap-2">
                  <p>License Issuing State/Country</p>

                  {/* select country */}
                  <select
                    name="state"
                    id="state"
                    className="w-full sm:w-36 border-2 border-[#874899] rounded-lg placeholder:text-sm"
                  >
                    <option selected disabled>
                      Country ...
                    </option>
                    <option value="nigeria">Nigeria</option>
                  </select>

                  {/* select state */}
                  <select
                    name="state"
                    id="state"
                    className="w-full sm:w-36 border-2 border-[#874899] rounded-lg placeholder:text-sm"
                  >
                    <option selected disabled>
                      State ...
                    </option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="date"
                  id="expiration"
                  placeholder="License Expiration Date"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                />
                <input
                  type="text"
                  id="licenseclass"
                  placeholder="License Class (e.g., Commercial, Non-Commercial)"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                />
              </div>

              {/* right side */}
              <div className="flex flex-col w-full gap-2">
                <p className="mb-2 text-lg font-bold">
                  Driver's License Information
                </p>

                <div className="flex flex-col items-center sm:flex-row w-full gap-2">
                  <p className="text-[#A95AC0] font-bold">
                    Years of driving experience
                  </p>

                  {/* select country */}
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="number"
                      id="yearsofexperience"
                      defaultValue="5"
                      className="w-20 border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                    />
                    <p>year(s)</p>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row w-full gap-2">
                  <p className="text-[#A95AC0] font-bold">
                    Any specialized driving training or certifications (e.g.,
                    defensive driving, first aid)
                  </p>

                  <input
                    type="text"
                    id="yearsofexperience"
                    placeholder="Please, state"
                    className="border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  />
                </div>
                <div className="flex flex-col items-center sm:flex-row w-full gap-2">
                  <p className="text-[#A95AC0] font-bold">
                    Can you drive automatic and manual Vehicles
                  </p>

                  <select
                    type="text"
                    id="yearsofexperience"
                    placeholder="Please, state"
                    className="border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  >
                    <option selected disabled className="text-sm">
                      Select option ...
                    </option>
                    <option value={"yes"}>Yes</option>
                    <option value={"no"}>No</option>
                  </select>
                </div>
                <div className="flex flex-col items-center sm:flex-row w-full gap-2">
                  <p className="text-[#A95AC0] font-bold">
                    Did you learn how to drive from a driving school?
                  </p>

                  <div className="flex-1 flex items-center gap-4 w-full">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="yes"
                        name="drivingschool"
                        value="yes"
                        checked
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="no"
                        name="drivingschool"
                        value="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:flex-row w-full gap-2">
                  <p className="text-[#A95AC0] font-bold">
                    If Yes, what school?
                  </p>

                  <input
                    type="text"
                    id="school"
                    placeholder="Please, state name of school"
                    className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  />
                </div>
              </div>
            </div>

            <Link
              to="/dashboard?tab=registration-03"
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
