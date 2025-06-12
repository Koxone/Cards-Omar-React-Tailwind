import { useState, useCallback } from "react";

/**
 * Hook para verificar una reservación en sacbetransfers.com
 *
 * @returns {
 *   checkReservation: ({ code, email, language }) => Promise<Reservation>,
 *   reservation: Reservation | null,
 *   loading: boolean,
 *   error: string | null
 * }
 */
export function useReservationChecker() {
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
        return data; // devuelve también el resultado por si lo quieres usar in-line
      } catch (err) {
        const msg =
          err instanceof Error
            ? err.message
            : "Error desconocido al verificar la reservación";
        setError(msg);
        throw err; // re-lanza para manejarlo arriba si quieres
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { checkReservation, reservation, loading, error };
}

/**
 * Helpers opcionales para validar el resultado sin mezclar lógica con la UI
 */
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
