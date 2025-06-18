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
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const { isLoggedIn, reservation, language } = useReservationContext();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();

  useEffect(() => {
    const color = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(color);
  });

  useEffect(() => {
    if (visible) {
      setIsRendered(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else if (!visible && isRendered) {
      setIsAnimating(false);
      setIsClosing(true);
      setTimeout(() => {
        setIsRendered(false);
        setIsClosing(false);
        onClose();
      }, 1000); // duración de la animación
    }
  }, [visible]);

  if (!isRendered) return null;

  return (
    <div>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/50"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: bgColor }}
        className={`fixed top-1/2 left-1/2 z-20 flex w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded-2xl border border-[#297da9] p-8 shadow-2xl transition-all duration-300 ease-in-out sm:max-w-[500px] ${isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 flex h-5.5 w-5.5 cursor-pointer items-center justify-center rounded-[4px] border-transparent bg-black/80 text-white hover:bg-[#297da9]"
        >
          X
        </button>

        {/* Banner Image */}
        <img
          className="rounded-[5px]"
          src="/assets/xcaret.jpg"
          alt="Brand Image"
        />

        {/* Title, Categorie and Logo */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-2xl leading-7 font-semibold tracking-wide text-[#024466]">
              {name}
            </p>
            <p className="text-base text-neutral-500">{categorie[lang]}</p>
          </div>
          <img
            className="max-w-[80px] md:max-w-[90px]"
            src={logo}
            alt="brand logo"
          />
        </div>

        {/* Description and Apply Button */}
        <div className="flex flex-col gap-5">
          <div className="mb-auto flex flex-col gap-1">
            <p className="font-bold tracking-wider md:text-[11pt]">
              {t("modal.description")}
            </p>
            <p className="mb-3 text-[11pt] font-medium text-neutral-500 md:text-base md:leading-[1.5]">
              {description[lang]}
            </p>
            <p className="self-center text-xs font-medium text-black md:text-sm">
              Terms & Conditions with provider
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Wallet Buttons */}
            <div className="flex w-full items-center justify-between sm:justify-evenly">
              {isLoggedIn ? (
                <a
                  id="apple"
                  href={`https://api.sacbetransfers.com/api/v1/wallet/ios?uuid=${reservation?.config?.uuid}&language=${language}&code=${id}`}
                >
                  <img
                    className="cursor-pointer md:h-[50px] md:w-[160px]"
                    src="/assets/apple.svg"
                    alt="Apple Wallet"
                  />
                </a>
              ) : (
                <a
                  id="apple"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsApplying(true);
                    onApply();
                  }}
                >
                  <img
                    className="cursor-pointer md:h-[50px] md:w-[160px]"
                    src="/assets/apple.svg"
                    alt="Apple Wallet"
                  />
                </a>
              )}

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
