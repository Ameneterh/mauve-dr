import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import Divider from "../Components/Divider";
import RatingComponent from "../Components/RatingComponent";
import { Accordion } from "flowbite-react";
import MainLayout from "../layout/MainLayout";

export default function ServicePage() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full text-[#000000] p-4">
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
          <div className="w-full flex flex-col gap-3 justify-center flex-1">
            <Divider />
            <div className="w-full flex flex-col lg:flex-row gap-y-6 items-center justify-between">
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
            <h1 className="text-2xl font-extrabold lg:text-5xl lg:font-semibold">
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
                Once matched, you'll receive details about your driver. Then,
                it's just a matter of getting started and hitting the road!
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
        <section className="w-full mt-4 lg:mt-10 flex flex-col gap-4 lg:gap-14 text-md lg:text-lg p-4 lg:py-8 lg:px-24">
          <div className="p-10 w-full flex flex-col items-center justify-center text-center gap-4 bg-[#f6d7ff]">
            <h1 className="text-[#A95AC0] text-2xl lg:text-4xl font-extrabold">
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

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-24">
            <img src="/mauve_lady.png" className="w-[400px]" />

            <div className="flex-1 flex flex-col gap-4 lg:gap-8">
              <div className="bg-[#A95AC0] text-8xl text-white p-1 w-12 h-16 flex items-center justify-center rounded-md">
                <BiSolidQuoteLeft />
              </div>
              <p className="text-md text-[#A95AC0] font-semibold">
                I recently had the pleasure of using Mauve Driver Recruit to
                hire a driver for our company's transportation needs, and I
                couldn't be more impressed with the experience. From start to
                finish, the process was smooth, professional, and exceeded all
                my expectations.
              </p>
              <p className="font-bold">
                Omowumi Janet,{" "}
                <span className="block font-normal">
                  HR Admiraloverseas Nigeria
                </span>
              </p>
            </div>
          </div>
          <Divider />
        </section>

        {/* Section Four */}
        <section className="w-full mt-4 lg:mt-10 flex flex-col gap-4 lg:gap-14 text-md lg:text-lg p-4 lg:py-8 lg:px-24">
          <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
            <h1 className="text-[#874899] text-3xl font-bold text-center max-w-3xl mx-auto">
              Here are some common FAQs for driver recruitment agencies like
              Mauve Driver Recruit
            </h1>
            <Divider />
            <Accordion collapseAll className="border-none">
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  Do you require guarantors for your drivers?
                </Accordion.Title>

                <Accordion.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, odit excepturi cumque quas autem reprehenderit
                  laudantium numquam ullam, enim repudiandae omnis, dignissimos
                  eligendi eos expedita voluptate. Reiciendis eaque dignissimos
                  illum.
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  What is your vetting process for drivers?
                </Accordion.Title>

                <Accordion.Content>
                  We have a comprehensive multi-step vetting process that
                  includes background checks, employment verification, driving
                  record checks, and reference checks with the provided
                  guarantors. Only candidates who clear all these steps
                  successfully are recruited.
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  What vehicle types do you provide drivers for?
                </Accordion.Title>

                <Accordion.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, odit excepturi cumque quas autem reprehenderit
                  laudantium numquam ullam, enim repudiandae omnis, dignissimos
                  eligendi eos expedita voluptate. Reiciendis eaque dignissimos
                  illum.
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  Do you offer temporary/contract or permanent driver
                  placements?
                </Accordion.Title>

                <Accordion.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, odit excepturi cumque quas autem reprehenderit
                  laudantium numquam ullam, enim repudiandae omnis, dignissimos
                  eligendi eos expedita voluptate. Reiciendis eaque dignissimos
                  illum.
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  How do you ensure driver quality and performance?
                </Accordion.Title>

                <Accordion.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, odit excepturi cumque quas autem reprehenderit
                  laudantium numquam ullam, enim repudiandae omnis, dignissimos
                  eligendi eos expedita voluptate. Reiciendis eaque dignissimos
                  illum.
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  What areas or locations do you service?
                </Accordion.Title>

                <Accordion.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, odit excepturi cumque quas autem reprehenderit
                  laudantium numquam ullam, enim repudiandae omnis, dignissimos
                  eligendi eos expedita voluptate. Reiciendis eaque dignissimos
                  illum.
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-bold">
                  Can I interview and test drivers before hiring?
                </Accordion.Title>

                <Accordion.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, odit excepturi cumque quas autem reprehenderit
                  laudantium numquam ullam, enim repudiandae omnis, dignissimos
                  eligendi eos expedita voluptate. Reiciendis eaque dignissimos
                  illum.
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Divider />
          </div>
        </section>

        {/* Section Five */}
        <section></section>
      </div>
    </MainLayout>
  );
}
