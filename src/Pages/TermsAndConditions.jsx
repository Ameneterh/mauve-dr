import React from "react";
import MainLayout from "../layout/MainLayout";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label } from "flowbite-react";

export default function TermsAndConditions() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full mb-12 lg:mb-24 p-2 text-sm lg:text-md text-justify">
        <section className="min-h-screen w-full max-w-3xl mx-auto mt-4 lg:mt-10 flex flex-col gap-2 text-md lg:text-lg shadow-lg rounded-lg border bg-[#F5E2FA]">
          <div className="flex flex-col h-screen p-2 lg:p-6">
            <div className="w-full">
              <Link to="#" className="hover:opacity-80 hover:scale-125">
                <FaArrowLeft />
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 flex-1 overflow-y-scroll p-2 lg:p-8">
              <h1 className="text-xl lg:text-3xl font-extrabold">
                Terms and Conditions
              </h1>
              <h2 className="text-xl font-bold">1. Introduction</h2>
              <p>
                1.1 These terms and conditions govern your use of our website;
                by using our website, you accept these terms and conditions in
                full. If you disagree with these terms and conditions or any
                part of these terms and conditions, you must not use our
                website.
              </p>

              <p>
                1.2 By using our website and agreeing to these terms and
                conditions, you warrant and represent that you are at least 18
                years of age.
              </p>

              <h2 className="text-xl font-bold">
                2. Driver Recruitment Process
              </h2>

              <p>
                2.1 Mauve Driver Recruitment is a platform designed to connect
                potential drivers with job opportunities. Mauve acts solely as
                an intermediary between drivers and prospective employers.
              </p>

              <p>
                2.2 Mauve does not guarantee immediate employment and is not
                responsible for the actions or decisions of the employers who
                use our platform.
              </p>

              <h2 className="text-xl font-bold">3. User Accounts</h2>

              <p>
                3.1 In order to access certain features of our website, you will
                be required to create an account. You agree to provide accurate
                and complete information when creating your account and to
                update such information as needed to keep it accurate and
                current.
              </p>
            </div>
          </div>

          <div className="w-full bg-white p-3 lg:p-6 flex flex-col gap-5">
            <div className="flex items-center gap-1 lg:ml-10 text-[#999BA1]">
              <Checkbox id="agree" />
              <Label htmlFor="agree">
                By clicking this box, you agree to our{" "}
                <Link to="tnc font-bold">Terms & Conditions</Link>
              </Label>
            </div>
            <div className="flex items-center justify-between">
              <Button
                as="div"
                className="w-36 rounded-xl bg-[#A95AC0] text-white cursor-pointer hover:opacity-85"
              >
                Accept
              </Button>
              <Button
                as="div"
                className="w-36 rounded-xl border-2 border-[#A95AC0] text-[#A95AC0] bg-transparent hover:bg-[#A95AC0] hover:text-white cursor-pointer"
              >
                Decline
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
