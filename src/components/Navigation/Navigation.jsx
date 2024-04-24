import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navigation() {
  return (
    <nav className={css.container}>
      <ul className={css.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
