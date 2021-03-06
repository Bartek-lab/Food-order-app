import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.onAddItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.mealItem}>
      <div className={classes.mealInfo}>
        <div className={classes.title}>
          <h4>{props.name}</h4>
        </div>
        <img src={props.image} alt="food_image" />
        <div className={classes.mealDescription}>
          {props.description}:<div className={classes.price}>{price}</div>
        </div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
