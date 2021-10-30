import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MealsNav.module.css";

const MealsNav = () => {
  const [mealsNavActive, setMealsNavActive] = useState(true);
  const [appetizersNavActive, setAppetizersNavActive] = useState(false);
  const [drinksNavActive, setDrinksNavActive] = useState(false);
  const mealsNavActiveHandler = () => {
    setMealsNavActive(true);
    setDrinksNavActive(false);
    setAppetizersNavActive(false);
    return;
  };
  const appetizersNavActiveHandler = () => {
    setMealsNavActive(false);
    setDrinksNavActive(false);
    setAppetizersNavActive(true);
    return;
  };
  const drinksNavActiveHandler = () => {
    setMealsNavActive(false);
    setDrinksNavActive(true);
    setAppetizersNavActive(false);
    return;
  };

  return (
    <nav className={classes.mealNav}>
      <ul className={classes.navLinks}>
        <Link to="/meals/main_meals" className={classes.link}>
          <li
            className={mealsNavActive ? classes.active : ""}
            onClick={mealsNavActiveHandler}
          >
            MAIN MEALS{mealsNavActive ? " ▾" : ""}
          </li>
        </Link>
        <Link to="/meals/appetizers" className={classes.linkAppetizers}>
          <li onClick={appetizersNavActiveHandler}>
            APPETIZERS{appetizersNavActive ? " ▾" : ""}
          </li>
        </Link>
        <Link to="/meals/drinks" className={classes.link}>
          <li
            className={drinksNavActive ? classes.active : ""}
            onClick={drinksNavActiveHandler}
          >
            DRINKS{drinksNavActive ? " ▾" : ""}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default MealsNav;
