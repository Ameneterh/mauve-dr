import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { drivers } from "../dummy_assets/drivers.js";

export default function DashboardHeader() {
  const [driver, setDriver] = useState([]);
  const [notification, setNotification] = useState(true);

  useEffect(() => {
    setDriver(drivers[0]);
  }, [driver]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-y-4 items-center justify-between">
      <div className="w-full md:w-56">
        <p className="flex items-center">
          <CiLocationOn className="text-[#A95AC0]" /> <span>Location</span>
        </p>
        <select
          name="location"
          id="location"
          className="rounded-lg border-none shadow-md w-full font-bold"
        >
          <option value="Ikeja-Lagos">{driver.location}</option>
        </select>
      </div>
      <div className="relative w-full md:w-56 flex items-center justify-between bg-white rounded-full shadow-md text-[#A95AC0]">
        <IoSearch className="text-2xl absolute left-1 top-2" />
        <input
          type="text"
          placeholder="enter search text"
          className="rounded-full w-full pl-8 outline-none border-none bg-transparent placeholder-[#A95AC0]"
        />
      </div>
      <div className="w-full md:w-72 flex items-center gap-4 sm:gap-8 justify-between">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 relative">
          <IoIosNotificationsOutline className="text-3xl text-[#FC7900]" />
          <p
            className={`absolute top-2 right-2 h-[8px] w-[8px] p-1 rounded-full border-[2px] border-[#FC7900] text-[10px] flex items-center justify-center ${
              notification === true ? "bg-[#FC7900]" : "bg-white"
            }`}
          ></p>
        </div>
        <div className="flex items-center gap-2 flex-1 rounded-full relative bg-white shadow-md">
          <div className="h-12 w-12 bg-gray-800 rounded-full overflow-hidden">
            <img src={driver.avatar} alt="" />
          </div>
          <p className="font-bold flex-1">{driver.name}</p>
        </div>
      </div>
    </div>
  );
}
