import styled from "@emotion/styled";
import { blueGrey, common } from "@mui/material/colors";
import { css } from "@emotion/react";

export const ChatStyled = styled.div`
  flex: 1.5;
  background-color: ${blueGrey[50]};
  display: flex;
  flex-direction: column;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  font-weight: 500;
`;

export const ChatListStyled = styled.div`
  flex: auto;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;
  overflow: auto;
`;

export const Divider = styled.div`
  height: 1px;
  border-top: 1px solid ${blueGrey[100]};
  margin: 0 25px;
`;

export const ChatInputStyled = styled.div`
  padding: 10px 25px;
`;

export const ChatUnitStyled = styled.div`
  display: flex;
  gap: 15px;
`;

const chatUnitNotMsgCss = css`
  display: flex;
  align-items: center;
`;

export const ChatUnitRightStyled = styled.div<{ $isMsg: boolean }>`
  flex: auto;
  ${({ $isMsg }) => !$isMsg && chatUnitNotMsgCss}
`;

export const UserName = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;

  .user {
    font-weight: 500;
  }

  .hour {
    color: ${blueGrey[500]};
    font-size: 12px;
  }

  .ingressou {
    display: flex;
    gap: 6px;
  }
`;

export const MessageStyled = styled.div`
  margin-top: 8px;
  white-space: pre-line;
  background-color: ${common.white};
  padding: 15px;
  border-radius: 4px 15px 15px 15px;
  box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 9%);
`;
