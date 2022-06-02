import React from "react";
import { createRoot } from  "react-dom/client";
import App from "./App";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);