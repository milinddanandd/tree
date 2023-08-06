import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import styles from "./about-section.module.css";
const AboutSection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/shopping-page");
  }, [navigate]);

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/dashboard-login");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-section");
  }, [navigate]);

  const onUserIcon1Click = useCallback(() => {
    navigate("/dashboard-login");
  }, [navigate]);

  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionChild} />
      <Footer
        imageDimensions="/separator-line1.svg"
        imageDimensionsText="/-icon-copyright1.svg"
        imageDimensionsCode="/user2.svg"
        footerPosition="absolute"
        footerTop="1732px"
        footerLeft="0px"
        footerWidth="1449px"
        separatorLineIconLeft="4.66%"
        homeCursor="unset"
        onProductsTextClick={onProductsTextClick}
        onComponent2ContainerClick={onComponent2ContainerClick}
        onAboutTextClick={onAboutTextClick}
      />
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
            <img className={styles.icon} alt="" src="/-2.svg" />
            <div className={styles.searchForAnythingContainer}>
              <span className={styles.search}>{`Search `}</span>
              <span className={styles.forAnything}>for anything</span>
            </div>
          </div>
          <img
            className={styles.userIcon}
            alt=""
            src="/user.svg"
            onClick={onUserIcon1Click}
          />
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shoppingcart1.svg"
          />
        </div>
      </nav>
      <img className={styles.mainPhotoIcon} alt="" src="/main-photo@2x.png" />
      <div className={styles.weAreA}>
        We are a group of students who have pledged together to support local
        nursery vendors. We are helping them join hands together with the world,
        with the help of internet.
      </div>
    </div>
  );
};

export default AboutSection;
