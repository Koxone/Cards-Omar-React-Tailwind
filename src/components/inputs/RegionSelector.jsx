import React from "react";

function RegionSelector() {
  return (
    <div>
      <select
        name="region"
        className="rounded-md border px-4 py-2 text-sm"
        defaultValue=""
      >
        <option value="" disabled>
          — Selecciona una Región —
        </option>

        <optgroup label="México">
          <option value="CUN">Cancún</option>
          <option value="SJD">Los Cabos</option>
          <option value="PVR">Puerto Vallarta</option>
          <option value="TQO">Tulum</option>
        </optgroup>

        <optgroup label="República Dominicana">
          <option value="PUJ">Punta Cana</option>
        </optgroup>
      </select>
    </div>
  );
}

export default RegionSelector;
