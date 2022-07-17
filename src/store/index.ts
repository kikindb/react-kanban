import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Task } from "../models/Task";

const initialTasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    addTask(state) {
      console.log("From REDUX!!!");
    },
    updateTask() {},
    removeTask() {},
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { tasks: tasksSlice.reducer, auth: authSlice.reducer },
});

export const taskActions = tasksSlice.actions;
export const authActions = authSlice.actions;
export default store;
