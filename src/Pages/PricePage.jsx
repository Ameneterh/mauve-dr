import React from "react";
import MainLayout from "../layout/MainLayout";

export default function PricePage() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full mb-12 lg:mb-24 p-2 text-sm lg:text-md text-justify">
        <section className="h-screen w-full max-w-6xl mx-auto mt-4 lg:mt-10 p-2 lg:p-6 flex flex-col lg:flex-row items-start justify-between">
          <div className="flex flex-col bg-red-400 h-96 w-40"></div>
          <div className="flex flex-col bg-red-400 h-96 w-40"></div>
          <div className="flex flex-col bg-red-400 h-96 w-40"></div>
        </section>
      </div>
    </MainLayout>
  );
}
