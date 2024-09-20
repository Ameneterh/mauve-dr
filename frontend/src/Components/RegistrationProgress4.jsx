import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { LuAlertTriangle } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import { SlCloudUpload } from "react-icons/sl";
import { GrVideo } from "react-icons/gr";
import { FileInput, Label, Table } from "flowbite-react";
import { states } from "../dummy_assets/states.js";
import { Link } from "react-router-dom";

export default function RegistrationProgress4() {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

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
            <div className="border-t-2 border-[#A95AC0] flex-1"></div>
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
            Vehicle Information
          </p>
          <form className="mt-6 flex flex-col gap-20 gap-y-2 sm:mt-10 text-sm">
            <div className="flex flex-col w-full max-w-2xl mx-auto gap-2">
              <input
                type="text"
                id="car_brand"
                placeholder="Brand of Car"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
              <input
                type="text"
                id="vehicle_license"
                placeholder="Vehicle License"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
              <input
                type="text"
                id="plate_number"
                placeholder="Vehicle Plate Number"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
              <input
                type="text"
                id="road_worthiness"
                placeholder="Road Worthiness Certificate Number"
                className="w-full border-2 border-[#874899] rounded-lg placeholder:text-sm"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#874899] text-sm text-white hover:opacity-85 py-3 rounded-lg w-full max-w-xl mx-auto mt-8 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Modal
        popup
        size={"sm"}
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="flex items-center justify-center"
      >
        <Modal.Body className="flex flex-col items-center justify-center gap-y-6 text-[#874899] p-8 text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#874899]">
            <GiCheckMark className="tex-3xl font-bold" />
          </div>
          <p className="text-base leading-relaxed font-bold">
            Registration Submitted Successfully
          </p>
          <button
            onClick={() => setOpenModal(false)}
            className="w-16 rounded-lg py-2 px-2 bg-[#874899] text-white"
          >
            OK
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
