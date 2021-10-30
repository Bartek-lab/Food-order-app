import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <div className={classes.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.priceBox}>
          <span>{price}</span>
          <span>x {props.totalAmount}</span>
        </div>
      </div>
      <div>{props.totalPrice}</div>
      <div className={classes.buttonBox}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
