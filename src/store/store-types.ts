import { ChatType } from "../entities/chat";

export type RootState = {
  usersList: { users: string[]; me: string; typing: string[] };
  chatList: { messages: ChatType[] };
};
