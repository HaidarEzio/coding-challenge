import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../utils/placeHolderData";

const initialState = {
  cartItems: [],
  subtotal: 0,
  discount: {
    milk: 0,
    bread: 0,
  },
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
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.subtotal = total;
    },
    getDiscounts: (state) => {
      if (state.cartItems.length > 0) {
        let bread = state.cartItems.find((item) => item.id === "1");
        let milk = state.cartItems.find((item) => item.id === "2");
        let butter = state.cartItems.find((item) => item.id === "3");
        //* if there's no bread, no need for a discount
        !bread && (state.discount.bread = 0);

        //* if butter is one of 2's multiples, add a discount, while the discount is less than the amount
        //? if butter is less than 2, remove the discount
        if (butter && bread && butter.amount % 2 === 0 && state.discount.bread < bread.amount) {
          let multiplyByDiscount = butter.amount / 2;
          state.discount.bread = multiplyByDiscount * 0.5;
        } else if (butter && butter.amount < 2) {
          state.discount.bread = 0;
        }

        //* if milk is one of 3's multiples, add a discount
        //? if milk is less than 3, remove the discount
        if (milk && milk.amount % 3 === 0) {
          let multiplyByDiscount = milk.amount / 3;
          state.discount.milk = multiplyByDiscount * 1.15;
        } else if (milk && milk.amount < 3) {
          state.discount.milk = 0;
        }
      }
    },
    removeDiscounts: (state, { payload }) => {
      if (payload.id == "2") {
        state.discount.milk = state.discount.milk - 1.15;
      }
    },
  },
});

export const { getDiscounts, removeDiscounts, addToCart, removeItem, increment, decrement, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
