import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./main.module.css";

type MainType = {
  shoppingCartIcon?: string;
  buyNowIcon?: string;
  shoppingCartIcon1?: string;
  shoppingCartIcon2?: string;
  buyNowIcon1?: string;
  arrowRightCircleSrc?: string;
  rect1?: string;
  vector1?: string;
  group5?: string;

  /** Style props */
  mainPosition?: Property.Position;
  mainWidth?: Property.Width;
  mainHeight?: Property.Height;
  mainTop?: Property.Top;
  mainLeft?: Property.Left;
  plantCardBorderRadius?: Property.BorderRadius;

  /** Action props */
  onBuyNowButtonClick?: () => void;
  onBuyNowButton1Click?: () => void;
};

const Main: FunctionComponent<MainType> = ({
  shoppingCartIcon,
  buyNowIcon,
  shoppingCartIcon1,
  shoppingCartIcon2,
  buyNowIcon1,
  arrowRightCircleSrc,
  rect1,
  vector1,
  group5,
  mainPosition,
  mainWidth,
  mainHeight,
  mainTop,
  mainLeft,
  plantCardBorderRadius,
  onBuyNowButtonClick,
  onBuyNowButton1Click,
}) => {
  const mainStyle: CSS.Properties = useMemo(() => {
    return {
      position: mainPosition,
      width: mainWidth,
      height: mainHeight,
      top: mainTop,
      left: mainLeft,
    };
  }, [mainPosition, mainWidth, mainHeight, mainTop, mainLeft]);

  const rect1IconStyle: CSS.Properties = useMemo(() => {
    return {
      borderRadius: plantCardBorderRadius,
    };
  }, [plantCardBorderRadius]);

  return (
    <div className={styles.main} id="plant-card" style={mainStyle}>
      <div className={styles.plantCard} id="plant-card">
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.indoor}>Indoor</div>
          <div className={styles.leavesLights}>Leaves Lights</div>
          <img
            className={styles.photo1501004318641B39e6451beIcon}
            alt=""
            src="/photo1501004318641b39e6451bec6-1@2x.png"
          />
          <div className={styles.addCartButton}>
            <img
              className={styles.addCartRectangle}
              alt=""
              src="/add-cart-rectangle.svg"
            />
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src={shoppingCartIcon}
            />
            <div className={styles.addToCart}>Add to cart</div>
          </div>
          <div className={styles.buyNowButton} onClick={onBuyNowButtonClick}>
            <img
              className={styles.addCartRectangle}
              alt=""
              src="/add-cart-rectangle.svg"
            />
            <div className={styles.addToCart}>
              <p className={styles.buyNow}>Buy Now</p>
            </div>
            <img className={styles.buyNowIcon} alt="" src={buyNowIcon} />
          </div>
        </div>
      </div>
      <div className={styles.plantCard1} id="plant-card">
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.indoor}>Indoor</div>
          <div className={styles.leavesLights}>Leaves Lights</div>
          <img
            className={styles.photo1501004318641B39e6451beIcon}
            alt=""
            src="/photo1501004318641b39e6451bec6-1@2x.png"
          />
          <div className={styles.addCartButton}>
            <img
              className={styles.addCartRectangle}
              alt=""
              src="/add-cart-rectangle.svg"
            />
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src={shoppingCartIcon1}
            />
            <div className={styles.addToCart}>Add to cart</div>
          </div>
        </div>
      </div>
      <div className={styles.plantCard2} id="plant-card">
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.indoor}>Indoor</div>
          <div className={styles.leavesLights}>Leaves Lights</div>
          <img
            className={styles.photo1501004318641B39e6451beIcon}
            alt=""
            src="/photo1501004318641b39e6451bec6-1@2x.png"
          />
          <div className={styles.addCartButton}>
            <img
              className={styles.addCartRectangle}
              alt=""
              src="/add-cart-rectangle.svg"
            />
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src={shoppingCartIcon2}
            />
            <div className={styles.addToCart}>Add to cart</div>
          </div>
        </div>
        <div className={styles.buyNowButton1} onClick={onBuyNowButton1Click}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <div className={styles.addToCart}>
            <p className={styles.buyNow}>Buy Now</p>
          </div>
          <img className={styles.buyNowIcon} alt="" src={buyNowIcon1} />
        </div>
      </div>
      <img
        className={styles.arrowRightCircleIcon}
        alt=""
        src="/arrowrightcircle.svg"
      />
      <div className={styles.rect1Parent}>
        <img className={styles.rect1Icon} alt="" src="/rect-1@2x.png" />
        <div className={styles.frame}>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.buyNow}>Lorem ipsum dolor sit amet,aliqua</p>
            <p className={styles.buyNow}>consectetur adipiscing elit ut ...</p>
          </div>
          <div className={styles.discoverNewWayContainer}>
            <p className={styles.buyNow}>Discover new</p>
            <p className={styles.buyNow}>way to</p>
            <p className={styles.buyNow}>{`decorate `}</p>
            <p className={styles.buyNow}>your home .</p>
          </div>
          <div className={styles.blog}>Blog</div>
          <img className={styles.frameItem} alt="" src="/vector-11.svg" />
          <div className={styles.frame1}>
            <img className={styles.frameInner} alt="" src="/group-51.svg" />
            <div className={styles.bySouha}>{`By Souha . H `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
