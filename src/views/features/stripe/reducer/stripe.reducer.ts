// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
// ** Firebase Imports
import { stripeTesting } from "./stripe.actions";

interface stripeType {
  stripe: {
    values: any;
    loading: boolean;
  };
}

const initialState: stripeType = {
  stripe: {
    values: null,
    loading: false,
  },
};

export const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(stripeTesting.pending, (state) => {
        state.stripe.loading = true;
      })
      .addCase(stripeTesting.fulfilled, (state, { payload }) => {
        state.stripe.values = payload;
        state.stripe.loading = false;
      })
      .addCase(stripeTesting.rejected, (state) => {
        state.stripe.loading = false;
      });
  },
});

export const {} = stripeSlice.actions;

export default stripeSlice.reducer;
