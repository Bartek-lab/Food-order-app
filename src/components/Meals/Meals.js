import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealsNav from "../UI/MealsNav";
import MealsList from "./MealsList";
import DrinksList from "./DrinksList";
import AppetizersList from "./AppetizersList";

const Meals = (props) => {
  return (
    <Fragment>
      <Router onEnter={"/meals/main_meals"}>
        <MealsNav />
        <Switch>
          <Route path="/meals/main_meals">
            <MealsList dummyData={props.dummyMeals} />
          </Route>
          <Route path="/meals/appetizers">
            <AppetizersList dummyData={props.dummyAppetizers} />
          </Route>
          <Route path="/meals/drinks">
            <DrinksList dummyData={props.dummyDrinks} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Meals;
