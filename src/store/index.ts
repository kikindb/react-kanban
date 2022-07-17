import { AnyAction, configureStore } from "@reduxjs/toolkit";
import authReducer, { authActions } from "./auth";
import tasksReducer, { tasksActions } from "./tasks";

const store = configureStore({
  reducer: { tasks: tasksReducer, auth: authReducer },
});

export default store;
