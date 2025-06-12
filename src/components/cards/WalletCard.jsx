import React from "react";

function WalletCard({ promo, name, service }) {
  return (
    <div className="relative flex h-[530px] w-[342px] flex-col items-center gap-4 rounded-2xl border border-neutral-700 bg-white px-8 py-7 shadow-lg">
      <div className="flex w-full items-center justify-between gap-4">
        <img className="w-[90px]" src="/assets/kfc.png" alt="brand logo" />
        <h1 className="w-24 text-2xl font-semibold text-[#297da9] uppercase">{`${promo} off ${name}`}</h1>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-base font-bold text-[#297da9]">
          {`Get ${promo} off at your next ${name} ${service}`}
        </h2>
        <ul className="flex h-[119px] w-[249px] list-inside list-disc flex-col gap-3 text-sm font-medium text-neutral-500">
          <li>Reedeamble at all KFC restaurants in the UK.</li>
          <li>Not valid with any other discounts and promotions.</li>
          <li>No cash value</li>
        </ul>
      </div>
      <div className="mt-10 mb-4 h-[1px] w-full bg-[linear-gradient(to_right,_#8a8888_4px,_transparent_4px)] bg-[length:8px_1px] bg-repeat-x" />
      <div className="absolute top-[58%] left-[-6%] h-10 w-10 rounded-full bg-[#004466]" />
      <div className="absolute top-[58%] right-[-6%] h-10 w-10 rounded-full bg-[#004466]" />
      <div>
        <img src="/assets/qr_img 1.png" alt="" />
      </div>
      <div className="flex w-full cursor-pointer items-center justify-between">
        <img src="/src/assets/external-link.png" alt="" />
        <img src="/src/assets/info.png" alt="" />
      </div>
    </div>
  );
}

export default WalletCard;
