import { createContext, useContext, useState, useEffect } from "react";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservation, setReservation] = useState(null); //Data given by the API
  const [isLoggedIn, setIsLoggedIn] = useState(false); //User logged state
  const [email, setEmail] = useState(""); //User email for reservation
  const [reservationCode, setReservationCode] = useState(""); //Reservation code for API requests
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedReservation = localStorage.getItem("reservationData");
    const storedEmail = localStorage.getItem("email");
    const storedCode = localStorage.getItem("reservationCode");
    const storedLanguage = localStorage.getItem("language");

    if (storedLogin === "true") {
      setIsLoggedIn(true);
      if (storedReservation) {
        try {
          const parsed = JSON.parse(storedReservation);
          setReservation(parsed);
        } catch (err) {
          console.error("Error al leer reserva", err);
        }
      }
    }

    if (storedEmail) setEmail(storedEmail);
    if (storedCode) setReservationCode(storedCode);
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  const login = async (email, code, language) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("code", code);
    formData.append("language", language);

    const response = await fetch(
      "https://api.sacbetransfers.com/api/v1/reservation/get",
      { method: "POST", body: formData },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.status === "CONFIRMED") {
      setEmail(email);
      setReservationCode(code);
      setReservation(data);
      setIsLoggedIn(true);
      setLanguage(language);

      localStorage.setItem("language", language);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("reservationData", JSON.stringify(data));
      localStorage.setItem("email", email);
      localStorage.setItem("reservationCode", code);

      return data;
    } else {
      throw new Error("Reserva no confirmada");
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        setReservation,
        isLoggedIn,
        setIsLoggedIn,
        email,
        setEmail,
        reservationCode,
        setReservationCode,
        language,
        setLanguage,
        login,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservationContext = () => useContext(ReservationContext);
