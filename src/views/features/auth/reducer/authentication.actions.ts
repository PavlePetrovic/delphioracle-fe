// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { RootState } from "../../../../redux/store";
import { updateCredits } from "@features/chatBox/reducer/chatBox.reducer";

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
  "company/saveUser",
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

      dispatch(updateCredits(response.data?.body?.credits));

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  },
);
