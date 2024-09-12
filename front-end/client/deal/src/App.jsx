import { RouterProvider } from "react-router-dom";
import router from "./routers";
// import { ThemeProvider } from "../context/ThemeContext";
import ThemeProvider from "./context/themeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
