import React from "react";
import data from "/data";

function WalletCard({ promo, name, service, logo, details }) {
  return (
    <div className="relative flex min-h-[530px] w-[342px] flex-col items-center gap-4 rounded-2xl border border-neutral-700 bg-white px-8 py-7 shadow-lg">
      {/* Header */}
      <div className="flex w-full items-center justify-between gap-4">
        <img className="w-[90px]" src={logo} alt="brand logo" />
        <h1 className="w-24 text-2xl font-semibold text-[#297da9] uppercase">
          {`${promo} off`}
        </h1>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-base font-bold text-[#297da9]">
          {`Get ${promo} off at your next ${name} ${service}`}
        </h2>
        <ul className="flex w-[249px] list-inside list-disc flex-col gap-3 text-sm font-medium text-neutral-500">
          {Array.isArray(details) &&
            details.map((line, index) => <li key={index}>{line}</li>)}
        </ul>
      </div>

      {/* Divider */}
      <div className="relative mt-2 h-6 w-full">
        <div className="absolute inset-0 h-[1px] w-full bg-[linear-gradient(to_right,_#8a8888_4px,_transparent_4px)] bg-[length:8px_1px] bg-repeat-x" />
        <div className="absolute top-0 left-[-19%] h-10 w-10 -translate-y-1/2 rounded-full bg-[#004466]" />
        <div className="absolute top-0 right-[-19%] h-10 w-10 -translate-y-1/2 rounded-full bg-[#004466]" />
      </div>

      {/* QR */}
      <div className="pt-2">
        <img
          src="/assets/qr_img 1.png"
          alt="qr code icon"
          className="h-16 w-16 object-contain"
        />
      </div>

      {/* Footer icons */}
      <div className="flex w-full items-center justify-between px-4 pt-2">
        <img
          src="/assets/external-link.png"
          alt="external link"
          className="h-6 w-6 object-contain cursor-pointer"
        />
        <a href="#">
          
        </a>
        <img
          src="/assets/info.png"
          alt="info icon"
          className="h-6 w-6 object-contain cursor-pointer"
        />
      </div>
    </div>
  );
}

export default WalletCard;
