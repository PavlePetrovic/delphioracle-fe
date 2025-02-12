// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { RootState } from "@redux/store";
import { chatDataType } from "@appTypes/universal";

export const getProfileData = createAsyncThunk<
  any,
  { user_id: string },
  { state: RootState }
>("auth/getProfileData", async ({ user_id }) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/get-user-data`,
      {
        user_id: user_id,
      },
    );

    const responseObj: chatDataType = response.data?.body?.user_data;

    return {
      report: {
        sun: responseObj?.account_info?.report?.profile_stats?.sun,
        ascendant: responseObj?.account_info?.report?.profile_stats?.ascendant,
        moon: responseObj?.account_info?.report?.profile_stats?.moon,
      },
    };
  } catch (err: any) {
    return err.response.data;
  }
});

export const changeReferral = createAsyncThunk<
  any,
  { userId: string; oldReferralCode: string; newReferralCode: string },
  { state: RootState }
>(
  "profile/changeReferral",
  async ({ userId, oldReferralCode, newReferralCode }) => {
    try {
      const response: any = await http.post(
        `${import.meta.env.VITE_API_BASELINK}/update-referral-code`,
        {
          user_id: userId,
          old_referral_code: oldReferralCode,
          new_referral_code: newReferralCode,
        },
      );
      return response.data?.body?.tmp_user_id;
    } catch (err: any) {
      return err.response.data;
    }
  },
);

export const deleteAccount = createAsyncThunk<
  any,
  { userId: string },
  { state: RootState }
>("profile/deleteAccount", async ({ userId }, {}) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/delete-user`,
      {
        user_id: userId,
      },
    );
    return response.data?.body?.tmp_user_id;
  } catch (err: any) {
    return err.response.data;
  }
});

export const updateCredits = createAsyncThunk<
  any,
  { userId: string },
  { state: RootState }
>("profile/updateCredits", async ({ userId }, {}) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/update-credits-for-user`,
      {
        user_id: userId,
        credits_change: -1,
      },
    );
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
});
