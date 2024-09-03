import React from "react";

export default function TestimonialComponent(props) {
  return (
    <div className="max-w-[450px] mx-auto min-h-96 flex flex-col items-center justify-center gap-6 text-white text-center">
      <div
        className="h-24 w-24 rounded-full border-4 border-white"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      {/* <img src={props.image} alt={props.name} className="w-24 h-24" /> */}
      <p className="text-sm">{props.message}</p>
      <div>
        <p className="font-bold italic text-xl">{props.name}</p>
        <p className="text-sm underline">{props.location}</p>
      </div>
    </div>
  );
}
