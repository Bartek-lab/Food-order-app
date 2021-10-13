import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealsDescription from "./Meals/MealsDescription";
import Nav from "./UI/Nav";
import Home from "./Home";

function App() {
  const [CartModalIsShown, setCartModalIsShown] = useState(false);

  const showCartModalHandler = () => {
    setCartModalIsShown(true);
  };

  const hideCartModalHandler = () => {
    setCartModalIsShown(false);
  };

  return (
    <CartProvider>
      {CartModalIsShown && <Cart hideCartModal={hideCartModalHandler} />}
      <Header onShowCart={showCartModalHandler} />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/description" component={MealsDescription} />
          <Route path="/meals" component={Meals} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
