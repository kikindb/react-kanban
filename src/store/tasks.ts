import { createSlice } from "@reduxjs/toolkit";

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

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
