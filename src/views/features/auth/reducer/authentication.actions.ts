// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { RootState } from "@redux/store";
import { chatDataType } from "@appTypes/universal";
import { setCredits } from "./authentication.reducer";

export const saveUser = createAsyncThunk<
  any,
  {
    userId: string;
    tmpUserId: string;
    userEmail: string;
    referralCode?: string;
  },
  { state: RootState }
>(
  "auth/saveUser",
  async ({ userId, tmpUserId, userEmail, referralCode }, { dispatch }) => {
    try {
      const response: any = await http.post(
        // Save User URL
        `${import.meta.env.VITE_API_BASELINK}/save-user`,
        {
          new_user_id: userId,
          tmp_user_id: tmpUserId,
          user_email: userEmail,
          ...(referralCode && {
            invited_through_referral_code: referralCode,
          }),
        },
      );

      dispatch(setCredits(response.data?.body?.credits));

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  },
);

export const getInternalAuthData = createAsyncThunk<
  any,
  { user_id: string },
  { state: RootState }
>("auth/getInternalAuthData", async ({ user_id }) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/get-user-data`,
      {
        user_id: user_id,
      },
    );

    const responseObj: chatDataType = response.data?.body?.user_data;

    return {
      user_id: responseObj?.user_id,
      credits: responseObj?.account_info?.credits,
      account_info: responseObj?.account_info,
      user_info: responseObj?.account_info?.user_info,
      processing: responseObj?.processing,
      email: responseObj?.email,
      referral_code: responseObj?.referral_code,
      createdAt: responseObj?.createdAt,
      expiredAt: responseObj?.expiredAt,
    };
  } catch (err: any) {
    return err.response.data;
  }
});
