import { FunctionComponent } from 'react';
import C$39:396$ from "F$39:396$";
import styles from './plant-cart.module.css';

type PlantCartType = {
  dimensionCode?: string;
  productCode?: string;
  
  /** Action props */
  onBuyNowButton1Click?: () => void;
}

const PlantCart:FunctionComponent<PlantCartType> = ({ dimensionCode, productCode, onBuyNowButton1Click }) => {

  return (
    <div className={styles.plantCard} id="plant-card">
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.indoor}>Indoor</div>
        <div className={styles.leavesLights}>Leaves Lights</div>
        <img className={styles.photo1501004318641B39e6451beIcon} alt="" src="/photo1501004318641b39e6451bec6-1@2x.png" /><Property1Default dimensionCode="/shoppingcart-icon2.svg" addCartRectangleTop="89.26%" addCartRectangleLeft="2.51%" addCartRectangleWidth="36.59%" addCartRectangleHeight="7.83%" addCartRectangleRight="60.89%" addCartRectangleBottom="2.91%" />
      </div>
      <div className={styles.buyNowButton} onClick={onBuyNowButton1Click}>
        <img className={styles.addCartRectangle} alt="" src="/add-cart-rectangle.svg" />
        <div className={styles.addToCartContainer}>
          <p className={styles.buyNow}>Buy Now</p>
        </div>
        <img className={styles.buyNowIcon} alt="" src={productCode} />
      </div>
    </div>);
};

export default PlantCart;
