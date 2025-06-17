import { useCallback, useEffect, useState } from "react";

export function UserReservationChecker() {
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkReservation = useCallback(
    async ({ code, email, language = "en" }) => {
      setLoading(true);
      setError(null);
      setReservation(null);

      try {
        const formData = new FormData();
        formData.append("code", code);
        formData.append("email", email);
        formData.append("language", language);

        const response = await fetch(
          "https://api.sacbetransfers.com/api/v1/reservation/get",
          { method: "POST", body: formData },
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setReservation(data);
        return data;
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(msg);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { checkReservation, reservation, loading, error };
}

export function getReservationFlags(reservation) {
  if (!reservation) return null;

  const isConfirmed = reservation.status === "CONFIRMED";
  const isFlexible = reservation.config?.is_flexible === 1;
  const isNotCancelled = reservation.config?.is_cancelled === 0;
  return {
    isConfirmed,
    isFlexible,
    isNotCancelled,
    isValid: isConfirmed && isFlexible && isNotCancelled,
  };
}
