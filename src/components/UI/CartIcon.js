import classes from "./CartIcon.module.css";

const CartIcon = (props) => {
  return (
    <img
      src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-basic-ui-elements-flatart-icons-outline-flatarticons.png"
      alt="cartIcon"
      className={classes.cartIcon}
    />
  );
};

export default CartIcon;
