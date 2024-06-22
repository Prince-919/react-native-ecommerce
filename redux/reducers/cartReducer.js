import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
  },
  (builder) => {
    builder
      .addCase("addToCart", (state, action) => {
        const item = action.payload;
        const isExists = state.cartItems.find(
          (i) => i.product === item.product
        );
        if (isExists) {
          state.cartItems = state.cartItems.filter((i) =>
            item.product === isExists.product ? item : i
          );
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase("removeFromCard", (state, action) => {
        const id = action.payload;
        state.cartItems = state.cartItems.filter((i) => i.product !== id);
      })
      .addCase("clearCart", (state) => {
        state.cartItems = [];
      });
  }
);
