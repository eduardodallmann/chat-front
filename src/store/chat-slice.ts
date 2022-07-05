import { createSlice } from "@reduxjs/toolkit";
import { ChatType } from "../entities/chat";

const initialState = { messages: [] as ChatType[] };

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, { payload: { sender, text, date, type } }) => {
      state.messages.unshift({
        user: sender,
        msg: text,
        date,
        type,
      });
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
