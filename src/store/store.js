import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
});

export default store;
