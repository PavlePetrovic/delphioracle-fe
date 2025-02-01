// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { userInfoType } from "../chatBoxTypes";
import { RootState } from "@redux/store";

export const askQuestion = createAsyncThunk<
  any,
  {
    userId: string;
    threadId: string;
    question: {
      message: string;
      from: "bot" | "user";
      created_at: string;
    };
  },
  {
    state: RootState;
  }
>(
  "chatBox/askQuestion",
  async ({ userId, threadId, question }, { getState }) => {
    try {
      const response = await http.post(
        `${import.meta.env.VITE_API_BASELINK}/ask-question-to-sqs`,
        { user_id: userId, thread_id: threadId, question: question },
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  },
);

export const getUserData = createAsyncThunk<
  any,
  { user_id: string },
  { state: RootState }
>("chatBox/getUserData", async ({ user_id }, { getState }) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/get-user-data`,
      {
        user_id: user_id,
      },
    );

    return response.data?.body?.user_data;
  } catch (err: any) {
    return err.response.data;
  }
});

export const initiateConversation = createAsyncThunk<
  any,
  {
    user_info: userInfoType;
  },
  { state: RootState }
>("chatBox/testingUrls", async ({ user_info }) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/initiate-conversation-to-sqs`,
      {
        user_info,
      },
    );
    return response.data?.body?.tmp_user_id;
  } catch (err: any) {
    return err.response.data;
  }
});
