import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.562</span>
        <span className={styles.detail}>
          <span className={styles.positive}>15% </span>more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
