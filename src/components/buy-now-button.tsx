import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./buy-now-button.module.css";

type BuyNowButtonType = {
  itemCode?: string;

  /** Style props */
  buyNowButtonPosition?: Property.Position;
  buyNowButtonWidth?: Property.Width;
  buyNowButtonHeight?: Property.Height;
  buyNowButtonTop?: Property.Top;
  buyNowButtonRight?: Property.Right;
  buyNowButtonBottom?: Property.Bottom;
  buyNowButtonLeft?: Property.Left;

  /** Action props */
  onBuyNowButtonClick?: () => void;
};

const BuyNowButton: FunctionComponent<BuyNowButtonType> = ({
  itemCode,
  buyNowButtonPosition,
  buyNowButtonWidth,
  buyNowButtonHeight,
  buyNowButtonTop,
  buyNowButtonRight,
  buyNowButtonBottom,
  buyNowButtonLeft,
  onBuyNowButtonClick,
}) => {
  const buyNowButtonStyle: CSS.Properties = useMemo(() => {
    return {
      position: buyNowButtonPosition,
      width: buyNowButtonWidth,
      height: buyNowButtonHeight,
      top: buyNowButtonTop,
      right: buyNowButtonRight,
      bottom: buyNowButtonBottom,
      left: buyNowButtonLeft,
    };
  }, [
    buyNowButtonPosition,
    buyNowButtonWidth,
    buyNowButtonHeight,
    buyNowButtonTop,
    buyNowButtonRight,
    buyNowButtonBottom,
    buyNowButtonLeft,
  ]);

  return (
    <div
      className={styles.buyNowButton}
      onClick={onBuyNowButtonClick}
      style={buyNowButtonStyle}
    >
      <img
        className={styles.addCartRectangle}
        alt=""
        src="/add-cart-rectangle.svg"
      />
      <div className={styles.addToCartContainer}>
        <p className={styles.buyNow}>Buy Now</p>
      </div>
      <img className={styles.buyNowIcon} alt="" src={itemCode} />
    </div>
  );
};

export default BuyNowButton;
