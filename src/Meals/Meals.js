import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "../UI/Card";
import MealsNav from "../UI/MealsNav";
import MealsList from "./MealsList";
import DrinksList from "./DrinksList";
import AppetizersList from "./AppetizersList";

const Meals = (props) => {
  return (
    <Fragment>
      <Card>
        <Router>
          <MealsNav />
          <Switch>
            <Route path="/meals/main_meals" component={MealsList} />
            <Route path="/meals/appetizers" component={AppetizersList} />
            <Route path="/meals/drinks" component={DrinksList} />
          </Switch>
        </Router>
      </Card>
    </Fragment>
  );
};

export default Meals;
