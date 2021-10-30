import { useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsList.module.css";

const MealsList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const availableMeals = props.dummyData
    .filter((val) => {
      if (val === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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

  return (
    <div className={classes.inputBox}>
      <h3 className={classes.title}> Main meals </h3>
      <article>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </article>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className={classes.itemsContainer}>
        <ul>{availableMeals}</ul>
      </div>
    </div>
  );
};

export default MealsList;
