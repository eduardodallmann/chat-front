import { ChatInputStyled } from "./styled";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { common } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { RootState } from "../store/store-types";
import { useContext, useState } from "react";
import { SocketContext } from "../providers/socket-provider";

export const ChatInput = () => {
  const socket = useContext(SocketContext);

  const { me } = useSelector((state: RootState) => state.usersList);

  const [value, setValue] = useState("");

  return (
    <ChatInputStyled>
      <TextField
        id="msg"
        multiline
        fullWidth
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          socket?.emit("typing.new", { name: me });
        }}
        InputProps={{
          style: { background: common.white },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  if (value) {
                    socket?.emit("message.new", { sender: me, text: value });
                    setValue("");
                  }
                }}
                edge="end"
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </ChatInputStyled>
  );
};
