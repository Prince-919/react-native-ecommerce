import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  {
    products: [],
    product: {},
  },
  (builder) => {
    builder
      .addCase("getAllProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getProductDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAllProductsSuccess", (state, action) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase("getAdminProductsSuccess", (state, action) => {
        state.loading = true;
        state.products = action.payload.products;
        state.inStock = action.payload.inStock;
        state.outStock = action.payload.outStock;
      })
      .addCase("getProductDetailsSuccess", (state, action) => {
        state.loading = true;
        state.product = action.payload;
      })
      .addCase("getAllProductsFail", (state) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase("getAdminProductsFail", (state) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase("getProductDetailsFail", (state) => {
        state.loading = true;
        state.error = action.payload;
      });
    builder.addCase("clearError", (state) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);
