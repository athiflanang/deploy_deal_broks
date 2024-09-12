import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "toastify-js/src/toastify.css";
import { StrictMode } from "react";
import App from "./App.jsx";
// import ThemeProvider from "./context/ThemeContext";
// import { themeContext } from "./context/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
