import styles from "./Portfolio.module.scss";
import items from "./data/portfolioData.js";

const Portfolio = () => {
  
  return (
    <div className={styles.pContainer}>
      {items.map((item, index) => (
        <div className={styles.pItem} key={index}>
          <div className={styles.pItemImg}>
            <img src={item.pImg} alt={"itemImg"} />
          </div>
          <div className={styles.pItemText}>
            <div className={styles.pItemName}>
              <h3>{item.pName}</h3>
            </div>
            <div className={styles.pItemDesribe}>
              <h5>{item.pDesc}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
