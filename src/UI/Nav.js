import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.navLinks}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/description">
          <li>About Us</li>
        </Link>
        <Link to="/meals">
          <li>Meals & Drinks</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
