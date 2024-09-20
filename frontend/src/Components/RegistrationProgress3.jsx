import React, { useEffect, useState } from "react";

import { LuAlertTriangle } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import { SlCloudUpload } from "react-icons/sl";
import { GrVideo } from "react-icons/gr";
import { FileInput, Label, Table } from "flowbite-react";
import { states } from "../dummy_assets/states.js";
import { Link } from "react-router-dom";

export default function RegistrationProgress3() {
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
            {/* line */}
            <div className="border-t-2 border-[#A95AC0] flex-1"></div>
            <div className="h-4 w-4 rounded-full border bg-[#A95AC0] border-[#A95AC0] flex items-center justify-center p-1">
              <GiCheckMark className="tex-sm font-bold text-white" />
            </div>
            {/* line */}
            <div className="border-t-2 border-[#C6C6C6] flex-1"></div>
            <div className="h-4 w-4 rounded-full border border-[#C6C6C6] flex items-center justify-center bg-white p-1">
              <div className="h-1 w-1 rounded-full bg-[#A95AC0]"></div>
            </div>
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
            Driver Verification
          </p>
          <form className="mt-6 flex flex-col gap-20 gap-y-2 sm:mt-10 text-sm">
            <div className="flex flex-col sm:flex-row gap-40 gap-y-2">
              <div className="flex flex-col w-full gap-2">
                <p className="mb-2 text-lg font-bold">Personal Verification</p>
                <textarea
                  type="text"
                  id="address"
                  placeholder="Address ( include Address Street and House Number )"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                />
                <input
                  type="text"
                  id="busstop"
                  placeholder="Nearby Bus Stop"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                />

                <div className="flex flex-col sm:flex-row w-full gap-2">
                  {/* select State */}
                  <select
                    name="state"
                    id="state"
                    className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
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

                  {/* select LGA - this should be dynamically produced upon choosing state */}
                  <select
                    name="state"
                    id="state"
                    className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                  >
                    <option selected disabled>
                      LGA ...
                    </option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row w-full gap-2">
                  {/* select State */}
                  <select
                    name="state"
                    id="state"
                    className="w-full sm:w-56 border-2 border-[#874899] rounded-lg placeholder:text-sm"
                  >
                    <option selected disabled>
                      BVN or NIN
                    </option>
                    <option value={"bvn"}>BVN</option>
                    <option value={"nin"}>NIN</option>
                  </select>

                  <input
                    type="text"
                    id="id_number"
                    placeholder="BVN or NIN"
                    className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
                  />
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col w-full gap-2">
                <p className="mb-2 text-lg font-bold">
                  Previous Employment Details
                </p>

                <input
                  type="text"
                  id="employer"
                  placeholder="Name of Organisation or Individual"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                />
                <input
                  type="email"
                  id="employer_email"
                  placeholder="Employer's Email Address"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Employer's Phone Number"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                />
                <input
                  type="text"
                  id="contact_name"
                  placeholder="Name of Contact Person"
                  className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                />
                <div className="flex flex-col items-center sm:flex-row w-full gap-2">
                  <input
                    type="text"
                    id="employment_start"
                    placeholder="Employment Start"
                    className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  />
                  <input
                    type="text"
                    id="employment_end"
                    placeholder="Employment End"
                    className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  />
                </div>
                <div className="flex flex-col items-start sm:flex-row w-full gap-2">
                  <input
                    type="text"
                    id="job_title"
                    placeholder="Job Title"
                    className="w-full sm:w-36 border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  />
                  <textarea
                    type="text"
                    id="job_title"
                    placeholder="Job Duties"
                    className="flex-1 border-2 border-[#874899] rounded-lg placeholder:text-sm flex items-center justify-center"
                  />
                </div>
              </div>
            </div>

            <Link
              to="/dashboard?tab=registration-04"
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
