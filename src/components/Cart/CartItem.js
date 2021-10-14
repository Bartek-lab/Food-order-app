const CartItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        <span>{price}</span>
        <span>x {props.totalAmount}</span>
      </div>
      <div>{props.totalPrice}</div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
