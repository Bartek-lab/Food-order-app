import { useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsList.module.css";

const AppetizersList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const availableAppetizers = props.dummyData
    .filter((val) => {
      if (val === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
      return false;
    })
    .map((appet) => {
      return (
        <MealItem
          key={appet.id}
          id={appet.id}
          name={appet.name}
          description={appet.description}
          image={appet.image}
          price={appet.price}
        />
      );
    });

  return (
    <div className={classes.inputBox}>
      <h3 className={classes.title}> Appetizers </h3>
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
        <ul>{availableAppetizers}</ul>
      </div>
    </div>
  );
};

export default AppetizersList;
