import classes from "./Cart.module.css";
import Modal from "../Modal/Modal";
import { useContext } from "react";

import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.onRemoveItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.onAddItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={props.hideCartModal}>
      <div className={classes.cart}>
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
        <button onClick={props.hideCartModal}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
