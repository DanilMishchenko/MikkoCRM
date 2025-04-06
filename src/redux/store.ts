import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // другие слайсы добавишь позже
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
