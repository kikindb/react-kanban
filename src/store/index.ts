import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import alertReducer from "./alert";

const store = configureStore({
  reducer: { auth: authReducer, alert: alertReducer },
});

export default store;
