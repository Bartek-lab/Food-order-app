import { Fragment } from "react";
import MealsDescription from "./MealsDescription";
import MealsList from "./MealsList";
import Card from "../UI/Card";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsDescription />
      <Card>
        <MealsList />
      </Card>
    </Fragment>
  );
};

export default Meals;
