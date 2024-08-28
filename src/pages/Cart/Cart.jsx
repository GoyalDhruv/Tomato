import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, addToCart } from "../../store/cartSlice";
import { food_list } from "../../assets/assets";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCartAmount = Object.keys(cartItems).reduce((total, itemId) => {
    const item = food_list.find((product) => product._id === itemId);
    return total + (item ? item.price * cartItems[itemId] : 0);
  }, 0);

  // Get cart items to display
  const cartItemsList = food_list.filter((item) => cartItems[item._id] > 0);

  return (
    <>
      {cartItemsList.length > 0 ? (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {cartItemsList.map((item) => (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <span
                      style={{ fontSize: "15px", cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      -
                    </span>
                    <span
                      style={{ fontSize: "15px", cursor: "pointer" }}
                      onClick={() => dispatch(addToCart(item._id))}
                    >
                      +
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${totalCartAmount.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>
                  $
                  {totalCartAmount === 0 ? 0 : Math.floor(totalCartAmount / 10)}
                </p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  $
                  {totalCartAmount === 0
                    ? 0
                    : totalCartAmount + Math.floor(totalCartAmount / 10)}
                </b>
              </div>
              <button
                onClick={() => {
                  navigate("/order", {
                    state: { totalCartAmount },
                  });
                }}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a Promo Code, Enter it here!</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          Your cart is empty. Add some items to it!
        </div>
      )}
    </>
  );
};

export default Cart;
