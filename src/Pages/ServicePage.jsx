import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
import Divider from "../Components/Divider";
import RatingComponent from "../Components/RatingComponent";

export default function ServicePage() {
  return (
    <div className="min-h-screen w-full text-[#000000]">
      {/* Section One */}
      <section className="w-full mt-4 lg:mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-md lg:text-lg max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 flex-1">
          <p className="font-semibold">
            Unlock Efficiency: Hire Expert Drivers at Unbeatable Prices!
          </p>
          <h1 className="text-[#A95AC0] text-2xl lg:text-5xl font-bold">
            Get Professional Drivers
            <br /> at Your Fingertips
          </h1>
          <p>
            24/7 Support for Your Peace of Mind
            <span className="block">
              No Hassle, No Technical Skills Required
            </span>
          </p>
          <p className="flex items-center text-[#AC39D4] font-bold">
            <TbCurrencyNaira className="text-xl" />
            28000
            <span className="text-[#000000] font-normal">/one off hire</span>
          </p>
          <p>+ 90 days guarantee replacement at no cost!</p>

          <Link
            to="#"
            className="w-32 mt-2 lg:mt-8 px-4 py-2 bg-[#A95AC0] rounded-lg text-white hover:opacity-85"
          >
            Claim Deal
          </Link>
        </div>
        <img src="/mauve_men.png" className="w-[500px]" />
      </section>

      {/* Star Rating */}
      <section className="w-full mt-4 lg:mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-md lg:text-lg max-w-6xl mx-auto">
        <div className="w-full flex flex-col gap-3 flex-1">
          <Divider />
          <div className="w-full flex items-center justify-between">
            <RatingComponent companyName="Elverde Logistics" />
            <RatingComponent companyName="AdmiraloverseasNigeria" />
            <RatingComponent companyName="Transcorp Int" />
          </div>
          <Divider />
        </div>
      </section>

      {/* Section Two */}
      <section className="w-full mt-4 lg:mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-md lg:text-lg bg-[#bf73d6] p-4 lg:py-16 lg:px-24">
        <div className="text-sm flex flex-col flex-1 gap-4 text-white">
          <h1 className="text-5xl font-semibold">
            Hire A Professional Driver in 3 Simple Steps
          </h1>
          <h3 className="text-xl font-semibold">Tell Us Your Needs</h3>
          <p className="flex gap-1 items-start">
            <span className="flex-1">1.</span>{" "}
            <span>
              Fill out our form to let us know your driver requirements,
              preferences, and any special instructions.
            </span>
          </p>
          <h3 className="text-xl font-semibold">We Match You</h3>
          <p className="flex gap-1 items-start">
            <span className="flex-1">2.</span>
            <span>
              Our expert team matches you with the ideal driver based on your
              criteria, ensuring reliability and professionalism.
            </span>
          </p>
          <h3 className="text-xl font-semibold">Start Driving</h3>
          <p className="flex gap-1 items-start">
            <span className="flex-1">3.</span>
            <span>
              Once matched, you'll receive details about your driver. Then, it's
              just a matter of getting started and hitting the road!
            </span>
          </p>

          <Link
            to="#"
            className="bg-white text-[#A95AC0] w-36 flex items-center justify-center h-10 font-semibold rounded-lg"
          >
            Get Started Now
          </Link>
        </div>
        <img
          src="/mauve_drivers_services-2.jpg"
          className="w-[500px] rounded-br-[50px]"
        />
      </section>

      {/* Section Three */}
      <section className="w-full mt-4 lg:mt-10 flex flex-col lg:flex-row justify-between gap-6 text-md lg:text-lg p-4 lg:py-8 lg:px-24 h-96">
        <div className="p-10 w-full flex flex-col items-center justify-center text-center gap-4 bg-[#f6d7ff]">
          <h1 className="text-[#A95AC0] text-4xl font-extrabold">
            Choose The Best option for you
          </h1>
          <p className="max-w-[700px] mx-auto text-md">
            Take advantage of Mauve Driver Recruit's thoroughly vetted pool of
            professional drivers, meticulously screened through our stringent
            vetting process.
          </p>
          <Link
            to="#"
            className="text-white bg-[#A95AC0] w-36 flex items-center justify-center h-10 font-semibold rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Section Four */}
      <section></section>

      {/* Section Five */}
      <section></section>
    </div>
  );
}
