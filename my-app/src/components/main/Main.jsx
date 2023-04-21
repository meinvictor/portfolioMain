import styles from "./Main.module.scss"
import Introduce from "./introduce/Introduce"
import Socials from "./socials/Socials"
const Main = () => {
  return (
    <div className={styles.main}>
      <Introduce />
      <Socials />
    </div>
  );
};

export default Main;
