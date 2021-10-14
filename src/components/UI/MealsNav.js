import { Link } from "react-router-dom";
import classes from "./MealsNav.module.css";

const MealsNav = () => {
  return (
    <nav className={classes.mealNav}>
      <ul className={classes.navLinks}>
        <Link to="/meals/main_meals">
          <li>Main Meals</li>
        </Link>
        <Link to="/meals/appetizers">
          <li>Appetizers</li>
        </Link>
        <Link to="/meals/drinks">
          <li>Drinks</li>
        </Link>
      </ul>
    </nav>
  );
};

export default MealsNav;
