import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
  },
});

export const server = "https://aps-ecommerce-server.onrender.com/api/v1";
