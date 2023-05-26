import styles from "./Introduce.module.scss";
import workingImg from "../../../assets/images/workingImg.png";

const Introduce = () => {
  return (
    <div className={styles.introduce}>
      <div className={styles.welcome}>
        <h5>Hi there!</h5>
        <h1>
          I'm <span>Viktor Kaniuk</span>
        </h1>
        <h2>
          <span>I am</span> a Web Developer
        </h2>
        <div className={styles.btns}>
          <a href={"https://drive.google.com/file/d/1ZY12vp6D787yubXN9NNGx1zSIOIGpncH/view?usp=sharing"} target={'_blank'}>
            <button className={styles.resumeBtn}>Resume</button>
          </a>
          <a href={"https://t.me/meinvictor"} target={"_blank"}>
            <button className={styles.contactBtn}>Contact Me Fast</button>
          </a>
        </div>
      </div>
      <div className={styles.introImg}>
        <img src={workingImg} alt="Image" />
      </div>
    </div>
  );
};

export default Introduce;
