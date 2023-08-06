import { FunctionComponent } from "react";
import styles from "./add-cart.module.css";
const AddCart: FunctionComponent = () => {
  return (
    <div className={styles.property1variant2}>
      <img
        className={styles.addCartRectangle}
        alt=""
        src="/add-cart-rectangle1.svg"
      />
      <div className={styles.addToCart}>Added to cart</div>
    </div>
  );
};

export default AddCart;
