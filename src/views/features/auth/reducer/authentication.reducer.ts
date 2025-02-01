// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
// ** Firebase Imports
import { User } from "firebase/auth";

interface authType {
  authData: User | null;
  stripeData: {
    values: any;
    loading: boolean;
  };
  authError: string | null;
}

const initialState: authType = {
  authData: null,
  stripeData: {
    values: null,
    loading: false,
  },
  authError: null,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuth(state, { payload }) {
      state.authData = payload;
    },
    clearAuth(state) {
      state.authData = null;
    },
    setAuthError(state, { payload }) {
      state.authError = payload;
    },
    clearAuthError(state) {
      state.authError = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAuth, clearAuth, setAuthError, clearAuthError } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
