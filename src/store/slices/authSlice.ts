import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer; 