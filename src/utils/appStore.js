import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: cartReducer,
  },
});

export default appStore;
