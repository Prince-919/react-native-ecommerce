import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
  },
  (builder) => {
    builder
      .addCase("addToCard", (state, action) => {})
      .addCase("removeFromCard", (state, action) => {})
      .addCase("clearCart", (state) => {
        state.cartItems = [];
      });
  }
);
