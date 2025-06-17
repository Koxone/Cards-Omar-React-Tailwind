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

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center border border-[var(--color-primary)] bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-50 flex w-[calc(100%-40px)] flex-col items-center justify-center gap-4 rounded-2xl border border-[#297da9] bg-white p-9"
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

          <div className="mt-14 flex w-full items-center justify-center gap-4 md:mt-0 md:justify-start">
            <button
              onClick={onClose}
              type="button"
              className="flex w-[124.63px] cursor-pointer items-center justify-center rounded-[42px] border bg-neutral-500/50 px-5 py-3 text-base font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
            >
              {t("login.buttonClose")}
            </button>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="flex cursor-pointer items-center justify-center rounded-[42px] border bg-[#297da9] px-8 py-3 text-base font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
            >
              {loading ? t("login.verifying") : t("login.confirm")}
            </button>
            {toastVisible && <Toast text={toastSuccess} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
