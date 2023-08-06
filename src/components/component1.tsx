import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./component1.module.css";

type Component1Type = {
  rectangle3?: string;
  rectangle9?: string;
  rectangle10?: string;
  rectangle11?: string;
  right?: string;

  /** Style props */
  component1Position?: Property.Position;
  component1Width?: Property.Width;
  component1Height?: Property.Height;
  component1Top?: Property.Top;
  component1Left?: Property.Left;
  lineDivRight?: Property.Right;
};

const Component1: FunctionComponent<Component1Type> = ({
  rectangle3,
  rectangle9,
  rectangle10,
  rectangle11,
  right,
  component1Position,
  component1Width,
  component1Height,
  component1Top,
  component1Left,
  lineDivRight,
}) => {
  const component1Style: CSS.Properties = useMemo(() => {
    return {
      position: component1Position,
      width: component1Width,
      height: component1Height,
      top: component1Top,
      left: component1Left,
    };
  }, [
    component1Position,
    component1Width,
    component1Height,
    component1Top,
    component1Left,
  ]);

  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      right: lineDivRight,
    };
  }, [lineDivRight]);

  return (
    <div className={styles.component1} style={component1Style}>
      <div className={styles.component1Child} />
      <div className={styles.nameOnCard}>Name on card</div>
      <div className={styles.cardType}>Card type</div>
      <div className={styles.cardDetails}>Card Details</div>
      <div className={styles.component1Item} />
      <div className={styles.name}>Name</div>
      <div className={styles.expirationDate}>Expiration date</div>
      <div className={styles.component1Inner} />
      <div className={styles.mmyy}>mm/yy</div>
      <div className={styles.cvv}>CVV</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.div}>123</div>
      <div className={styles.cardNumber}>Card Number</div>
      <div className={styles.subtotal}>Subtotal</div>
      <div className={styles.div1}>$1,668</div>
      <div className={styles.div2}>$4</div>
      <div className={styles.div3}>$1,672</div>
      <div className={styles.shipping}>Shipping</div>
      <div className={styles.totalTaxIncl}>Total (Tax incl.)</div>
      <div className={styles.component1Child1} />
      <div className={styles.div4}>1111 2222 3333 4444</div>
      <div className={styles.component1Child2} />
      <img className={styles.rectangleIcon} alt="" src={rectangle3} />
      <img className={styles.component1Child3} alt="" src={rectangle9} />
      <img className={styles.component1Child4} alt="" src={rectangle10} />
      <img className={styles.component1Child5} alt="" src={rectangle11} />
      <div className={styles.component1Child6} />
      <b className={styles.seeAll}>See all</b>
      <div className={styles.lineDiv} style={lineDivStyle} />
      <div className={styles.div5}>$1,672</div>
      <div className={styles.checkout}>Checkout</div>
      <img className={styles.rightIcon} alt="" src={right} />
    </div>
  );
};

export default Component1;
