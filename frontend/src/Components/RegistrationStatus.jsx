import React, { useEffect, useState } from "react";

import { LuAlertTriangle } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import DashVerifyComponent from "./DashVerifyComponent.jsx";

export default function RegistrationStatus() {
  const [status, setStatus] = useState("inprogress");

  const progress_icon = <LuAlertTriangle className="text-7xl" />;
  const rejected_icon = <RxCross1 className="text-7xl" />;
  const approved_icon = <GiCheckMark className="text-7xl" />;

  return (
    <div className="px-2 sm:px-4 py-4 flex flex-col min-h-[80svh] w-full items-center justify-center">
      <div className="w-full sm:w-1/5 flex flex-col">
        {/* if in progress */}
        {status === "inprogress" && (
          <DashVerifyComponent
            text_color="#FC7900"
            text={"Verification in Progress"}
            icon={progress_icon}
          />
        )}
        {/* if rejected */}
        {status === "rejected" && (
          <DashVerifyComponent
            text_color="#FF0000"
            text={"Verification Rejected"}
            icon={rejected_icon}
          />
        )}
        {/* if approved */}
        {status === "approved" && (
          <DashVerifyComponent
            text_color="#34A853"
            text={"Verification Approved"}
            icon={approved_icon}
          />
        )}
      </div>
    </div>
  );
}
