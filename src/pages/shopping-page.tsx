import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "../components/component1";
import styles from "./shopping-page.module.css";
const ShoppingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onShoppingContinueTextClick = useCallback(() => {
    navigate("/tree-page");
  }, [navigate]);

  const onArrowIconClick = useCallback(() => {
    navigate("/tree-page");
  }, [navigate]);

  const onTrashCanIconClick = useCallback(() => {
    navigate("/shopping-page-empty");
  }, [navigate]);

  return (
    <div className={styles.shoppingPage}>
      <div className={styles.shoppingPageChild} />
      <div className={styles.div}>1</div>
      <div
        className={styles.shoppingContinue}
        onClick={onShoppingContinueTextClick}
      >
        Shopping Continue
      </div>
      <div className={styles.shoppingCart}>Shopping cart</div>
      <div className={styles.italyPizza}>Italy Pizza</div>
      <div className={styles.youHave3}>You have 3 item in your cart</div>
      <div className={styles.extraCheeseAnd}>Extra cheese and toping</div>
      <img
        className={styles.arrowIcon}
        alt=""
        src="/arrow@2x.png"
        onClick={onArrowIconClick}
      />
      <div className={styles.shoppingPageItem} />
      <img className={styles.shoppingPageInner} alt="" src="/group-4.svg" />
      <div className={styles.div1}>$681</div>
      <img
        className={styles.trashCanIcon}
        alt=""
        src="/trash-can@2x.png"
        onClick={onTrashCanIconClick}
      />
      <img
        className={styles.photo1501004318641B39e6451beIcon}
        alt=""
        src="/photo1501004318641b39e6451bec6-11@2x.png"
      />
      <Component1
        rectangle3="/rectangle-3@2x.png"
        rectangle9="/rectangle-9@2x.png"
        rectangle10="/rectangle-10@2x.png"
        rectangle11="/rectangle-11@2x.png"
        right="/right@2x.png"
        component1Position="absolute"
        component1Width="664px"
        component1Height="761px"
        component1Top="71px"
        component1Left="681px"
        lineDivRight="2.76%"
      />
    </div>
  );
};

export default ShoppingPage;
