// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { getUserData, initiateConversation } from "./chatBox.actions";
import { chatDataType } from "../chatBoxTypes";

interface chatBoxStateType {
  initiateConversationId: {
    value: string;
    error: any;
    loading: boolean;
  };
  chatData: {
    value: chatDataType | null;
    error: any;
    loading: boolean;
  };
  promptedMessage: {
    value: string;
  };
  centralizedLoading: boolean;
}

const initialState: chatBoxStateType = {
  initiateConversationId: {
    value: "",
    error: false,
    loading: false,
  },
  chatData: {
    value: null,
    error: false,
    loading: false,
  },
  promptedMessage: {
    value: "",
  },
  centralizedLoading: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChatData(state, { payload }) {
      state.chatData.value = { ...state.chatData.value, ...payload };
    },
    updateCredits(state, { payload }) {
      if (state.chatData.value?.account_info?.credits) {
        state.chatData.value.account_info.credits = payload;
      }
    },
    clearChatData(state) {
      state.chatData.value = null;
    },
    setPromptedMessage(state, { payload }) {
      state.promptedMessage.value = payload;
    },
    clearPromptedMessage(state) {
      state.promptedMessage.value = "";
    },
    setCentralizedLoading(state, { payload }) {
      state.centralizedLoading = payload;
    },
    decrementCredits(state, { payload }) {
      if (
        state.chatData.value?.account_info?.credits &&
        state.chatData.value?.account_info?.credits > 0
      ) {
        state.chatData.value.account_info.credits =
          state.chatData.value?.account_info?.credits - payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initiateConversation.pending, (state) => {
        state.initiateConversationId.loading = true;
      })
      .addCase(initiateConversation.fulfilled, (state, { payload }) => {
        state.initiateConversationId.value = payload;
        state.initiateConversationId.loading = false;
      })
      .addCase(initiateConversation.rejected, (state) => {
        state.initiateConversationId.error = true;
        state.initiateConversationId.loading = false;
      })
      .addCase(getUserData.pending, (state) => {
        state.chatData.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.chatData.value = payload ? payload : null;
        state.chatData.loading = false;
      })
      .addCase(getUserData.rejected, (state) => {
        state.chatData.error = true;
        state.chatData.loading = false;
      });
  },
});

export const {
  updateChatData,
  updateCredits,
  clearChatData,
  setPromptedMessage,
  clearPromptedMessage,
  setCentralizedLoading,
  decrementCredits,
} = chatSlice.actions;

export default chatSlice.reducer;
