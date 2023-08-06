import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./footer.module.css";

type FooterType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsCode?: string;

  /** Style props */
  footerPosition?: Property.Position;
  footerTop?: Property.Top;
  footerLeft?: Property.Left;
  footerWidth?: Property.Width;
  separatorLineIconLeft?: Property.Left;
  homeCursor?: Property.Cursor;

  /** Action props */
  onProductsTextClick?: () => void;
  onComponent2ContainerClick?: () => void;
  onAboutTextClick?: () => void;
  onHomeTextClick?: () => void;
};

const Footer: FunctionComponent<FooterType> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  footerPosition,
  footerTop,
  footerLeft,
  footerWidth,
  separatorLineIconLeft,
  homeCursor,
  onProductsTextClick,
  onComponent2ContainerClick,
  onAboutTextClick,
  onHomeTextClick,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
      width: footerWidth,
    };
  }, [footerPosition, footerTop, footerLeft, footerWidth]);

  const separatorLineIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: separatorLineIconLeft,
    };
  }, [separatorLineIconLeft]);

  const homeStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: homeCursor,
    };
  }, [homeCursor]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerBg} />
      <div className={styles.allRightsReserved}>2023 All Rights Reserved</div>
      <img
        className={styles.separatorLineIcon}
        alt=""
        src={imageDimensions}
        style={separatorLineIconStyle}
      />
      <img className={styles.iconCopyright} alt="" src={imageDimensionsText} />
      <div className={styles.products} onClick={onProductsTextClick}>
        Products
      </div>
      <div className={styles.component2} onClick={onComponent2ContainerClick}>
        <div className={styles.account}>Account</div>
        <img className={styles.userIcon} alt="" src={imageDimensionsCode} />
      </div>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.home} onClick={onHomeTextClick} style={homeStyle}>
        <span className={styles.homeTxt}>
          <span className={styles.hom}>Hom</span>
          <span className={styles.e}>e</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
