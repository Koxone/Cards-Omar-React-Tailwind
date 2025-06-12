import { useState } from "react";
import { useReservationChecker, getReservationFlags } from "./LogicaGPTo3";

export default function ReservationChecker() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const { checkReservation, reservation, loading, error } =
    useReservationChecker();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await checkReservation({ code, email, language: "en" });
      const flags = getReservationFlags(data);
      console.log("✅ Reserva válida →", data, flags); // éxito
    } catch (err) {
      console.error("❌ Error al verificar →", err); // fallo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Código de reserva"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Verificando…" : "Verificar"}
      </button>
    </form>
  );
}
