import styles from "./Socials.module.scss";
import githubImg from "../../../assets/images/github.png";
import linkedinImg from "../../../assets/images/linkedin.png";
import instagramImg from "../../../assets/images/instagram.png";
import telegramImg from "../../../assets/images/telegram.png";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.line}></div>
      <div className={styles.links}>
        <li>
          <a href="https://github.com/meinvictor" target="_blank">
            <img src={githubImg} alt="Github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/viktor-kaniuk-408447185/"
            target="_blank"
          >
            <img src={linkedinImg} alt="Linked In" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/meinvictor/" target="_blank">
            <img src={instagramImg} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://t.me/meinvictor" target="_blank">
            <img src={telegramImg} alt="Telegram" />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Socials;
