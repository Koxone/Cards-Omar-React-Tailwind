import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function CouponCardDesktop({
  name,
  valid,
  promo,
  categorie,
  conditions,
  description,
  logo,
  onClick,
  region,
  id,
}) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="relative h-full max-w-[345px]">
      {/* Left semicircle border - positioned outside the clipped container */}
      <div
        className="absolute -left-3 z-10 h-[41px] w-[50px]"
        style={{
          top: "calc(71.5% - 25px)",
        }}
      >
        <div
          className="h-[50%] w-[50%] rounded-full border-1 border-[#297da9]"
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
          }}
        />
      </div>

      {/* Right semicircle border - positioned outside the clipped container */}
      <div
        className="absolute -right-[37px] z-10 h-[41px] w-[50px]"
        style={{
          top: "calc(71.5% - 25px)",
        }}
      >
        <div
          className="h-[50%] w-[50%] rounded-full border-1 border-[#297da9]"
          style={{
            clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="rounded-2xl">
        <div
          className="relative grid grid-rows-[200px_50px_1fr] overflow-hidden rounded-2xl border border-[#297da9]"
          style={{
            clipPath: `polygon(
            0% 0%, 
            100% 0%, 
            100% 64.3%, 
            calc(100% - 25px) 70%, 
            100% 70%, 
            100% 100%, 
            0% 100%, 
            0% 70.0%, 
            25px 70%, 
            0% 64.2%
          )`,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
            <img
              className="mb- max-h-[80px] min-h-[60px] max-w-[80px] min-w-[60px] object-contain"
              src={logo}
              alt="logo icon"
            />
            <h2 className="text-2xl leading-tight font-bold tracking-widest break-words text-[#297da9] uppercase">
              {promo[lang]}
            </h2>
            <p className="font-medium tracking-wider text-[#297da9]">
              {categorie[lang]}
            </p>
          </div>

          <div className="flex flex-row items-center bg-[#f9f9f9]">
            <div className="h-[1px] w-full border-b border-dashed border-b-neutral-400"></div>
          </div>

          <div className="flex w-full items-center justify-center p-4 pt-3">
            <button
              onClick={() =>
                onClick({
                  promo,
                  name,
                  logo,
                  conditions,
                  categorie,
                  valid,
                  description,
                  region,
                  id,
                })
              }
              className="cursor-pointer rounded-[42px] border bg-[#297da9] px-12 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
            >
              {t("couponV3.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponCardDesktop;
