import { useContext, useState, useEffect } from "react";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import CartImage from "../../Images/cart.png";

const CartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;
  const btnClasses = `${classes.cartButton} ${
    btnAnimation ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.numberItems}> {numberOfItems}</span>
      <span>
        <img src={CartImage} alt={"cartImage"} className={classes.cart} />
      </span>
    </button>
  );
};

export default CartButton;
