import React from "react";

function RegionSelector({ onChange }) {
  return (
    <div className="relative h-[39px] w-full md:h-[57px]">
      <select
        name="region"
        className="h-full w-full appearance-none rounded-lg border border-gray-300 bg-white pr-7 pl-3 text-xs text-gray-700 transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none md:text-sm"
        defaultValue="all"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">Todas las Regiones</option>

        <optgroup label="México" className="text-gray-500">
          <option value="cancun" className="text-gray-700">
            Cancún
          </option>
          <option value="los cabos" className="text-gray-700">
            Los Cabos
          </option>
          <option value="puerto vallarta" className="text-gray-700">
            Puerto Vallarta
          </option>
          <option value="tulum" className="text-gray-700">
            Tulum
          </option>
        </optgroup>

        <optgroup label="República Dominicana" className="text-gray-500">
          <option value="punta cana" className="text-gray-700">
            Punta Cana
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
