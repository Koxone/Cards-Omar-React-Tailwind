import React, { useEffect, useState } from "react";

function CouponCardV3({ name, valid, promo, categorie, details, logo }) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });
  return (
    <div className="relative flex h-[353px] w-[345px] flex-col justify-between rounded-2xl border border-neutral-700 bg-white px-8 py-6 shadow-lg">
      {/* Logo and Text */}
      <div className="flex flex-grow flex-col items-center justify-start gap-3">
        <div className="flex h-[90px] items-center justify-center">
          <img
            className="h-[90px] w-[90px] object-contain"
            src={logo}
            alt="Brand Logo"
          />
        </div>
        <div className="text-center">
          <h2 className="text-3xl leading-tight font-bold tracking-widest break-words text-[#297da9] uppercase">
            {promo}
          </h2>
          <p className="font-medium tracking-wider text-[#297da9]">
            {categorie}
          </p>
        </div>
      </div>

      {/* Line and Circles */}
      <div className="relative mt-2 h-6 w-full">
        <div className="absolute inset-0 h-[1px] w-full bg-[linear-gradient(to_right,_#8a8888_4px,_transparent_4px)] bg-[length:8px_1px] bg-repeat-x" />
        <div
          style={{ backgroundColor: bgColor }}
          className="absolute top-0 left-[-19%] h-10 w-10 -translate-y-1/2 rounded-full border-r border-neutral-700"
        />
        <div
          style={{ backgroundColor: bgColor }}
          className="absolute top-0 right-[-19%] h-10 w-10 -translate-y-1/2 rounded-full border-l border-neutral-700"
        />
      </div>

      {/* Button */}
      <div className="flex w-full items-center justify-center pt-3">
        <button className="cursor-pointer rounded-[42px] border bg-[#297da9] px-12 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CouponCardV3;
