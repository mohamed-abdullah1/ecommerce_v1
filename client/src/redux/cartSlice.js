import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    incQuantity: (state) => {
      state.quantity += 1;
    },
    decQuantity: (state) => {
      state.quantity -= 1;
    },
    removeCartContent: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, incQuantity, decQuantity, removeCartContent } =
  cartSlice.actions;
export default cartSlice.reducer;
