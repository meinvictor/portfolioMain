import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import copy from "copy-to-clipboard";
import Popup from "./popup/Popup";

const Nav = () => {
  const showNumber = () => {
    const number = document.querySelector(".number");
    const popup = document.querySelector(".showPopup");
    number.innerHTML = "095-75-654-03";
    copy("095-75-654-03");
    popup.style.display = "block";
  };
  return (
    <div>
      <div className="showPopup" style={{ display: "none" }}>
        <Popup />
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
            About Me
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#ff3858" : "#fff"
            })}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className={styles.item}>
          <button className={styles.itemBtn} onClick={showNumber}>
            <span className={"number"}>Let's Talk</span>
          </button>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
