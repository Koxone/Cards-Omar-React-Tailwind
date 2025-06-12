import React from "react";

function CouponCard({ name, validUntil, discount, logo }) {
  return (
    <div className="relative flex max-h-[352px] min-h-[104px] w-[345px] cursor-pointer flex-col items-center gap-4 rounded-[8px] border border-neutral-700 bg-white px-4 py-4 shadow-xl">
      <div className="absolute top-[50%] left-[-6%] h-8 w-8 translate-y-[-50%] rounded-full bg-[#004466]" />
      <div className="absolute top-[50%] right-[-6%] h-8 w-8 translate-y-[-50%] rounded-full bg-[#004466]" />

      <div className="flex w-full items-center">
        <div className="h-fit w-fit pr-9 pl-4">
          <img
            className="h-full w-full max-w-[40px] object-cover"
            src={logo}
            alt=""
          />
        </div>

        <div className="h-16 border-l border-dashed border-gray-400" />

        <div className="flex-1 pl-4 text-left text-sm font-medium">
          <p className="text-2xl text-[#297da9]">{discount}</p>
          <p className="text-base font-medium text-[#297da9]">{name}</p>
          <p className="text-[10px] font-medium text-neutral-500">
            {`Valid until ${validUntil}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
