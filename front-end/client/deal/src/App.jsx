import { RouterProvider } from "react-router-dom";
import router from "./routers";
// import { ThemeProvider } from "../context/ThemeContext";
import ThemeProvider from "./context/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
