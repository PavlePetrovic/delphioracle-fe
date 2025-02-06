// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
// ** Firebase Imports
import { User } from "firebase/auth";
import { internalAuthData } from "../types";
import { getInternalAuthData } from "./authentication.actions";

interface authType {
  authData: User | null;
  internalAuthData: {
    value: internalAuthData | null;
    loading: boolean;
    error: any;
  };
  authError: string | null;
}

const initialState: authType = {
  authData: null,
  internalAuthData: {
    value: null,
    loading: false,
    error: null,
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
    setCredits(state, { payload }) {
      if (state.internalAuthData.value?.credits) {
        state.internalAuthData.value.credits = payload;
      }
    },
    decrementCredits(state, { payload }) {
      if (
        state.internalAuthData.value?.credits &&
        state.internalAuthData.value?.credits > 0
      ) {
        state.internalAuthData.value.credits =
          state.internalAuthData.value.credits - payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInternalAuthData.pending, (state) => {
        state.internalAuthData.loading = true;
      })
      .addCase(getInternalAuthData.fulfilled, (state, { payload }) => {
        state.internalAuthData.value = payload ? payload : null;
        state.internalAuthData.loading = false;
      })
      .addCase(getInternalAuthData.rejected, (state) => {
        state.internalAuthData.error = true;
        state.internalAuthData.loading = false;
      });
  },
});

export const {
  setAuth,
  clearAuth,
  setAuthError,
  clearAuthError,
  setCredits,
  decrementCredits,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
