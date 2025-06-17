import React, { useEffect, useState } from "react";
import { UserReservationChecker } from "../../logic/UserReservationChecker";
import Toast from "./Toast";
import { useTranslation } from "react-i18next";

function Login({ onClose, visible, onLoginSuccess }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [reservationCode, setReservationCode] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastSuccess, setToastSuccess] = useState(null);

  const { checkReservation, reservation, loading, error } =
    UserReservationChecker();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !reservationCode) {
      setToastSuccess(false);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
      return;
    }

    try {
      const data = await checkReservation({
        code: reservationCode,
        email,
        language: "en",
      });

      if (data && data.status === "CONFIRMED") {
        setToastSuccess(true);
        setToastVisible(true);

        setTimeout(() => {
          setToastVisible(false);
          onLoginSuccess();
          onClose();
        }, 2000);
      } else {
        setToastSuccess(false);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000);
      }
    } catch (err) {
      setToastSuccess(false);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    }
  };

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const { t } = useTranslation();

  useEffect(() => {
    if (toastSuccess !== null) {
      const timer = setTimeout(() => {
        setToastSuccess(null); // Reset success/fail state
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastSuccess]);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-50 flex w-[calc(100%-40px)] flex-col items-center justify-center gap-4 rounded-2xl border border-[#297da9] bg-white p-9 sm:w-[644px]"
        >
          <div className="flex w-full flex-col gap-1.5">
            <h2 className="text-left text-2xl leading-[1.2] font-bold">
              {t("login.title")}
            </h2>
            <p className="text-sm font-semibold tracking-wide text-black">
              {t("login.subtitle")}
            </p>
          </div>

          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-4">
              <input
                id="email"
                value={email}
                placeholder={t("login.emailPlaceholder")}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-2xl border border-[#297da9] ps-[20px] pe-[44px] outline-none"
                type="text"
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <input
                id="reservationCode"
                placeholder={t("login.reservationCodePlaceholder")}
                value={reservationCode}
                onChange={(e) => setReservationCode(e.target.value)}
                type="text"
                className="h-12 w-full rounded-2xl border border-[#297da9] ps-[20px] pe-[30px] outline-none"
              />
            </div>
          </div>
          {toastVisible && <Toast text={toastSuccess} />}

          <div className="mt-14 flex w-full items-center justify-center gap-4 sm:mt-11 md:justify-start">
            <button
              onClick={onClose}
              type="button"
              className="flex w-[124.63px] cursor-pointer items-center justify-center rounded-[42px] border bg-neutral-500/50 px-5 py-3 text-base font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
            >
              {t("login.buttonClose")}
            </button>
            <button
              id="botonGPT"
              onClick={handleLogin}
              disabled={loading}
              className={`flex items-center justify-center gap-2 rounded-[42px] border px-8 py-3 text-base font-semibold text-white shadow-2xl transition-all duration-500 ease-in-out ${toastSuccess === true ? "bg-green-800" : ""} ${toastSuccess === false ? "bg-red-800" : ""} ${toastSuccess === null && !loading ? "bg-[#297da9] hover:bg-[#004165] active:bg-[#004165]" : ""} ${loading ? "cursor-not-allowed bg-gray-400" : ""} `}
            >
              {loading ? (
                <div role="status" className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 animate-spin fill-white text-gray-200"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : toastSuccess === true ? (
                <img
                  src="/assets/success.png"
                  alt="Success"
                  className="animate-scale-fade-in w-6"
                />
              ) : toastSuccess === false ? (
                <img
                  src="/assets/failed.png"
                  alt="Failed"
                  className="animate-scale-fade-in w-6"
                />
              ) : (
                <>{t("login.confirm")}</>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
