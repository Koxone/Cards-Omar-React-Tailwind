import React, { useEffect, useState } from "react";

function CouponCard({ name, validUntil, promo, logo }) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });
  return (
    <div className="relative flex max-h-[352px] min-h-[104px] w-[345px] cursor-pointer flex-col items-center gap-4 rounded-[8px] border border-neutral-700 bg-white px-4 py-4 shadow-xl">
      <div
        style={{ backgroundColor: bgColor }}
        className="absolute top-[50%] left-[-6%] h-8 w-8 translate-y-[-50%] rounded-full border-r-1 border-neutral-700"
      />
      <div
        style={{ backgroundColor: bgColor }}
        className="absolute top-[50%] right-[-6%] h-8 w-8 translate-y-[-50%] rounded-full border-l-1 border-neutral-700"
      />

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
          <p className="text-2xl text-[#297da9]">{promo}</p>
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
