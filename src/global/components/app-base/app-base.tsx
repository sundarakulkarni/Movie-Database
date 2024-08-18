import { Outlet } from "react-router-dom";
import AppFooter from "../footer/app-footer";
import "./app-base.scss";

export default function AppBase() {
  return (
    <div className="app-base">
      <main className="app-content">
        <Outlet />
      </main>

      <div className="footer">
        <AppFooter />
      </div>
    </div>
  );
}
