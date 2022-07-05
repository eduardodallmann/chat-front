import React from "react";
import { ChatType, ChatTypeEnum } from "../entities/chat";
import {
  ChatUnitStyled,
  MessageStyled,
  UserName,
  ChatUnitRightStyled,
} from "./styled";
import { Avatar } from "@mui/material";
import { formatTime, formatTimeFull, stringAvatar } from "./methods";

export const ChatUnit = ({
  chatInfo: { user, date, msg, type },
}: {
  chatInfo: ChatType;
}) => {
  const isMsg = type === ChatTypeEnum.MSG;
  const isNew = type === ChatTypeEnum.NEW;

  return (
    <ChatUnitStyled>
      <div>
        <Avatar {...stringAvatar(user)} />
      </div>
      <ChatUnitRightStyled $isMsg={isMsg}>
        <UserName>
          {isMsg ? (
            <div className="user">{user}</div>
          ) : (
            <div className="ingressou">
              <div className="user">{user}</div>
              <div> {isNew ? "ingressou" : "saiu"}</div>
            </div>
          )}
          <div className="hour" title={formatTimeFull(new Date(date))}>
            {formatTime(new Date(date))}
          </div>
        </UserName>
        {isMsg && <MessageStyled>{msg}</MessageStyled>}
      </ChatUnitRightStyled>
    </ChatUnitStyled>
  );
};
