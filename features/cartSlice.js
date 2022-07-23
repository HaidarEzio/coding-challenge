import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../utils/placeHolderData";

const initialState = {
  cartItems: [],
  subtotal: 0,
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = productData.find((product) => product.id === payload.id);
      let exists = state.cartItems.find((item) => item.id === payload.id);
      if (exists) {
        exists.amount++;
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount++;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount--;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addToCart, removeItem, increment, decrement, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
