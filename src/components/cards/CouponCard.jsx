"use client";

import { useEffect, useState, useRef } from "react";

function CouponCard({ name, validUntil, promo, logo }) {
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
    0% 0%, 0% 33.5%, 3% 40%, 3% 60%, 0% 58.2%, 0% 100%,
    100% 100%, 100% 58.2%, 97% 60%, 97% 36%, 100% 34.1%, 100% 0%
  )`;

    const clip102 = `polygon(
    0% 0%, 0% 37.5%, 3% 40%, 3% 60%, 0% 55.9%, 0% 100%,
    100% 100%, 100% 56.2%, 97% 60%, 97% 36%, 100% 37.6%, 100% 0%
  )`;

    return height < 86 ? clip70 : clip102;
  };

  return (
    <div className="relative">
      {/* Left semicircle border - positioned outside the clipped container */}
      <div
        className="absolute left-[-3.2%] z-10 h-[27px] w-[27px]"
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
        className="absolute right-[-3.4%] z-10 h-[27px] w-[27px]"
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
        ref={mainRef}
        id="main"
        style={{ clipPath: getClipPath(mainHeight) }}
        className="grid max-h-[137px] max-w-[385px] flex-1 grid-cols-[100px_50px_1fr] items-center overflow-hidden rounded-2xl border border-[var(--color-primary)] p-4"
      >
        <div className="h-fit w-fit pr-9 pl-4">
          <img
            className="h-full w-full max-w-[40px] object-cover"
            src={logo || "/placeholder.svg"}
            alt=""
          />
        </div>
        <div className="h-full border-l border-dashed border-gray-400" />
        <div className="flex-1 pl-4 text-left text-sm font-medium">
          <p className="text-2xl text-[var(--color-primary)]">{promo}</p>
          <p className="text-base font-medium text-[var(--color-primary)]">
            {name}
          </p>
          <p className="text-[10px] font-medium text-neutral-500">{`Valid until ${validUntil}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
