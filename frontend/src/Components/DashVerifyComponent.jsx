import React from "react";

export default function DashVerifyComponent({ text_color, text, icon }) {
  console.log(text_color);

  return (
    <div
      className={`w-full h-56 rounded-3xl bg-white shadow-md flex flex-col gap-5 items-center justify-center p-4 font-extrabold text-[${text_color}]`}
    >
      {icon}
      <p className="text-center text-2xl">{text}</p>
    </div>
  );
}
