// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
// ** Firebase Imports
import {
  changeReferral,
  deleteAccount,
  getProfileData,
} from "./profile.actions";
import { profileType } from "../types";

const initialState: profileType = {
  profileData: {
    value: null,
    loading: false,
    error: null,
  },
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
      .addCase(getProfileData.pending, (state) => {
        state.profileData.loading = true;
      })
      .addCase(getProfileData.fulfilled, (state, { payload }) => {
        state.profileData.value = payload;
        state.profileData.loading = false;
      })
      .addCase(getProfileData.rejected, (state) => {
        state.profileData.error = true;
        state.profileData.loading = false;
      })
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
