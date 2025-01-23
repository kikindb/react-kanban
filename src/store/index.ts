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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
