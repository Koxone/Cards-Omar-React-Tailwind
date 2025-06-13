import React, { useEffect } from "react";

function Login({ onClose, visible }) {
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute z-50 flex h-[400px] w-[600px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#297da9] bg-white p-9"
      >
        <h2 className="text-center text-lg font-semibold">
          Please, provide your reservation code and email for download coupons
        </h2>
        <div className="flex w-full flex-col gap-4">
          <p className="text-lg font-semibold tracking-wide">Email</p>
          <input
            className="h-12 w-full border border-[#297da9] ps-[52px] pe-[44px] outline-none"
            type="text"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <p className="text-lg font-semibold tracking-wide">
            Reservation Code
          </p>
          <input
            type="text"
            className="h-12 w-full border border-[#297da9] ps-[52px] pe-[44px] outline-none"
          />
        </div>
        <div className="flex w-full items-center justify-between gap-4">
          <button
            onClick={onClose}
            type="button"
            className="flex cursor-pointer items-center justify-center rounded-[42px] border bg-neutral-500/50 px-12 py-4 text-base font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
          >
            Close
          </button>
          <button
            type="submit"
            className="flex cursor-pointer items-center justify-center rounded-[42px] border bg-[#297da9] px-12 py-4 text-base font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
