import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptState: false,
  },
  reducers: {
    gptToggle: (state, action) => {
      state.gptState = !state.gptState;
    },
  },
});

export const { gptToggle } = gptSlice.actions;

export default gptSlice.reducer;
