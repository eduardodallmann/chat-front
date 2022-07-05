import { TitleStyled, UserListStyled, UsersStyled } from "./styled";
import { UserUnit } from "./user-unit";
import { useSelector } from "react-redux";
import { RootState } from "../store/store-types";

export const Users = () => {
  const { users } = useSelector((state: RootState) => state.usersList);

  return (
    <UsersStyled>
      <TitleStyled>Membros online</TitleStyled>
      <UserListStyled>
        {users.map((user, i) => (
          <UserUnit key={user + i} user={user}></UserUnit>
        ))}
      </UserListStyled>
    </UsersStyled>
  );
};
