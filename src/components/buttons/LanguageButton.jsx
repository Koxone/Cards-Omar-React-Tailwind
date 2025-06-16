import React from "react";
import { useTranslation } from "react-i18next";

function LanguageButton() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-full w-full cursor-pointer items-center justify-center gap-1 rounded-2xl border-transparent bg-[var(--color-primary)] text-center text-[7px] font-semibold text-white uppercase transition-colors duration-300 hover:bg-[#004165] md:h-[57px] md:w-full md:px-3 md:text-sm"
    >
      {t("languageButton.button")}
      <img
        className="w-[10px] md:w-[20px]"
        src={i18n.language === "es" ? "/assets/mexico.png" : "/assets/usa.png"}
        alt={i18n.language === "es" ? "Bandera de México" : "USA Flag"}
      />
    </button>
  );
}

export default LanguageButton;
