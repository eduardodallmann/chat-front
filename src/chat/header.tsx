import { useSelector } from "react-redux";
import { RootState } from "../store/store-types";
import { HeaderStyled } from "./styled";

export const Header = () => {
  const { users } = useSelector((state: RootState) => state.usersList);
  
  return (
    <HeaderStyled>
      <div className="title">Chat da empresa</div>
      <div className="members">{users.length} usuários conectados</div>
    </HeaderStyled>
  );
};
