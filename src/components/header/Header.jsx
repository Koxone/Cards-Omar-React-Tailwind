import React from "react";
import LanguageButton from "../buttons/LanguageButton";
import WhatsappButton from "../buttons/WhatsappButton";

function Header() {
  return (
    <div className="flex h-[72px] w-screen items-center justify-between bg-[#16161d] p-4 text-white md:px-8">
      <img
        className="w-[90px] object-contain"
        src="/public/assets/Recurso 2.svg"
        alt="brand logo"
      />
      <div className="flex h-fit items-center gap-2">
        <WhatsappButton />
        <LanguageButton />
      </div>
    </div>
  );
}

export default Header;
