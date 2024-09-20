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
  ];

  const extra_benefit = [
    "90-day replacement policy without a fee",
    "Customised reporting for tracking driver performance",
  ];

  const benefit_list_2 = [
    "Flexible Driver Availability",
    "Convenient Booking Process",
    "Reliable and Professional Drivers",
    "Customizable Driver Requirements",
    "Transparent Pricing",
    "Stress-Free Driver Management",
    "Customer Support",
    "Seamless Payment Processing",
    "Driver Ratings and Reviews",
  ];

  const benefit_list_3 = [
    "Handling salaries",
    "HMO",
    "Statutory Payments (Pension and Group Life)",
    "Performance Bonuses",
    "Uniforms",
    "Background Checks",
    "Customer support",
    "Referral Rewards",
    "Driver Training",
  ];

  return (
    <MainLayout>
      <div className="min-h-screen w-full mb-12 lg:mb-24 p-2 text-sm lg:text-md text-justify">
        <section className="min-h-screen w-full max-w-6xl mx-auto mt-4 lg:mt-10 p-2 lg:p-6 flex flex-col lg:flex-row items-start justify-between gap-y-4">
          <PricesComponent
            height="min-h-[700px]"
            title="One-Off Driver"
            currency={<TbCurrencyNaira className="text-5xl font-extrabold" />}
            amount_action="100,000"
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
            amount_action="40,000"
            comment="Inclusive of both driver payment and service charge."
            items={benefit_list_2}
            btn_text="Hire Now"
          />
          <PricesComponent
            height="min-h-[700px]"
            title="Driver Management"
            amount_action="Get Quote"
            comment="Our service specialises in seamlessly assigning verified drivers and providing comprehensive management services."
            items={benefit_list_3}
            btn_text="Request Now"
          />
        </section>
      </div>
    </MainLayout>
  );
}
