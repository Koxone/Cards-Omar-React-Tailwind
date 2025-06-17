import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReservationContext } from "../../context/ReservationContext";

function Modal({
  logo,
  name,
  categorie,
  description,
  validUntil,
  onClose,
  visible,
  onApply,
  id,
}) {
  const [bgColor, setBgColor] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  const { isLoggedIn, reservation, language } = useReservationContext();

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

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="">
      <div
        onClick={onClose}
        className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/50"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: bgColor }}
        className="absolute top-1/2 left-1/2 z-20 flex h-[calc(100vh-140px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 rounded-2xl border border-[#297da9] p-8 shadow-2xl sm:h-[756px] sm:w-[644px]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 w-5.5 cursor-pointer text-neutral-500"
        >
          X
        </button>
        {/* Banner Image */}
        <div>
          <img
            className="rounded-[5px]"
            src="/assets/xcaret.jpg"
            alt="Brand Image"
          />
        </div>

        {/* Title, Categorie and Logo */}
        <div className="flex h-[121px] items-center justify-between pt-4">
          <div className="flex flex-col gap-2">
            <p className="text-2xl leading-7 font-semibold tracking-wide text-[#024466]">
              {name}
            </p>
            <p className="text-base text-neutral-500">{categorie[lang]}</p>
          </div>
          <img className="md:w-[120px]" src={logo} alt="brand logo" />
        </div>

        {/* Description and Apply Button */}
        <div className="flex h-full flex-col">
          <div className="mb-auto flex flex-col gap-4">
            <p className="font-semibold tracking-wider md:text-2xl">
              {t("modal.description")}
            </p>
            <div>
              <p className="text-[11pt] font-medium tracking-wide text-neutral-500 md:text-base md:leading-9">
                {description[lang]}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-medium text-[#297da9] underline underline-offset-2 transition-colors duration-200 md:text-sm">
              Terms & Conditions with provider
            </p>

            {/* Wallet Buttons */}
            <div className="flex w-full items-center justify-between pt-2 sm:justify-evenly">
              <button
                id="apple"
                onClick={() => {
                  if (!isLoggedIn) {
                    setIsApplying(true);
                    onApply();
                    return;
                  }

                  const uuid = reservation?.config?.uuid;
                  const url = `http://api.sacbetransfers.com/api/v1/wallet/ios?uuid=${uuid}&language=${language}&code=${id}`;
                  window.open(url, "_blank");
                }}
              >
                <img
                  className="w-[130px cursor-pointer md:h-[50px] md:w-[160px]"
                  src="/assets/apple.svg"
                  alt="Apple Wallet"
                />
              </button>

              <button
                id="google"
                onClick={() => {
                  if (isLoggedIn) {
                    // Wallet Logic
                    console.log("Agregar a Google Wallet");
                  } else {
                    setIsApplying(true);
                    onApply();
                  }
                }}
              >
                <img
                  className="h-[42px] w-[130px] cursor-pointer md:h-[50px] md:w-[160px]"
                  src="/assets/google.svg"
                  alt="Google Wallet"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
