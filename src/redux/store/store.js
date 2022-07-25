//here created the store

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
