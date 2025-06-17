import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import { ReservationProvider } from "./context/ReservationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReservationProvider>
      <App />
    </ReservationProvider>
  </StrictMode>,
);
