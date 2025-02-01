// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { getLocations } from "./userData.actions";

interface userType {
  locValues: {
    values: any;
    loading: boolean;
  };
}

const initialState: userType = {
  locValues: {
    values: null,
    loading: false,
  },
};

export const userSlice = createSlice({
  name: "infoWizard",
  initialState,
  reducers: {
    clearLocValues(state) {
      state.locValues = initialState.locValues;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.locValues.loading = true;
      })
      .addCase(getLocations.fulfilled, (state, { payload }) => {
        state.locValues.values = payload;
        state.locValues.loading = false;
      })
      .addCase(getLocations.rejected, (state) => {
        state.locValues.loading = false;
      });
  },
});

export const { clearLocValues } = userSlice.actions;

export default userSlice.reducer;
