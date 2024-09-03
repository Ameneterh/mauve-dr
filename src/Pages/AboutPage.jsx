import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full mb-12 lg:mb-24 p-2 text-sm lg:text-md text-justify">
        <section className="h-screen w-full max-w-3xl mx-auto mt-4 lg:mt-10 p-2 lg:p-6 flex flex-col gap-2 text-md lg:text-lg shadow-lg rounded-lg border bg-[#F5E2FA]">
          <div className="w-full">
            <Link to="#" className="hover:opacity-80 hover:scale-125">
              <FaArrowLeft />
            </Link>
          </div>
          <div className="flex flex-col gap-4 lg:gap-10 flex-1 overflow-y-scroll p-2 lg:p-8">
            <h1 className="underline underline-offset-2 text-xl lg:text-2xl font-bold uppercase text-center">
              Your Trusted Driver Recruitment Partner
            </h1>
            <p>
              At Mauve Driver Recruit , we are committed to ensuring that
              businesses find the best candidates for their driver requirements.
              Our professional team works tirelessly to match the right drivers
              with the right positions, ultimately contributing to the success
              and efficiency of our clients' operations.
            </p>
            <p>
              At Mauve Driver Recruit, we go beyond traditional recruitment
              services. We understand the critical role that drivers play in the
              success of businesses, and that's why we are dedicated to
              providing comprehensive solutions tailored to our clients' needs.
            </p>
            <p>
              With years of experience in the industry, our team of
              professionals possesses a deep understanding of the unique
              challenges and requirements involved in driver recruitment. We
              leverage this expertise to streamline the hiring process, saving
              our clients time and resources while ensuring they find the
              perfect fit for their driver positions.
            </p>
            <p>
              Our approach is centred around collaboration and partnership. We
              work closely with each client to gain a thorough understanding of
              their specific needs, preferences, and company culture. This
              allows us to tailor our recruitment strategies to identify
              candidates who not only meet the technical requirements but also
              align with the values and goals of our clients' organisations.
            </p>
            <p>
              Transparency, integrity, and professionalism are at the core of
              everything we do. We prioritise open communication and strive to
              build long-lasting relationships based on trust and mutual
              respect. Whether you're a small local business or a large
              corporation, you can count on Mauve Driver Recruit to deliver
              exceptional service and results.
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
