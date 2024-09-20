import { useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import DashSidebar from "../Components/DashSidebar";
import DashboardComponent from "../Components/DashboardComponent";
import RegistrationProgress from "../Components/RegistrationProgress";
import RegistrationStatus from "../Components/RegistrationStatus";
import DriverProfile from "../Components/DriverProfile";
import SettingsComponent from "../Components/SettingsComponent";
import DashboardHeader from "../Components/DashboardHeader";
import RegistrationProgress2 from "../Components/RegistrationProgress2";
import RegistrationProgress3 from "../Components/RegistrationProgress3";
import RegistrationProgress4 from "../Components/RegistrationProgress4";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <DashboardLayout>
      <div className="min-h-screen flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="md:w-56">
          <DashSidebar />
        </div>
        <div className="flex flex-col gap-4 px-2 sm:px-6 py-4 w-full">
          <DashboardHeader />

          {/* for dashboard */}
          {tab === "dashboard" && <DashboardComponent />}
          {/* for registration progress */}
          {tab === "registration-01" && <RegistrationProgress />}
          {tab === "registration-02" && <RegistrationProgress2 />}
          {tab === "registration-03" && <RegistrationProgress3 />}
          {tab === "registration-04" && <RegistrationProgress4 />}
          {/* for registration status */}
          {tab === "status" && <RegistrationStatus />}
          {/* for profile ... */}
          {tab === "profile" && <DriverProfile />}
          {/* for settings ... */}
          {tab === "settings" && <SettingsComponent />}
        </div>
      </div>
    </DashboardLayout>
  );
}
