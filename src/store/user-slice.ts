import { createSlice } from "@reduxjs/toolkit";

const initialState = { me: "", users: [] as string[], typing: [] as string[] };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    allNew: (state, action) => {
      if (!state.me) {
        state.users = action.payload.users;
        state.me = action.payload.me;
      }
    },
    join: (state, action) => {
      if (!state.users.find((user) => user === action.payload)) {
        state.users.push(action.payload);
      }
    },
    exit: (state, action) => {
      state.users = state.users.filter((u) => u !== action.payload);
    },
    typing: (state, action) => {
      state.typing = action.payload;
    },
  },
});

export const { allNew, join, exit, typing } = userSlice.actions;

export default userSlice.reducer;
