import { FunctionComponent } from "react";
import styles from "./Desktop1.module.css";
const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.plantCard}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/ellipse-33@2x.png" />
          <div className={styles.indoor}>Indoor</div>
          <div className={styles.leavesLights}>Leaves Lights</div>
        </div>
        <div className={styles.buyNowButton}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <div className={styles.addToCartContainer}>
            <p className={styles.buyNow}>Buy Now</p>
          </div>
          <img className={styles.buyNowIcon} alt="" src="/buy-now-icon.svg" />
        </div>
        <div className={styles.addCartButton}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shoppingcart-icon.svg"
          />
          <div className={styles.addToCartContainer}>Add to cart</div>
        </div>
      </div>
      <div className={styles.plantCard1}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/ellipse-33@2x.png" />
          <div className={styles.indoor}>Indoor</div>
          <div className={styles.leavesLights}>Leaves Lights</div>
        </div>
        <div className={styles.buyNowButton}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <div className={styles.addToCartContainer}>
            <p className={styles.buyNow}>Buy Now</p>
          </div>
          <img className={styles.buyNowIcon} alt="" src="/buy-now-icon.svg" />
        </div>
        <div className={styles.addCartButton}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shoppingcart-icon1.svg"
          />
          <div className={styles.addToCartContainer}>Add to cart</div>
        </div>
      </div>
      <div className={styles.plantCard2}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/ellipse-33@2x.png" />
          <div className={styles.indoor}>Indoor</div>
          <div className={styles.leavesLights}>Leaves Lights</div>
        </div>
        <div className={styles.buyNowButton}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <div className={styles.addToCartContainer}>
            <p className={styles.buyNow}>Buy Now</p>
          </div>
          <img className={styles.buyNowIcon} alt="" src="/buy-now-icon.svg" />
        </div>
        <div className={styles.addCartButton}>
          <img
            className={styles.addCartRectangle}
            alt=""
            src="/add-cart-rectangle.svg"
          />
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shoppingcart-icon.svg"
          />
          <div className={styles.addToCartContainer}>Add to cart</div>
        </div>
      </div>
      <div className={styles.desktop1Child} />
      <div className={styles.rect1Parent}>
        <img className={styles.rect1Icon} alt="" src="/rect-1@2x.png" />
        <div className={styles.frame}>
          <img className={styles.frameChild} alt="" src="/group-5.svg" />
          <div className={styles.bySouha}>{`By Souha . H `}</div>
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
          <img className={styles.frameItem} alt="" src="/vector-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
