// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { chatDataType, userInfoType } from "@appTypes/universal";
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
>("chatBox/askQuestion", async ({ userId, threadId, question }) => {
  try {
    const response = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/ask-question-to-sqs`,
      { user_id: userId, thread_id: threadId, question: question },
    );

    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
});

export const getChatData = createAsyncThunk<
  any,
  { user_id: string },
  { state: RootState }
>("chatBox/getChatData", async ({ user_id }) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/get-user-data`,
      {
        user_id: user_id,
      },
    );

    const responseObj: chatDataType = response.data?.body?.user_data;

    return {
      main_thread: responseObj?.main_thread,
      processing: responseObj?.processing,
      daily_quote: responseObj?.daily_quotes?.daily_quotes_list,
      generating_daily_quote:
        responseObj?.daily_quotes?.generating_daily_quotes,
    };
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
>("chatBox/initiateConversation", async ({ user_info }) => {
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
