import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navs.module.css";
const Navs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUserIconClick = useCallback(() => {
    navigate("/dashboard-login");
  }, [navigate]);

  return (
    <nav className={styles.navs}>
      <div className={styles.frame}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src="/star-1.svg" />
          <div className={styles.tree}>Tree</div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.productsParent}>
            <div className={styles.home}>Products</div>
            <img
              className={styles.akarIconschevronDown}
              alt=""
              src="/akariconschevrondown.svg"
            />
          </div>
          <div className={styles.home}>About</div>
          <div className={styles.home}>Pricing</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.searchBox}>
          <img className={styles.icon} alt="" src="/-.svg" />
          <div className={styles.searchForAnythingContainer}>
            <span className={styles.search}>{`Search `}</span>
            <span className={styles.forAnything}>for anything</span>
          </div>
        </div>
        <img
          className={styles.userIcon}
          alt=""
          src="/user.svg"
          onClick={onUserIconClick}
        />
        <img
          className={styles.shoppingCartIcon}
          alt=""
          src="/shoppingcart.svg"
        />
      </div>
    </nav>
  );
};

export default Navs;
