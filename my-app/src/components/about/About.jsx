import styles from "./About.module.scss";
import Progress from "./progress/Progress";

function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.skills}>
          <Progress/>
        </div>
        <div className={styles.about}>
          <div className={styles.container}>
            <div className={styles.box}>
              <span className={styles.title}>WEB DEVELOPMENT</span>
              <div>
                <strong>
                  Good knowledge and experience in developing web
                  applications using React. I have an understanding of basic
                  React concepts such as components, state, events, and
                  component lifecycle.
                </strong>
              </div>
            </div>
          </div>
          <div className={`${styles.container} ${styles.containerAdditional}`}>
            <div className={styles.box}>
              <span className={styles.title}>APP DESIGN</span>
              <div>
                <strong>
                  I am well versed in HTML, CSS and JavaScript required for web
                  application development. I have skills in styling React
                  components using CSS(SASS).
                </strong>
              </div>
            </div>
          </div>
          <div className={`${styles.container} ${styles.containerAdditional2}`}>
            <div className={styles.box}>
              <span className={styles.title}>
                MOTIVATION
              </span>
              <div>
                <strong>
                  Looking for an opportunity to work on web projects where I can
                  develop my React development skills and learn from experienced
                  developers.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
