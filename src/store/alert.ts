import { createSlice } from "@reduxjs/toolkit";
import { AlertModel } from "../models/Alert";
import { AlertType } from "../UI/Alert";

const initialAlertState: AlertModel = {
  alertData: {
    title: "",
    body: "",
    type: AlertType.info,
    show: false,
  },
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialAlertState,
  reducers: {
    setAlert(state, action) {
      state.alertData = action.payload;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
