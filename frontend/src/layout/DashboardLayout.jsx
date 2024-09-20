import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <>
      <main className="min-h-[80vh] w-full bg-slate-50">{children}</main>
    </>
  );
}
