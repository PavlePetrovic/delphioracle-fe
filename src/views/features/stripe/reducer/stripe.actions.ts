// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { RootState } from "@redux/store";

export const stripeTesting = createAsyncThunk<
  any,
  { priceId: string },
  { state: RootState }
>("stripe/stripeTesting", async ({ priceId }) => {
  try {
    const response: any = await http.post(
      // Save User URL
      `${import.meta.env.VITE_API_BASELINK}/stripe-session-create`,
      {
        local_host: "stagod",
        price_id: priceId,
      },
    );

    return response.data?.body;
  } catch (err: any) {
    return err.response.data;
  }
});
