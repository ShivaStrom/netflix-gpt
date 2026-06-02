import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: cartReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    lang: languageReducer,
  },
});

export default appStore;
