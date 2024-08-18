import { NavLink } from "react-router-dom";
import { footer } from "./app-footer-constants";
import "./app-footer.scss";

export default function AppFooter() {
  return (
    <footer className="app-footer">
      {footer.map((item) => {
        return (
          <NavLink
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active nav-item" : "nav-item"
            }
            key={item.id}
          >
            <img src={item.icon} alt={item.name} />
            {item.name}
          </NavLink>
        );
      })}
    </footer>
  );
}
