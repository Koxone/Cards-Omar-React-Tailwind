import React from "react";

function CouponCardV3() {
  return (
    <div className="relative flex h-[289px] w-[345px] flex-col items-center gap-4 rounded-2xl border border-neutral-700 bg-white px-8 py-7 shadow-lg">
      <input
        type="checkbox"
        name="coupon"
        className="absolute top-4 right-4 h-5 w-5"
      />
      <div className="flex w-full items-center justify-center gap-4">
        <img className="w-[90px]" src="/assets/kfc.png" alt="Brand Logo" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-center text-3xl font-bold tracking-widest text-[#297da9] uppercase">
          25% off
        </h2>
        <p className="text-center font-medium tracking-wider text-[#297da9]">
          Park
        </p>
      </div>
      <div className="mt-4 mb-4 h-[1px] w-full bg-[linear-gradient(to_right,_#8a8888_4px,_transparent_4px)] bg-[length:8px_1px] bg-repeat-x" />
      <div className="absolute top-[52%] left-[-6%] h-10 w-10 rounded-full bg-[#004466]" />
      <div className="absolute top-[52%] right-[-6%] h-10 w-10 rounded-full bg-[#004466]" />
      <div className="flex w-full cursor-pointer items-center justify-center">
        <button className="flex cursor-pointer items-center justify-center rounded-[42px] border bg-[#297da9] px-12 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#004165] hover:text-white active:bg-[#004165]">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CouponCardV3;
