import { useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsList.module.css";

const DrinksList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const availableDrinks = props.dummyData
    .filter((val) => {
      if (val === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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
    <div className={classes.inputBox}>
      <h3 className={classes.title}>Drinks</h3>
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
        <ul>{availableDrinks}</ul>
      </div>
    </div>
  );
};

export default DrinksList;
