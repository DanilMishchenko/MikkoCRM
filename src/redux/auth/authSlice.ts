import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  email: string;
  role: string;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  email: '',
  role: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; role: string }>) {
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = '';
      state.role = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
