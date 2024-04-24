import css from "./HomePage.module.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone contacts manager
        <FaPhoneAlt className={css.icon} />
      </h1>
      <p className={css.para}>For continue Sing in or Sign up</p>
    </div>
  );
}
