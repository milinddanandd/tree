import { FunctionComponent } from "react";
import styles from "./arrow-right-circle.module.css";
const ArrowRightCircle: FunctionComponent = () => {
  return (
    <div className={styles.arrowRightCircle}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
    </div>
  );
};

export default ArrowRightCircle;
