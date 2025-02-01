// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
// ** Firebase Imports
import { changeReferral, deleteAccount } from "./profile.actions";

interface profileType {
  profileSettings: {
    value: null;
    loading: boolean;
    processing: boolean;
  };
}

const initialState: profileType = {
  profileSettings: {
    value: null,
    loading: false,
    processing: false,
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeReferral.pending, (state) => {
        state.profileSettings.processing = true;
      })
      .addCase(changeReferral.fulfilled, (state) => {
        state.profileSettings.processing = false;
      })
      .addCase(changeReferral.rejected, (state) => {
        state.profileSettings.processing = false;
      })
      .addCase(deleteAccount.pending, (state) => {
        state.profileSettings.processing = true;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.profileSettings.processing = false;
      })
      .addCase(deleteAccount.rejected, (state) => {
        state.profileSettings.processing = false;
      });
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
