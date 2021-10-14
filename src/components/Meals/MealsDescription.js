import classes from "./MealsDescription.module.css";
import Card from "../UI/Card";
const MealsDescription = (props) => {
  return (
    <Card>
      <div className={classes.mealsDescription}>
        <h3>About our company</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </Card>
  );
};

export default MealsDescription;
