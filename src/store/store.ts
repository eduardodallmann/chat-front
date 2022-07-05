import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chat-slice";
import userSlice from "./user-slice";

export default configureStore({
  reducer: {
    usersList: userSlice,
    chatList: chatSlice,
  },
});
