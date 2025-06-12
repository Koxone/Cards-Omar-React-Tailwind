import React from "react";

function CouponCardV2({
  name = "",
  validUntil = "",
  discount = "",
  logo = "",
}) {
  return (
    <div className="relative flex h-[289px] w-[345px] cursor-pointer flex-col items-center gap-4 rounded-2xl border border-neutral-700 bg-[url('/src/assets/coupon_card2.png')] bg-cover bg-center px-4 py-4 shadow-xl">
      {/* <div className="absolute top-[50%] left-[-6%] h-8 w-8 rounded-full bg-[#004466]" />
      <div className="absolute top-[50%] right-[-6%] h-8 w-8 rounded-full bg-[#004466]" /> */}
      <div className="relative top-[72%] h-[1px] w-full bg-[linear-gradient(to_right,_#8a8888_4px,_transparent_4px)] bg-[length:8px_1px] bg-repeat-x" />

      <div className="flex w-full items-center">
        <div className="h-fit w-fit pr-9 pl-4">
          <img
            className="h-full w-full max-w-[40px] object-cover"
            src={`/src/assets/${logo}.png`}
            alt=""
          />
        </div>

        <div className="flex-1 pl-4 text-left text-sm font-medium">
          <p className="text-2xl">{discount}</p>
          <p className="text-base font-medium">{name}</p>
          <p className="text-[10px] font-medium text-neutral-500">
            {`Valid until ${validUntil}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CouponCardV2;
