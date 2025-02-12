// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { getChatData, initiateConversation } from "./chatBox.actions";
import { chatDataTypeNew } from "../types";

interface chatBoxStateType {
  initiateConversationId: {
    value: string;
    error: any;
    loading: boolean;
  };
  chatData: {
    value: chatDataTypeNew | null;
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
    loading: true,
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
      .addCase(getChatData.pending, (state) => {
        state.chatData.loading = true;
      })
      .addCase(getChatData.fulfilled, (state, { payload }) => {
        state.chatData.value = payload ? payload : null;
        state.chatData.loading = false;
      })
      .addCase(getChatData.rejected, (state) => {
        state.chatData.error = true;
        state.chatData.loading = false;
      });
  },
});

export const {
  updateChatData,
  clearChatData,
  setPromptedMessage,
  clearPromptedMessage,
  setCentralizedLoading,
} = chatSlice.actions;

export default chatSlice.reducer;
