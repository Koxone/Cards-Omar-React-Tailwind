import React, { useEffect, useState } from "react";
import { UserReservationChecker } from "../../logic/UserReservationChecker";

function Login({ onClose, visible }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [reservationCode, setReservationCode] = useState("");

  const { checkReservation, reservation, loading, error } = UserReservationChecker();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !reservationCode) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const data = await checkReservation({
        code: reservationCode,
        email,
        language: "en",
      });

      if (data && data.status === "CONFIRMED") {
        setIsLoggedIn(true);
        console.log("✅ Reserva confirmada:", data);
        onClose();
      } else {
        alert("Reservation not found or not confirmed.");
      }
    } catch (err) {
      console.error("❌ Error al verificar:", err);
      alert("There was a problem verifying your reservation.");
    }
  };

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
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full border border-[#297da9] ps-[52px] pe-[44px] outline-none"
            type="text"
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <p className="text-lg font-semibold tracking-wide">Reservation Code</p>
          <input
            id="reservationCode"
            value={reservationCode}
            onChange={(e) => setReservationCode(e.target.value)}
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
            onClick={handleLogin}
            disabled={loading}
            className="flex cursor-pointer items-center justify-center rounded-[42px] border bg-[#297da9] px-12 py-4 text-base font-semibold text-white shadow-2xl transition-colors duration-300 hover:bg-[#004165] active:bg-[#004165]"
          >
            {loading ? "Verifying..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
