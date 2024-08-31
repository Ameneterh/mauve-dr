import React from "react";

export default function TestimonialComponent(props) {
  return (
    <div className="max-w-[392px] mx-auto min-h-96 flex flex-col items-center justify-center gap-6 text-white text-center">
      <img src={props.image} alt={props.name} />
      <p className="text-md">{props.comment}</p>
      <div>
        <p className="font-bold italic text-xl">{props.name}</p>
        <p className="text-sm underline">{props.location}</p>
      </div>
    </div>
  );
}
