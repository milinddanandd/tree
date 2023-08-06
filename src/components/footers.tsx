import { FunctionComponent } from "react";
import styles from "./footers.module.css";
const Footers: FunctionComponent = () => {
  return (
    <div className={styles.footers}>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.link01}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
            <div className={styles.label}>Link</div>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
          </div>
          <div className={styles.link01}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
            <div className={styles.label}>Link</div>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
          </div>
          <div className={styles.link01}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
            <div className={styles.label}>Link</div>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.mark}>
            <img className={styles.blurIcon} alt="" src="/blur2@2x.png" />
          </div>
          <img className={styles.zeroIcon} alt="" src="/zero3.svg" />
        </div>
        <div className={styles.left}>
          <div className={styles.link01}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
            <div className={styles.label}>Link</div>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
          </div>
          <div className={styles.link01}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
            <div className={styles.label}>Link</div>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
          </div>
          <div className={styles.link01}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
            <div className={styles.label}>Link</div>
            <img
              className={styles.containerIcon}
              alt=""
              src="/container2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.divider1} />
      </div>
      <div className={styles.text}>©2023 madeofzero. All rights reserved.</div>
    </div>
  );
};

export default Footers;
