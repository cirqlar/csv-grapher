import { configureStore } from "@reduxjs/toolkit";
import { file, config } from "./reducers/reducers";


const store = configureStore({
  reducer: {
    file,
    config,
  }
});

export default store;