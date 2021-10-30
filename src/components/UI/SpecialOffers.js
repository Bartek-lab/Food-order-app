import MealItem from "../Meals/MealItem/MealItem";
import classes from "./SpecialOffer.module.css";
const SpecialOffers = (props) => {
  const cheapMeal = props.dummyMeals
    .filter((val) => {
      if (val.price < 9) {
        return val;
      } else if (val.prive > 9) {
        return val;
      }
      return false;
    })
    .map((meal) => {
      return (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          image={meal.image}
          price={meal.price}
        />
      );
    });

  const cheapDrink = props.dummyDrinks
    .filter((val) => {
      if (val.price < 8) {
        return val;
      } else if (val.prive > 8) {
        return val;
      }
      return false;
    })
    .map((drink) => {
      return (
        <MealItem
          key={drink.id}
          id={drink.id}
          name={drink.name}
          description={drink.description}
          image={drink.image}
          price={drink.price}
        />
      );
    });

  return (
    <div className={classes.bestOffersSection}>
      <h3>The best offers... </h3>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <div className={classes.bestOffersBox}>{cheapMeal}</div>
      <h3>Amazing drinks... </h3>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <div className={classes.bestDrinksOffersBox}> {cheapDrink}</div>
      <span></span>
    </div>
  );
};

export default SpecialOffers;
