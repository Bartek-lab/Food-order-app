import { useContext } from "react";
import classes from "./Button.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span> {numberOfItems}</span>
    </button>
  );
};

export default CartButton;
