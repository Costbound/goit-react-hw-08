import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUsername } from "../../redux/auth/selectors";

export default function AuthNav() {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUsername);

  return (
    <ul className={css.list}>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Log in
        </NavLink>
      </li>
    </ul>
  );
}
