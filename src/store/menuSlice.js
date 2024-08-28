// menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = "home";

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => action.payload,
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
