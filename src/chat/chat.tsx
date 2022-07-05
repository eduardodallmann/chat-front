import { ChatInput } from "./chat-input";
import { ChatList } from "./chat-list";
import { Header } from "./header";
import { ChatStyled, Divider } from "./styled";

export const Chat = () => {
  return (
    <ChatStyled>
      <Header />
      <Divider />
      <ChatList />
      <Divider />
      <ChatInput />
    </ChatStyled>
  );
};
