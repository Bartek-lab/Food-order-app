import { useState } from "react";
import "./App.css";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

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
      <Meals />
    </CartProvider>
  );
}

export default App;
