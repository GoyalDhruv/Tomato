import "./Header.css";
import { useDispatch } from "react-redux";
import { setMenu } from "../../store/menuSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with finest ingredients.{" "}
        </p>
        <a href="#explore-menu">
          <button
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setMenu("menu"))}
          >
            View Menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
