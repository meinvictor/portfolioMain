import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <h2>
        {"</"}
        <span className={styles.logoColor}>Vik</span>
        {">"}
      </h2>
    </div>
  );
};
export default Logo;
