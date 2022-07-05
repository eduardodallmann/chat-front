import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { stringAvatar } from "../chat/methods";
import { RootState } from "../store/store-types";
import { UserUnitStyled } from "./styled";
import { TypingIndicator } from "./typing-indicator";

export const UserUnit = ({ user }: { user: string }) => {
  const { me, typing } = useSelector((state: RootState) => state.usersList);

  return (
    <UserUnitStyled>
      <div>
        <Avatar {...stringAvatar(user)} />
      </div>
      <div>
        <div className="name">{user}</div>
        {me === user && <div>Você</div>}
        {typing.includes(user) && me !== user && <TypingIndicator />}
      </div>
    </UserUnitStyled>
  );
};
