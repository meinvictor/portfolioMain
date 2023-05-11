import styles from "./Header.module.scss";
import Nav from './navigation/Nav'

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
      <Nav/>
    </div>
  );
};

export default Header;
