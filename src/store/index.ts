import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import alertReducer from './alert';
import { AuthModel } from '@/models/Auth';
import { AlertModel } from '@/models/Alert';

export interface AppStore {
  auth: AuthModel;
  alert: AlertModel;
}

const store = configureStore<AppStore>({
  reducer: { auth: authReducer, alert: alertReducer },
});

export default store;
