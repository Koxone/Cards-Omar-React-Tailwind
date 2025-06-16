"use client";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function CouponCard({
  name,
  validUntil,
  promo,
  logo,
  onClick,
  conditions,
  categorie,
  description,
  region,
}) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });

  const mainRef = useRef(null);
  const [mainHeight, setMainHeight] = useState(0);

  useEffect(() => {
    if (!mainRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMainHeight(entry.contentRect.height);
      }
    });

    observer.observe(mainRef.current);
    return () => observer.disconnect();
  }, []);

  const semicircleOffset = mainHeight / 2 - 0.5;

  const getClipPath = (height) => {
    const clip70 = `polygon(
    0% 0%, 0% 33%, 3% 40%, 3% 60%, 0% 58.9%, 0% 100%,
    100% 100%, 100% 58.9%, 97% 60%, 97% 36%, 100% 33.2%, 100% 0%
  )`;

    const clip102 = `polygon(
    0% 0%, 0% 36%, 3% 40%, 3% 60%, 0% 57%, 0% 100%,
    100% 100%, 100% 57.2%, 97% 60%, 97% 36%, 100% 36.4%, 100% 0%
  )`;

    return height < 86 ? clip70 : clip102;
  };

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();

  const breakAfterWords = (text) => {
    const words = text.split(" ");

    if (words.length <= 2) {
      return text;
    }

    const firstLine = words.slice(0, 2).join(" ");
    const secondLine = words.slice(2, 4).join(" ");
    const remaining = words.slice(4).join(" ");

    return (
      <>
        <span className="block">{firstLine}</span>
        {secondLine && <span className="block">{secondLine}</span>}
        {remaining && (
          <span className="block text-[16px] leading-tight">{remaining}</span>
        )}
      </>
    );
  };

  return (
    <div className="relative">
      {/* Left semicircle border */}
      <div
        className="absolute left-[-4.5%] z-10 h-[27px] w-[27px]"
        style={{
          top: `${semicircleOffset}px`,
        }}
      >
        <div
          className="h-full w-full rounded-full border-1 border-[var(--color-primary)]"
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
          }}
        />
      </div>

      {/* Right semicircle border */}
      <div
        className="absolute right-[-4.6%] z-10 h-[27px] w-[27px]"
        style={{
          top: `${semicircleOffset}px`,
        }}
      >
        <div
          className="h-full w-full rounded-full border-1 border-[var(--color-primary)]"
          style={{
            clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
          }}
        />
      </div>

      <div
        onClick={() =>
          onClick({
            promo,
            name,
            logo,
            conditions,
            categorie,
            validUntil,
            description,
            region,
          })
        }
        ref={mainRef}
        id="main"
        style={{ clipPath: getClipPath(mainHeight) }}
        className="grid max-h-[137px] max-w-[320px] flex-1 cursor-pointer grid-cols-[80px_auto_1fr] items-center overflow-hidden rounded-2xl border border-[var(--color-primary)] p-4"
      >
        <div className="h-fit w-fit pr-6 pl-4">
          <img
            className="h-full w-full max-w-[40px] object-cover"
            src={logo || "/placeholder.svg"}
            alt="logo icon"
          />
        </div>
        <div className="h-full border-l border-dashed border-gray-400" />
        <div className="flex-1 pl-4 text-left font-medium">
          <p className="text-[19px] font-semibold text-[var(--color-primary)]">
            {breakAfterWords(promo[lang], 2)}
          </p>
          <p className="text-base font-normal text-[var(--color-primary)]">
            {name[lang]}
          </p>
          <p className="text-[7px] font-medium text-neutral-500">
            {`${t("couponMobile.valid")} ${validUntil[lang]}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
