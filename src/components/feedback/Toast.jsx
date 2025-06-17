import React from "react";

function Toast({ text }) {
  const toastMessages = () => {
    if (text === true) {
      return "Your action was successful!";
    } else if (text === false) {
      return "Reservation not found.";
    }
  };

  const toastStyles = () => {
    if (text === true) {
      return "border border-green-500";
    } else if (text === false) {
      return "border border-red-500";
    }
    return "border border-gray-300";
  };

  const toastImage = () => {
    if (text === true) {
      return "/assets/success.png";
    } else if (text === false) {
      return "/assets/failed.png";
    }
    return "/assets/info.png";
  };

  const toastTextStyles = () => {
    if (text === true) {
      return "text-green-500";
    } else if (text === false) {
      return "text-red-500";
    }
    return "text-gray-500";
  };

  return (
    <div
      className={`absolute bottom-26 left-1/2 w-fit -translate-x-[50%] md:static md:bottom-auto md:left-auto md:w-[120px] 
        md:translate-x-0 ${toastStyles()} items-center gap-2 rounded-2xl bg-white p-1 shadow-lg transition-opacity duration-300 ${
        text === true || text === false
          ? "flex opacity-100"
          : "hidden opacity-0"
      }`}
    >
      <img className="w-6" src={toastImage()} alt="icon" />
      <p className={`text-xs font-medium ${toastTextStyles()}`}>
        {toastMessages()}
      </p>
    </div>
  );
}

export default Toast;
