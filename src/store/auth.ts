import { createSlice } from '@reduxjs/toolkit';
import { AuthData, AuthModel } from '@/models/Auth';
import {
  persistLocalStorage,
  clearLocalStorage,
} from '@/utils/localstorage.util';

const initialAuthState: AuthModel = {
  authData: {
    id: '',
    name: '',
    email: '',
    image: null,
    admin: false,
    token: '',
  },
};

export const authKey = 'authData';

const authSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem(authKey)
    ? { authData: JSON.parse(localStorage.getItem(authKey) as string) }
    : initialAuthState,
  reducers: {
    login(state, action) {
      persistLocalStorage<AuthData>(authKey, action.payload);
      state.authData = action.payload;
    },
    logout() {
      clearLocalStorage(authKey);
      return initialAuthState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
