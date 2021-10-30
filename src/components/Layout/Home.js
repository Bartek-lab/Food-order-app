import classes from "./Home.module.css";
import SpecialOffers from "../UI/SpecialOffers";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <h1>The best food under the sky!</h1>
      <article>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </article>
      <div>
        <SpecialOffers
          dummyMeals={props.dummyMeals}
          dummyAppetizers={props.dummyAppetizers}
          dummyDrinks={props.dummyDrinks}
        />
      </div>
    </div>
  );
};

export default Home;
