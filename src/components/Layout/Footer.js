import classes from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>Veggie</h3>
      <div className={classes.iconsBox}>
        <h4 className={classes.contact}>Contact Us:</h4>
        <FaFacebook className={classes.icon} />
        <FaInstagram className={classes.icon} />
        <FaTwitter className={classes.icon} />
      </div>
      {/* <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/justicon" title="justicon">
          justicon
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
