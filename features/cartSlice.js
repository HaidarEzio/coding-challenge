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
let breadCounter = 0;

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
    discounting: (state, { payload }) => {
      //* it's in this state because it throws an error that there's no bread
      if (state.cartItems.length > 0) {
        let bread = state.cartItems.find((item) => item.id === "1");
        let milk = state.cartItems.find((item) => item.id === "2");
        let butter = state.cartItems.find((item) => item.id === "3");

        if (milk) {
          if (payload.id === milk.id) {
            if (milk.amount % 3 === 0) {
              state.discount.milk = state.discount.milk + 1.15;
            }
          }
        }

        //* Butter
        if (butter) {
          if (payload.id === butter.id) {
            if (butter.amount > 1) {
              state.discount.bread = 0.5;
              // //* this is established as true
              // if (!bread && breadCounter <= 0) {
              //   state.cartItems.push(productData.find((product) => product.id === "1"));
              //   state.discount.bread = 0.5;
              //   breadCounter++;
              //   //* this is established as true
              // } else {
            }
            if (butter.amount % 2 === 0 && bread) {
              let timesDiscount = butter.amount / 2;
              bread.amount++; //* this keeps adding it even though we're decreasing
              state.discount.bread = timesDiscount * 0.5;
            }

            if (butter.amount < 1) {
              state.discount.bread = initialState.discount.bread;
              breadCounter = 0;
            }
          }
        }
        // state.cartItems.forEach((item) => {
        //   if (item.id === "3") {
        //     if (item.amount % 2 === 0) {
        //       let timesDiscount = item.amount / 2;
        //       bread.amount++; //* this keeps adding it even though we're decreasing
        //       state.discount.bread = timesDiscount * 0.5;
        //     }
        //   }
        // });
      }
    },
    getDiscounts: (state) => {
      if (state.cartItems.length > 0) {
        let milk = state.cartItems.find((item) => item.id === "2");
        let butter = state.cartItems.find((item) => item.id === "3");

        //* if butter is one of 2's multiples, add a discount
        //? if butter is less than 2, remove the discount
        if (butter && butter.amount % 2 === 0) {
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
  },
});

export const { discounting, getDiscounts, addToCart, removeItem, increment, decrement, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
