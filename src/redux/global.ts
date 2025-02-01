// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

interface globalStateType {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
}

const initialState: globalStateType = {
  isMobile: false,
  isMobileMenuOpen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsMobile: (state, { payload }) => {
      state.isMobile = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setIsMobile } = globalSlice.actions;

export default globalSlice.reducer;
