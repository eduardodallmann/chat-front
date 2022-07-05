import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { blueGrey, green } from "@mui/material/colors";

export const UsersStyled = styled.div`
  flex: 0.5;
  border-left: 1px solid ${blueGrey[100]};
  padding: 20px;
  overflow: auto;
`;

export const UserListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleStyled = styled.div`
  font-weight: 500;
  margin-bottom: 15px;
`;

export const UserUnitStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .name {
    font-weight: 500;
  }
`;

const blink = keyframes`
   50% {
    opacity: 1;
  }
`;

const forAnimations = () => {
  let styles: Record<string, { animation: string }> = {};
  for (let i = 0; i <= 3; i++) {
    styles[`&:nth-of-type(${i})`] = {
      animation: `${blink} 1s infinite steps(${i})`,
    };
  }
  return styles;
};

export const TypingIndicatorStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-top: 3px;

  span {
    height: 10px;
    width: 10px;
    float: left;
    margin: 0 1px;
    background-color: ${green[100]};
    display: block;
    border-radius: 50%;
    opacity: 0.4;
    ${forAnimations()}
  }
`;
