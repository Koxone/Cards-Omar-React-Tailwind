import React from "react";
import { useTranslation } from "react-i18next";

function LanguageButton() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-10 w-fit cursor-pointer items-center justify-center gap-1 rounded-sm border bg-[#16161d] px-2 text-center text-[9px] font-semibold text-white 
      uppercase transition-colors duration-300 hover:bg-[#004165] md:h-[40px] md:w-fit md:px-3 md:text-sm"
    >
      {t("languageButton.button")}
      <img
        className="w-[18px] md:w-[20px]"
        src={i18n.language === "es" ? "/assets/mexico.png" : "/assets/usa.png"}
        alt={i18n.language === "es" ? "Bandera de México" : "USA Flag"}
      />
    </button>
  );
}

export default LanguageButton;
