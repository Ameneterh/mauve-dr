import React from "react";
import MainLayout from "../layout/MainLayout";
import PricesComponent from "../Components/PricesComponent";
import { TbCurrencyNaira } from "react-icons/tb";

export default function PricePage() {
  const benefit_list_1 = [
    "Placement fee",
    "Licence vetting",
    "Guarantor’s vetting",
    "Personal Reference Check",
    "Previous Employer Reference",
    "Address verification",
    "Full medical check-up of drivers",
    "Dedicated account manager for personalised support",
    "24/7 customer service hotline for urgent inquiries",
  ];

  const extra_benefit = [
    "90-day replacement policy without a fee",
    "Customised reporting for tracking driver performance",
  ];

  const benefit_list_2 = [
    "Security for the Driver",
    "Stressless process for application",
    "Fully automated process",
  ];

  const benefit_list_3 = [
    "Handling salaries",
    "HMO",
    "Statutory payments (such as Pension and Group Life)Personal Reference Check",
    "Benefits",
    "Training",
  ];

  return (
    <MainLayout>
      <div className="min-h-screen w-full mb-12 lg:mb-24 p-2 text-sm lg:text-md text-justify">
        <section className="min-h-screen w-full max-w-6xl mx-auto mt-4 lg:mt-10 p-2 lg:p-6 flex flex-col lg:flex-row items-start justify-between gap-y-4">
          <PricesComponent
            height="min-h-[700px]"
            title="One-Off Driver"
            currency={<TbCurrencyNaira className="text-5xl font-extrabold" />}
            amount_action="115,000"
            comment="There's a one-time fee Pay 40% upfront as a non-refundable retainer"
            items={benefit_list_1}
            extra_items={extra_benefit}
            extra_benefits="Extra Benefits"
            btn_text="Hire Now"
          />
          <PricesComponent
            height="min-h-[420px]"
            title="On-Demand Driver"
            currency={<TbCurrencyNaira className="text-5xl font-extrabold" />}
            amount_action="30,000"
            comment="Inclusive of both driver payment and service charge."
            items={benefit_list_2}
            btn_text="Hire Now"
          />
          <PricesComponent
            height="min-h-[700px]"
            title="Driver Management"
            amount_action="Book Now"
            comment="Our service specialises in seamlessly assigning verified drivers and providing comprehensive management services."
            items={benefit_list_3}
            btn_text="Request Now"
          />
        </section>
      </div>
    </MainLayout>
  );
}
