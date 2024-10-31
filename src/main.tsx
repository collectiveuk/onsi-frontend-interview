import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TaxCalculator } from "./TaxCalculator.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaxCalculator />
  </StrictMode>,
);
