import React from "react";

function PromotionsBanner() {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-neutral-700 bg-white p-3 shadow-lg">
      <div>
        <p className="text-base font-medium tracking-wide uppercase">
          promotions
        </p>
        <p className="text-xl font-bold tracking-wide text-[#024466]">
          Enjoy our exclusive promotions and Get the best value of your booking
        </p>
      </div>
      <img src="/assets/banner.png" alt="gift icon" />
    </div>
  );
}

export default PromotionsBanner;
