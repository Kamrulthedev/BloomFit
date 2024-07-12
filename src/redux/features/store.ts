import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./card/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
