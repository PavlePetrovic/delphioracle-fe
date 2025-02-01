// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { getSynastryData } from "./synastry.actions";

interface synastryStateType {
  list: any;
  chat: {
    value: any;
    loading: boolean;
    error: any;
    initialSynastryChatFetch: boolean;
  };
  promptedMessage: {
    value: string;
  };
  centralizedLoading: boolean;
}

const initialState: synastryStateType = {
  list: null,
  chat: {
    value: null,
    loading: false,
    error: false,
    initialSynastryChatFetch: false,
  },
  promptedMessage: {
    value: "",
  },
  centralizedLoading: true,
};

export const synastrySlice = createSlice({
  name: "synastry",
  initialState,
  reducers: {
    clearSynastryChatData(state) {
      state.chat.value = null;
    },
    setSynastryPromptedMessage(state, { payload }) {
      state.promptedMessage.value = payload;
    },
    clearSynastryPromptedMessage(state) {
      state.promptedMessage.value = "";
    },
    setSynastryChatInitialFetch(state, { payload }) {
      state.chat.initialSynastryChatFetch = payload;
    },
    setSynastryCentralizedLoading(state, { payload }) {
      state.centralizedLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSynastryData.pending, (state) => {
        state.chat.loading = true;
      })
      .addCase(getSynastryData.fulfilled, (state, { payload }) => {
        if (payload.fullyListFetched) {
          state.list = payload.data;
        } else {
          state.chat.value = payload.data;
        }
        state.chat.loading = false;
      })
      .addCase(getSynastryData.rejected, (state) => {
        state.chat.loading = false;
      });
  },
});

export const {
  clearSynastryChatData,
  setSynastryPromptedMessage,
  clearSynastryPromptedMessage,
  setSynastryChatInitialFetch,
  setSynastryCentralizedLoading,
} = synastrySlice.actions;

export default synastrySlice.reducer;
