import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    internalId: 1,
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push({ ...action.payload, internalId: state.internalId });
      state.internalId += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(
        (product) => product.internalId !== action.payload.internalId
      );
      state.internalId -= 1;
      state.total -= action.payload.price * action.payload.quantity;
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
    stablishCart: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.products.length;
      state.total = action.payload.totalPrice;
    },
    logoutCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incQuantity,
  decQuantity,
  removeCartContent,
  stablishCart,
  logoutCart,
} = cartSlice.actions;
export default cartSlice.reducer;
