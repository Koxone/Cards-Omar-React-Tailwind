import React from "react";

function LanguageButton() {
  return (
    <button className="flex h-full w-full cursor-pointer items-center justify-center gap-1 rounded-2xl border-transparent bg-[var(--color-primary)] text-center text-[7px] font-semibold text-white uppercase transition-colors duration-300 hover:bg-[#004165] md:h-[57px] md:w-full md:px-3 md:text-sm">
      Español
      <img className="w-[10px] md:w-[20px]" src="/assets/mexico.png" alt="" />
    </button>
  );
}

export default LanguageButton;
