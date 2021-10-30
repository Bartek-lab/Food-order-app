import classes from "./Header.module.css";
import CartButton from "../UI/CartButton";
import { FaBars } from "react-icons/fa";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.menuBarsBox}>
        <FaBars
          className={classes.hamburgerBars}
          onClick={props.setNav}
          // onClick={props.onHideNavBar}
        />
      </div>
      <div>
        <h2 className={classes.logo}>Veggie</h2>
      </div>
      <CartButton onClick={props.onShowCart} />
    </div>
  );
};

export default Header;
