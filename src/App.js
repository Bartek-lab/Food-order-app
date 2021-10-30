import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealsDescription from "./components/Meals/MealsDescription";
import Nav from "./components/UI/Nav";
import Home from "./components/Layout/Home";
import Footer from "./components/Layout/Footer";
import HamburgerImage from "./Images/hamburger.png";
import SaladImage from "./Images/salad.png";
import PizzaImage from "./Images/pizza.png";
import SoupImage from "./Images/soup.png";
import HotdogImage from "./Images/hot-dog.png";
import FriesImage from "./Images/french-fries.png";
import MushroomImage from "./Images/mushroom.png";
import CheeseImage from "./Images/cheese.png";
import NachosImage from "./Images/nachos.png";
import BruschettaImage from "./Images/bruschetta.png";
import CoffeeImage from "./Images/coffee.png";
import JuiceImage from "./Images/juice.png";
import MatchaImage from "./Images/matcha.png";
import CokeImage from "./Images/coke.png";
import SandwichImage from "./Images/sandwich.png";
import FalafelImage from "./Images/falafel.png";

const DUMMY_MEALS = [
  {
    name: "Fries",
    price: 5,
    description: "French fries",
    id: 1,
    image: FriesImage,
  },
  {
    name: "Pizza",
    price: 15.5,
    description: "Pizza Napoletana",
    id: 2,
    image: PizzaImage,
  },
  {
    name: "Burger",
    price: 8.5,
    description: "Awesome veggie  burger",
    id: 3,
    image: HamburgerImage,
  },
  {
    name: "Salad",
    price: 11.9,
    description: "Blue-Cheese salad",
    id: 4,
    image: SaladImage,
  },
  {
    name: "Soup",
    price: 12,
    description: "Fresh veggie soup",
    id: 5,
    image: SoupImage,
  },
  {
    name: "Hot-dog",
    price: 7,
    description: "the best veggie hot-dog",
    id: 6,
    image: HotdogImage,
  },
  {
    name: "Sandwich",
    price: 7.5,
    description: "Sandwich with hummus",
    id: 7,
    image: SandwichImage,
  },
  {
    name: "Falafel",
    price: 9.5,
    description: "Turkish falafel",
    id: 8,
    image: FalafelImage,
  },
];
const DUMMY_APPETIZERS = [
  {
    name: "Nachos",
    price: 9,
    description: "Nachos with guacamole",
    id: 9,
    image: NachosImage,
  },
  {
    name: "Mushrooms",
    price: 11,
    description: "Deep fried mushrooms",
    id: 10,
    image: MushroomImage,
  },
  {
    name: "Cheddar",
    price: 7,
    description: "Awesome cheese-snack",
    id: 11,
    image: CheeseImage,
  },
  {
    name: "Bruschetta",
    price: 6,
    description: "Fresh grilled bruschetta",
    id: 12,
    image: BruschettaImage,
  },
];
const DUMMY_DRINKS = [
  {
    name: "Coke",
    price: 2,
    description: "Coca-cola",
    id: 13,
    image: CokeImage,
  },
  {
    name: "Matcha",
    price: 8,
    description: "Eastern green tee",
    id: 14,
    image: MatchaImage,
  },
  {
    name: "Juice",
    price: 5,
    description: "Fresh orange Juice",
    id: 15,
    image: JuiceImage,
  },
  {
    name: "Coffee",
    price: 3,
    description: "Vietnamese coffee",
    id: 16,
    image: CoffeeImage,
  },
];
function App() {
  const [CartModalIsShown, setCartModalIsShown] = useState(false);
  const [activeNav, setActviteNav] = useState(false);

  const showCartModalHandler = () => {
    setCartModalIsShown(true);
  };

  const hideCartModalHandler = () => {
    setCartModalIsShown(false);
  };

  const showNavBarHandler = () => {
    if (activeNav === false) {
      setActviteNav(true);
    } else if (activeNav === true) {
      setActviteNav(false);
    }
  };

  const hideNavBarHandler = () => {
    setActviteNav(false);
  };

  return (
    <CartProvider>
      <Header
        onShowCart={showCartModalHandler}
        onShowNavBar={showNavBarHandler}
        setNav={showNavBarHandler}
      />
      {CartModalIsShown && <Cart hideCartModal={hideCartModalHandler} />}
      <div>
        <div className={classes.mainSection} onClick={hideNavBarHandler}>
          <Router dupa={"console.log(dupa)"}>
            <Nav isNavActive={activeNav} />

            <Switch>
              <Route path="/" exact>
                <Home
                  dummyMeals={DUMMY_MEALS}
                  dummyAppetizers={DUMMY_APPETIZERS}
                  dummyDrinks={DUMMY_DRINKS}
                />
              </Route>
              <Route path="/description" component={MealsDescription} />
              <Route path="/meals">
                <Meals
                  dummyMeals={DUMMY_MEALS}
                  dummyAppetizers={DUMMY_APPETIZERS}
                  dummyDrinks={DUMMY_DRINKS}
                />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
