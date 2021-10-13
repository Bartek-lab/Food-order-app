import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    name: "Dumplings",
    price: 12.99,
    description: "Yummy polish dumplings",
    id: 1,
  },
  {
    name: "Chiken-soup",
    price: 15.5,
    description: "Awesome chicken soup",
    id: 2,
  },
  {
    name: "Vegetable stir-fry",
    price: 11.3,
    description: "Awesome dish for vegetarian",
    id: 3,
  },
  {
    name: "Icelandic Lamb Dish",
    price: 12.99,
    description: "Traditional lamb stew",
    id: 4,
  },
];

const MealsList = (props) => {
  const availableMeals = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <div>
      <ul>{availableMeals}</ul>
    </div>
  );
};

export default MealsList;
