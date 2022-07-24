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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increment: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
      cartItem.amount++;
    },
    addToCart: (state, { payload }) => {
      const newItem = productData.find((product) => product.id === payload.id);
      let exists = state.cartItems.find((item) => item.id === payload.id);
      if (exists) {
        exists.amount++;
      } else {
        state.cartItems.push(newItem);
      }
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
      state.subtotal = total;
    },
    discount: (state, { payload }) => {
      //* it's in this state because it throws an error that there's no bread
      if (state.cartItems.length > 0) {
        // let bread = state.cartItems.find((item) => item.id === "1");
        // let milk = state.cartItems.find((item) => item.id === "2");
        // let butter = state.cartItems.find((item) => item.id === "3");
        if (payload.id === "2") {
          let milk = state.cartItems.find((item) => item.id === payload.id);
          if (milk.amount % 3 === 0) {
            state.discount = 1.15;
          }
        }

        //* Butter
        if (payload.id === "3") {
          let butter = state.cartItems.find((item) => item.id === payload.id);
          if (butter.amount % 2 === 0) {
            let bread = state.cartItems.find((item) => item.id === "1");
            if (bread) {
              bread.amount++;
              state.discount = state.discount + 0.5;
            } else {
              state.cartItems.push(productData.find((product) => product.id === "1"));
              state.discount = state.discount + 0.5;
            }
          }
        }
      }
    },
  },
});

export const { discount, addToCart, removeItem, increment, decrement, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
