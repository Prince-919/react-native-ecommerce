import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const server = "https://aps-ecommerce-server.onrender.com/api/v1";
