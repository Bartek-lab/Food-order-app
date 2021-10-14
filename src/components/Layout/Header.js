import classes from "./Header.module.css";
import Button from "../UI/CartButton";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>Veggie</h2>
      <Button onClick={props.onShowCart} />
    </div>
  );
};

export default Header;
