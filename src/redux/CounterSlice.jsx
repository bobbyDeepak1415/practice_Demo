import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: {
    value: 0,
  },
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducer: {
    increment: (state) => {
      state.count.value += 1;
    },
    decrement: (state) => {
      state.count.value -= 1;
    },
    increaseByAmount: (state, action) => {
      state.count.value += action.payload;
    },
  },
});

export const { increment, decrement, increaseByAmount } = counterSlice.actions;

export default counterSlice.reducer;
