import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealsDescription from "./components/Meals/MealsDescription";
import Nav from "./components/UI/Nav";
import Home from "./components/Layout/Home";

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
