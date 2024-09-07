import React from "react";
import Divider from "./Divider";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function PricesComponent({
  height,
  title,
  currency,
  amount_action,
  comment,
  items,
  extra_items,
  extra_benefits,
  btn_text,
}) {
  return (
    <div
      className={`w-full lg:w-[300px] bg-[#A95AC0] ${height} rounded-xl p-5 text-[#FFFFFF] flex flex-col justify-between gap-4`}
    >
      <h3 className="text-2xl">{title}</h3>
      <h1 className="flex items-center text-4xl font-extrabold text-[#FFEFD2]">
        {currency}
        {amount_action}
      </h1>
      <p className="text-center">{comment}</p>
      <Divider />
      <p className="text-xl font-bold">Benefits</p>
      <ul className="pl-4 text-sm text-left">
        {items &&
          items.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
      </ul>
      <p className="text-xl font-bold">{extra_benefits}</p>
      <ul className="pl-4 text-sm text-left">
        {extra_items &&
          extra_items.map((extra, index) => (
            <li key={index} className="list-disc">
              {extra}
            </li>
          ))}
      </ul>

      <Link
        to="#"
        className="bg-white text-[#A95AC0] w-36 flex items-center justify-center h-10 font-semibold rounded-lg mx-auto"
      >
        {btn_text}
      </Link>
    </div>
  );
}
