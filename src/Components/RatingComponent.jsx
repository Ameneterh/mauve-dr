import React from "react";
import { FaStar } from "react-icons/fa";

export default function RatingComponent(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">{props.companyName}</h1>
      <div className="flex gap-1 items-center justify-center text-3xl text-[#FC7900]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
}
