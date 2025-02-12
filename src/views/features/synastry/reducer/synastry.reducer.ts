// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { getSynastryData } from "./synastry.actions";
import { synastryChatThreadType, synastryListType } from "../types";

interface synastryStateType {
  list: synastryListType | null;
  chat: {
    value: {
      thread: synastryChatThreadType;
      adding_partner_processing_flag: boolean;
    } | null;
    loading: boolean;
    initialSynastryChatFetch: boolean;
    error: any;
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
    setSynastryChatData(state, { payload }) {
      state.chat.value = {
        thread: payload,
        adding_partner_processing_flag: false,
      };
    },
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
  setSynastryChatData,
  clearSynastryChatData,
  setSynastryPromptedMessage,
  clearSynastryPromptedMessage,
  setSynastryChatInitialFetch,
  setSynastryCentralizedLoading,
} = synastrySlice.actions;

export default synastrySlice.reducer;
