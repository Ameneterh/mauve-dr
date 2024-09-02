import React from "react";

export default function ServicesComponent(props) {
  return (
    <div
      className="w-96 min-h-[400px] bg-[#D484EA] flex flex-col gap-10 px-4 py-8 text-white rounded-lg shadow-md"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <h1 className="font-extrabold text-2xl">{props.title}</h1>
      <p className="font text-md w-52">{props.description}</p>
    </div>
  );
}
