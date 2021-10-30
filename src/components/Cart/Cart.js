import classes from "./Cart.module.css";
import Modal from "../Modal/Modal";
import { useContext } from "react";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.onRemoveItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.onAddItem({ ...item, amount: 1 });
  };

  const totalAmount = ctx.totalAmount.toFixed(2);

  return (
    <Modal onClose={props.hideCartModal}>
      <div className={classes.cart}>
        <div className={classes.itemsBox}>
          <h2>Cart</h2>
          <h3 className={classes.emptyInfo}>
            {ctx.items.length > 0 ? "" : "Your cart is empty!"}
          </h3>
          <ul>
            {ctx.items.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  totalAmount={item.amount}
                  name={item.name}
                  price={item.price}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  onAdd={cartItemAddHandler.bind(null, item)}
                />
              );
            })}
          </ul>
        </div>
        <div className={classes.submitBox}>
          <p className={classes.totalPrice}>Total price: {totalAmount}$</p>
          <button className={classes.orderButton}>Order</button>
          <button onClick={props.hideCartModal} className={classes.closeButton}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
