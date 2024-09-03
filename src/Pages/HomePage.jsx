import React from "react";
import { Link } from "react-router-dom";
import ServicesComponent from "../Components/HomeComponents/ServicesComponent";
import { Carousel } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../testimonials";
import TestimonialComponent from "../Components/HomeComponents/TestimonialComponent";
import HeroComponent from "../Components/HomeComponents/HeroComponent";

export default function HomePage() {
  console.log(testimonials);

  return (
    <div className="">
      <HeroComponent />

      {/* second section */}
      <div className="flex flex-col md:flex-row items-center bg-[#A95AC0] w-full pl-2 lg:pl-24 py-2 lg:py-8">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl text-white font-extrabold">
            Become a Mauve Driver
          </h1>
          <p className="text-2xl lg:text-3xl text-white">
            Ready to be part of a successful Team? Join Mauve Today as a Driver
          </p>
          <Link
            to="#"
            className="bg-white rounded-full w-fit px-3 py-3 text-xl font-bold mt-2 lg:mt-10"
          >
            Become a Mauve Driver
          </Link>
        </div>
        <img src="/home-2.png" alt="driver image" className="mt-6 -ml-2" />
      </div>

      {/* third section */}
      <div className="flex flex-col w-full my-10 pl-2 lg:pl-24 py-2 lg:py-8">
        <div className="text-[#D484EA] text-4xl md:text-6xl font-extrabold">
          Why choose us ?
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full py-2 lg:py-8">
          <div className="flex flex-col gap-2 w-full lg:w-1/2 text-[#A95AC0] flex-1 text-xl md:text-3xl">
            <div className="flex gap-4 mb-4">
              <p className="h-8 w-8 p-1 mt-1 rounded-full bg-[#A95AC0] text-white flex items-center justify-center">
                1
              </p>
              <p className="flex-1">
                <span className="font-bold">Expert Identification: </span>
                <span className="block">
                  Through extensive external advertising, database searches, and
                  headhunting, we pinpoint top-tier driver candidates. 
                </span>
              </p>
            </div>

            <div className="flex gap-4 mb-4">
              <p className="h-8 w-8 p-1 mt-1 rounded-full bg-[#A95AC0] text-white flex items-center justify-center">
                2
              </p>
              <p className="flex-1">
                <span className="font-bold">Comprehensive Process: </span>
                <span className="block">
                  Rigorous driving assessments and interviews ensure that only
                  the best drivers make it to your shortlist
                </span>
              </p>
            </div>

            <div className="flex gap-4 mb-4">
              <p className="h-8 w-8 p-1 mt-1 rounded-full bg-[#A95AC0] text-white flex items-center justify-center">
                3
              </p>
              <p className="flex-1">
                <span className="font-bold">Background Checks: </span>
                <span className="block">
                  Thorough screening of a driver's, employment record, and
                  driving history.
                </span>
              </p>
            </div>

            <div className="flex gap-4 mb-4">
              <p className="h-8 w-8 p-1 mt-1 rounded-full bg-[#A95AC0] text-white flex items-center justify-center">
                4
              </p>
              <p className="flex-1">
                <span className="font-bold">Licence Verification: </span>
                <span className="block">
                  Ensuring that the driver possesses a valid and current
                  driver's licence. 
                </span>
              </p>
            </div>
          </div>
          <img src="/home-3.png" alt="while choose us" className="-ml-2" />
        </div>
      </div>

      {/* fourth section - services */}
      <div className="max-w-7xl mx-auto px-2 flex flex-col items-center w-full py-2 lg:py-8">
        <div className="text-[#D484EA] text-4xl md:text-6xl font-extrabold">
          Services
        </div>
        <div className="flex gap-4 flex-wrap justify-between w-full py-2 lg:py-8">
          <ServicesComponent
            title="One -off driver hire Service"
            description="Our one-off driver hire service employs customised recruitment strategies to attract drivers that meet your specific requirements."
            image="/services-1.png"
          />
          <ServicesComponent
            title="Outsource Driver Recruitment and Management"
            description="Our one-off driver hire service employs customised recruitment strategies to attract drivers that meet your specific requirements."
            image="/services-2.png"
          />
          <ServicesComponent
            title="On -Demand Driver Service"
            description="Do you need drivers for specific period of  time, Mauve Driver Recruit can help you get drivers"
            image="/services-3.png"
          />
        </div>
      </div>

      {/* fifth section - testimonials */}
      <div className="max-w-5xl mx-auto px-2 flex flex-col items-centerw-full py-2 lg:py-8">
        <div className="text-[#D484EA] text-4xl md:text-6xl font-extrabold capitalize">
          Our happy clients say about us
        </div>
        <div className="h-96 w-full bg-[#44244D] mt-10">
          <Carousel
            pauseOnHover
            slideInterval={5000}
            leftControl={<FaChevronLeft className="text-white text-5xl" />}
            rightControl={<FaChevronRight className="text-white text-5xl" />}
          >
            {testimonials.map((testimonial, key) => (
              <TestimonialComponent
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                message={testimonial.message}
                location={testimonial.location}
              />
            ))}
            {/* <TestimonialComponent
              image="/testimonial.png"
              name="Lucy Mandy"
              comment="Since we have  been using mauve for our ordering  our ride it has been the best we made"
              location="Lekki, Phase 1"
            />
            <TestimonialComponent
              image="/testimonial.png"
              name="Nancy Mandy"
              comment="Since we have  been using mauve for our ordering  our ride it has been the best we made"
              location="Lekki, Phase 2"
            />
            <TestimonialComponent
              image="/testimonial.png"
              name="Maduka Jenice"
              comment="Since we have  been using mauve for our ordering  our ride it has been the best we made"
              location="Area 7, Abuja"
            /> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
