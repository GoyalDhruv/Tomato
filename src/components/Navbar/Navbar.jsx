import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import { assets } from "../../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../store/menuSlice";
import "./Navbar.css";


const Navbar = ({ setShowlogin }) => {
  const cartItems = useSelector((state) => state.cart);
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const location = useLocation();

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  };

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      dispatch(setMenu("home"));
    }
  }, [isHomePage, dispatch]);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>
      {isHomePage && (
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => dispatch(setMenu("home"))}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => dispatch(setMenu("menu"))}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => dispatch(setMenu("mobile-app"))}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => dispatch(setMenu("contact-us"))}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
      )}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalItems() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowlogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowlogin: propTypes.func.isRequired,
};

export default Navbar;
