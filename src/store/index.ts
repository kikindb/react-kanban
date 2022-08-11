import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import tasksReducer from "./tasks";
import alertReducer from "./alert";

const store = configureStore({
  reducer: { tasks: tasksReducer, auth: authReducer, alert: alertReducer },
});

export default store;
