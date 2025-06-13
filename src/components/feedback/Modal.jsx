import React, { useEffect, useState } from "react";

function Modal({
  logo,
  name,
  categorie,
  description,
  validUntil,
  onClose,
  visible,
}) {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: bgColor }}
        className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 rounded-2xl border p-8 shadow-2xl sm:h-[756px] sm:w-[644px]"
      >
        {/* Banner Image */}
        <div>
          <img
            className="rounded-2xl"
            src="/public/assets/xcaret.jpg"
            alt="Brand Image"
          />
        </div>

        {/* Title, Categorie and Logo */}
        <div className="flex items-center justify-between pt-4 h-[121px]">
          <div className="flex flex-col gap-2">
            <p className="text-2xl leading-7 font-semibold tracking-wide text-[#024466]">
              {name}
            </p>
            <p className="text-base text-neutral-500">{categorie}</p>
          </div>
          <img className="w-[120px]" src={logo} alt="brand logo" />
        </div>

        {/* Description and Apply Button */}
        <div className="flex h-full flex-col">
          <div className="flex-grow flex flex-col gap-4">
            <p className="text-2xl font-semibold tracking-wider">Description</p>
            <p className="text-base leading-9 font-medium tracking-wide text-neutral-500">
              {description}
            </p>
          </div>
          <a
            className="text-sm font-medium text-[#297da9] underline underline-offset-2 transition-colors duration-200 hover:text-[#004165]"
            href="#"
          >
            Terms & Conditions
          </a>
          <button className="mt-4 flex cursor-pointer items-center justify-center rounded-[42px] border bg-[#297da9] px-12 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
