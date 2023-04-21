import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>
          {"</"}
          <span className={styles.logoColor}>Vik</span>
          {">"}
        </h2>
      </div>

      <nav className={styles.nav}>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#ff3858" : "#fff"
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#ff3858" : "#fff"
            })}
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li className={styles.item}>Portfolio</li>
        <li className={styles.item}>
          <button className={styles.itemBtn}>Let's Talk</button>
        </li>
      </nav>
    </div>
  );
};

export default Header;
