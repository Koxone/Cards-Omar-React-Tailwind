import React from "react";

function WhatsappButton() {
  return (
    <a
      className="flex h-10 w-fit cursor-pointer items-center justify-center gap-1 rounded-sm border bg-[#16161d] px-2 text-center text-[7px] font-semibold text-white uppercase transition-colors duration-300 hover:bg-[#004165] md:h-[40px] md:w-fit md:px-3 md:text-sm"
      href="https://wa.me/15551234567"
    >
      <img
        className="w-6 object-contain"
        src="/assets/whatsapp.png"
        alt=" whatsapp icon"
      />
    </a>
  );
}

export default WhatsappButton;
