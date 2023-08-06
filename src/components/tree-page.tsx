import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./main";
import Footer from "./footer";
import styles from "./tree-page.module.css";
const TreePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBuyNowButtonClick = useCallback(() => {
    navigate("/shopping-page");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/shopping-page");
  }, [navigate]);

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/dashboard-login");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-section");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/tree-page");
  }, [navigate]);

  const onTreePageContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='main']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUserIcon1Click = useCallback(() => {
    navigate("/dashboard-login");
  }, [navigate]);

  return (
    <div className={styles.treePage} onClick={onTreePageContainerClick}>
      <Main
        shoppingCartIcon="/shoppingcart-icon4.svg"
        buyNowIcon="/buy-now-icon2.svg"
        shoppingCartIcon1="/shoppingcart-icon5.svg"
        shoppingCartIcon2="/shoppingcart-icon2.svg"
        buyNowIcon1="/buy-now-icon2.svg"
        arrowRightCircleSrc="/arrowrightcircle.svg"
        rect1="/rect-11@2x.png"
        vector1="/vector-12.svg"
        group5="/group-52.svg"
        mainPosition="absolute"
        mainWidth="1423px"
        mainHeight="1786px"
        mainTop="21px"
        mainLeft="2px"
        plantCardBorderRadius="56px"
        onBuyNowButtonClick={onBuyNowButtonClick}
        onBuyNowButton1Click={onBuyNowButtonClick}
      />
      <Footer
        imageDimensions="/separator-line2.svg"
        imageDimensionsText="/-icon-copyright2.svg"
        imageDimensionsCode="/user3.svg"
        footerPosition="absolute"
        footerTop="1495px"
        footerLeft="-17px"
        footerWidth="1442px"
        separatorLineIconLeft="4.65%"
        homeCursor="pointer"
        onProductsTextClick={onProductsTextClick}
        onComponent2ContainerClick={onComponent2ContainerClick}
        onAboutTextClick={onAboutTextClick}
        onHomeTextClick={onHomeTextClick}
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
            <img className={styles.icon} alt="" src="/-3.svg" />
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
            src="/shoppingcart2.svg"
          />
        </div>
      </nav>
    </div>
  );
};

export default TreePage;
