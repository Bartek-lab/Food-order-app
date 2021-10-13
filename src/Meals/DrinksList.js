import MealItem from "./MealItem/MealItem";

const dummy_drinks = [
  {
    name: "Coke",
    price: 1.5,
    description: "Coca-cola",
    id: 1,
  },
  {
    name: "Energy-drink",
    price: 2.5,
    description: "Tiger",
    id: 2,
  },
  {
    name: "Green-tea",
    price: 5,
    description: "Indian green tea",
    id: 3,
  },
];

const DrinksList = () => {
  const availableDrinks = dummy_drinks.map((drink) => {
    return (
      <MealItem
        key={drink.id}
        id={drink.id}
        name={drink.name}
        description={drink.description}
        price={drink.price}
      />
    );
  });

  return (
    <div>
      <ul>{availableDrinks}</ul>
    </div>
  );
};

export default DrinksList;
