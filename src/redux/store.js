import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    Counter: counterReducer,
  },
});

export default store;
