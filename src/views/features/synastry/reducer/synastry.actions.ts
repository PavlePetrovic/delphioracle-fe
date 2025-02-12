// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
// ** Axios Imports
import { http } from "@common/api/http";
import { RootState } from "../../../../redux/store";
import { userInfoType } from "@appTypes/universal";

export const initiateSynastryConversation = createAsyncThunk<
  any,
  {
    other_person_info: userInfoType;
    userId: string;
  },
  { state: RootState }
>(
  "synastry/initiateSynastryConversation",
  async ({ other_person_info, userId }) => {
    try {
      const response: any = await http.post(
        `${import.meta.env.VITE_API_BASELINK}/initiate-conversation-to-sqs`,
        {
          other_person_info: other_person_info,
          user_id: userId,
        },
      );
      return response.data?.body?.tmp_user_id;
    } catch (err: any) {
      return err.response.data;
    }
  },
);

export const askSynastryQuestion = createAsyncThunk<
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
>("chatBox/askSynastryQuestion", async ({ userId, threadId, question }) => {
  try {
    const response = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/ask-question-to-sqs`,
      {
        user_id: userId,
        thread_id: threadId,
        question: question,
        synastry_mode: 1,
      },
    );

    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
});

export const getSynastryData = createAsyncThunk<
  any,
  { threadId?: string; userId: string },
  { state: RootState }
>("chatBox/getSynastryData", async ({ threadId, userId }) => {
  try {
    const response: any = await http.post(
      `${import.meta.env.VITE_API_BASELINK}/get-synastry-data`,
      {
        ...(threadId ? { thread_id: threadId } : null),
        user_id: userId,
      },
    );

    return {
      data: response.data?.body,
      fullyListFetched: threadId ? false : true,
    };
  } catch (err: any) {
    return err.response.data;
  }
});
