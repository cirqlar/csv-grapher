import { configureStore } from "@reduxjs/toolkit";
import { data, config } from "./reducers/reducers";


const store = configureStore({
  reducer: {
    data,
    config,
  }
});

export default store;