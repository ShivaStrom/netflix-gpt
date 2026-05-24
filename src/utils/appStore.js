import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: cartReducer,
    movies: moviesReducer,
  },
});

export default appStore;
