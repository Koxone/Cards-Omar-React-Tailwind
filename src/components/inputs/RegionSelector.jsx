import React from "react";
import { useTranslation } from "react-i18next";

function RegionSelector({ onChange }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();
  return (
    <div className="relative h-[39px] w-full md:h-[57px]">
      <select
        name="region"
        className="h-full w-full appearance-none rounded-lg border border-gray-300 bg-white pr-7 pl-3 text-xs text-gray-700 transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none md:text-sm"
        defaultValue="all"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">{t("regionSelector.selectRegion")}</option>

        <optgroup label="México" className="text-gray-500">
          <option value="cancun" className="text-gray-700">
            {t("regionSelector.cancun")}
          </option>
          <option value="los cabos" className="text-gray-700">
            {t("regionSelector.tulum")}
          </option>
          <option value="puerto vallarta" className="text-gray-700">
            {t("regionSelector.losCabos")}
          </option>
          <option value="tulum" className="text-gray-700">
            {t("regionSelector.puertoVallarta")}
          </option>
        </optgroup>

        <optgroup label="República Dominicana" className="text-gray-500">
          <option value="punta cana" className="text-gray-700">
            {t("regionSelector.puntaCana")}
          </option>
        </optgroup>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default RegionSelector;
