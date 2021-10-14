import MealItem from "./MealItem/MealItem";

const dummy_appetizers = [
  {
    name: "fries",
    price: 7,
    description: "fresh fries",
    id: 1,
  },
  {
    name: "deep fried mushrooms",
    price: 10,
    description: "Tigerdeep fried mushrooms",
    id: 2,
  },
  {
    name: "special offer",
    price: 8,
    description: "bla bla bla bla",
    id: 3,
  },
];

const AppetizersList = () => {
  const availableAppetizers = dummy_appetizers.map((drink) => {
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
      <ul>{availableAppetizers}</ul>
    </div>
  );
};

export default AppetizersList;
