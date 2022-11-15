import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/currentPageSlice";

export const store = configureStore({
  reducer: {
    currentPage: counterReducer,
  },
});
