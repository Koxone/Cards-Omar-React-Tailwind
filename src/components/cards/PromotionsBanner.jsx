import React from "react";

function PromotionsBanner() {
  return (
    <div className="flex w-full items-center rounded-2xl border border-neutral-700 bg-white p-3 shadow-lg md:justify-between">
      <div>
        <p className="text-[12px] font-medium tracking-wide uppercase md:text-base">
          promotions
        </p>
        <p className="text-[14px] font-bold tracking-wide text-[#024466] md:text-xl">
          Enjoy our exclusive promotions and Get the best value of your booking
        </p>
      </div>
      <img className="w-[32px]" src="/assets/banner.png" alt="gift icon" />
    </div>
  );
}

export default PromotionsBanner;
