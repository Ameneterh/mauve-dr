import React, { useState } from "react";
import signinpix from "/signinpix.png";
import MainLayout from "../layout/MainLayout";
import { Button, Label, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PaymentPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <MainLayout>
      <div className="p-2 sm:p-0">
        <div className="flex flex-col md:flex-row items-center gap-4 min-h-[80svh] w-full max-w-6xl mx-auto mt-4 lg:mt-8 px-2 py-4 lg:p-20 bg-[#A95AC0] mb-10 rounded-xl sm:rounded-3xl">
          <div className="flex justify-between items-center flex-wrap"></div>
          <div className="flex-1 flex flex-col justify-between gap-5 lg:gap-12 w-full max-w-2xl mx-auto">
            <form className="flex flex-col gap-4 text-white text-sm">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="card_number">Card Number</label>
                <input
                  id="card_number"
                  type="text"
                  placeholder="1234-XXXX-6789-XXXX"
                  required
                  className="rounded-lg mb-4 bg-[#A95AC0] border-[2px] border-white placeholder:text-white"
                />

                <div className="w-full flex flex-col sm:flex-row gap-2">
                  <div className="flex flex-col w-full">
                    <label htmlFor="card_expiration">Expiration Date</label>
                    <input
                      id="card_expiration"
                      type="text"
                      placeholder="MM/YY"
                      required
                      className="rounded-lg mb-4 bg-[#A95AC0] border-[2px] border-white placeholder:text-white"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="security_code">Security Code</label>
                    <input
                      id="security_code"
                      type="text"
                      placeholder="CVV"
                      required
                      className="rounded-lg mb-4 bg-[#A95AC0] border-[2px] border-white placeholder:text-white"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-white text-[#A95AC0] font-medium hover:opacity-85 cursor-pointer rounded-xl py-3 w-full max-w-sm mx-auto mt-6"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
