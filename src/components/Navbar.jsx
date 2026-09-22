import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      { <NavLink className={styles.brand} to="/">
        <img
          src={`${import.meta.env.BASE_URL}favicon.svg`}
          alt="Logo"
        />
     </NavLink> }

      <nav className={styles.nav} aria-label="Primær navigation">
        <NavLink
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""]
              .filter(Boolean)
              .join(" ")
          }
          to="/projects"
        >
          Projekter
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""]
              .filter(Boolean)
              .join(" ")
          }
          to="/about"
        >
          Om mig
        </NavLink>
        <a className={styles.link} href="#kontakt">
          Kontakt
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
