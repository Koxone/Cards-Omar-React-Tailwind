import React from "react";

function PromotionsBanner() {
  return (
    <div className="flex max-w-[281px] items-center justify-between rounded-xl border border-gray-300 bg-gradient-to-r from-blue-50 to-white p-2.5 shadow-md transition-all duration-300 hover:shadow-lg md:w-full md:max-w-full">
      <div className="min-w-0 flex-1 pr-2">
        <p className="text-xs font-bold tracking-wider text-blue-700 uppercase md:text-[13px]">
          promotions
        </p>
        <p className="truncate text-[11px] font-medium text-blue-900 md:text-[12px] md:font-semibold">
          Enjoy our exclusive promotions and Get the best value of your booking
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          className="h-6 w-6 md:h-7 md:w-7"
          src="/assets/banner.png"
          alt="gift icon"
        />
      </div>
    </div>
  );
}

export default PromotionsBanner;
