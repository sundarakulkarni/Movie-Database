import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <App />
  </>
);
