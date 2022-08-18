import { createSlice } from "@reduxjs/toolkit";
import { AlertData, AlertModel } from "../models/Alert";
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
    setAlert(state, action: { payload: AlertData; type: string }) {
      state.alertData = action.payload;
    },
    hideAlert(state) {
      state.alertData = initialAlertState.alertData;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
