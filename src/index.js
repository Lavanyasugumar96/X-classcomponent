import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CounterApp from "./counterApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
