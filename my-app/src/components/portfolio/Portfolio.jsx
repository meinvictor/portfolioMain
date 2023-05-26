import styles from "./Portfolio.module.scss";
import items from "./data/portfolioData.js";

const Portfolio = () => {
  return (
    <div>
      <div className={styles.pContainer}>
        {items.map((item, index) => (
          <div className={styles.pItem} key={index}>
            <a href={item.pUrl} target={'_blank'}>
              <figure className={styles.card}>
                <img src={item.pImg} alt={item.pDesc} />
                <figcaption className={styles.card_title}>
                  {item.pName}
                </figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
