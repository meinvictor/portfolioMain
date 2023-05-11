import styles from "./Header.module.scss";
import Nav from "./navigation/Nav";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
    </div>
  );
};
export default Header;
