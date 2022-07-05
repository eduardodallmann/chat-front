import { ChatUnit } from "./chat-unit";
import { ChatListStyled } from "./styled";
import { RootState } from "../store/store-types";
import { useSelector } from "react-redux";

export const ChatList = () => {
  const { messages } = useSelector((state: RootState) => state.chatList);

  return (
    <ChatListStyled>
      {messages.map((chat) => (
        <ChatUnit key={new Date(chat.date).toISOString()} chatInfo={chat} />
      ))}
    </ChatListStyled>
  );
};
