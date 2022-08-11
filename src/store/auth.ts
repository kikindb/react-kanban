import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  authData: {
    id: "",
    name: "",
    email: "",
    image: null,
    token: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.authData = action.payload;
    },
    logout(state) {
      state.authData = {
        id: "",
        name: "",
        email: "",
        image: null,
        token: "",
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
