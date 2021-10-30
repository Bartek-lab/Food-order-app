import { Link } from "react-router-dom";
import { FaHome, FaAngellist, FaUtensils } from "react-icons/fa";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const isNavActive = props.isNavActive;

  return (
    <nav className={!isNavActive ? classes.nav : classes.navActive}>
      <ul className={classes.navLinks}>
        <li>
          <div className={classes.icon}>
            <FaHome />
          </div>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>

        <li>
          <div className={classes.icon}>
            <FaAngellist />
          </div>
          <Link to="/description" className={classes.link}>
            About Us
          </Link>
        </li>

        <li>
          <div className={classes.icon}>
            <FaUtensils />
          </div>
          <Link to="/meals/main_meals" className={classes.link}>
            Meals & Drinks
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
