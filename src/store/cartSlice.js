import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id] += 1;
      } else {
        state[id] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      if (state[id] > 1) {
        state[id] -= 1;
      } else {
        delete state[id];
      }
    },
    getTotalCartAmount: (state, action) => {
      return Object.keys(state).reduce((total, itemId) => {
        const item = action.payload.find((product) => product._id === itemId);
        return total + item.price * state[itemId];
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, getTotalCartAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
