import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      itemCount: 0,
    },
    reducers: {
      addItem: (state) => {
        state.itemCount += 1;
      },
      removeItem: (state) => {
        state.itemCount -= 1;
      },
    },
  });
  
  export const { addItem, removeItem } = cartSlice.actions;
  export default cartSlice.reducer;