import React, { useEffect, useState } from "react";

import { LuAlertTriangle } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import { FaRegPaperPlane, FaRegPenToSquare } from "react-icons/fa6";
import { VscChecklist } from "react-icons/vsc";
import { BsCardChecklist } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import DashVerifyComponent from "./DashVerifyComponent";
import image from "/dash_comp.png";
import { Table } from "flowbite-react";
import { clients } from "../dummy_assets/clients.js";
import { drivers } from "../dummy_assets/drivers.js";

export default function DashboardComponent() {
  const progress_icon = <LuAlertTriangle className="text-7xl" />;
  const rejected_icon = <RxCross1 className="text-7xl" />;
  const approved_icon = <GiCheckMark className="text-7xl" />;

  const [regProgress, setRegProgress] = useState("inprogress");
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    setDriver(drivers[0]);
  }, [driver]);

  return (
    <div className="px-2 sm:px-6 py-4 flex flex-col w-full">
      {/* bottom portion */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6 mt-2 sm:mt-4">
        {/* left side */}
        <div className="w-full sm:w-4/5">
          {/* hero */}
          <div className="w-full h-60 rounded-[28px] p-4 sm:p-10 bg-gradient-to-r from-[#A95AC0] to-[#cb9cda] flex justify-between relative">
            <div className="z-10 h-full place-content-end">
              <h1 className="text-xl sm:text-3xl font-bold text-white">
                Refer and <span className="text-[#FBBC04]">Earn</span>
              </h1>
              <button className="flex items-center bg-white rounded-full px-4 py-1 mt-6 text-[#A95AC0] shadow-md hover:scale-110 transition-all duration-500">
                Refer <FaRegPaperPlane className="ml-1" />
              </button>
            </div>
            <img src={image} alt="" className="absolute -bottom-1 right-0" />
          </div>

          {/* quick links */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-4 mt-6 sm:mt-10">
            <div className="p-3 w-full rounded-full border flex items-center justify-center font-medium shadow-lg text-[#A95AC0]">
              <BsCardChecklist className="mr-1 text-xl" /> Registration Progress
            </div>
            <div className="p-3 w-full rounded-full border flex items-center justify-center font-medium shadow-lg text-[#A95AC0]">
              <FaUser className="mr-1 text-xl" /> Driver Profiles
            </div>
            <div className="p-3 w-full rounded-full border flex items-center justify-center font-medium shadow-lg text-[#A95AC0]">
              <FaRegPenToSquare className="mr-1 text-xl" /> Application Status
            </div>
            <div className="p-3 w-full rounded-full border flex items-center justify-center font-medium shadow-lg text-[#A95AC0]">
              <VscChecklist className="mr-1 text-xl" />
              History
            </div>
          </div>

          {/* history */}
          <div className="w-full flex flex-col p-2 mt-4 sm:mt-10">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-xl font-bold">History</h1>
              <select name="year" id="year" className="rounded-lg">
                <option value="2024">2024</option>
                <option value="2024">2023</option>
                <option value="2024">2022</option>
              </select>
            </div>

            <div className="w-full mt-4 sm:mt-10">
              <div className="overflow-x-auto">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>Client Name</Table.HeadCell>
                    <Table.HeadCell>Month</Table.HeadCell>
                    <Table.HeadCell>Rating</Table.HeadCell>
                    <Table.HeadCell>Recommendations</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {clients &&
                      clients.map((client, index) => (
                        <Table.Row
                          key={index}
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {client.name}
                          </Table.Cell>
                          <Table.Cell>{client.month}</Table.Cell>
                          <Table.Cell>{client.rating}</Table.Cell>
                          <Table.Cell>{client.recommendations}</Table.Cell>
                        </Table.Row>
                      ))}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full sm:w-1/5 h-screen flex flex-col">
          {/* if in progress */}
          {regProgress === "inprogress" && (
            <DashVerifyComponent
              text={"Verification in Progress"}
              text_color="#FC7900"
              icon={progress_icon}
            />
          )}
          {/* if rejected */}
          {regProgress === "rejected" && (
            <DashVerifyComponent
              text={"Verification Rejected"}
              text_color="#FF0000"
              icon={rejected_icon}
            />
          )}
          {/* if */}
          {regProgress === "approved" && (
            <DashVerifyComponent
              text={"Verification Approved"}
              text_color="#34A853"
              icon={approved_icon}
            />
          )}

          <div className="mt-4 sm:mt-10">
            <h1 className="text-xl font-medium mt-4">Recent Activities:</h1>
            <div className="text-sm flex flex-col p-2 sm:p-4 shadow-xl rounded-2xl border-2 mt-4">
              {driver.activities ? (
                <>
                  <div className="mb-3">
                    <p className="font-medium line-clamp-1">
                      {driver.activities.slice(0, 1)[0].activity}
                    </p>
                    <p className="text-[#A95AC0]">
                      {driver.activities.slice(0, 1)[0].date}
                    </p>
                  </div>
                  {driver.activities.slice(1).map((activity, index) => (
                    <div key={index} className="mb-3 opacity-30">
                      <p className="font-medium line-clamp-1">
                        {activity.activity}
                      </p>
                      <p className="text-[#A95AC0]">{activity.date}</p>
                    </div>
                  ))}
                </>
              ) : (
                "No recent activities"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
