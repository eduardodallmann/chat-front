import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "./store/store";
import { Chat } from "./chat/chat";
import { Users } from "./users/users";
import { Layout } from "./styles";
import { allNew, exit, join, typing } from "./store/user-slice";
import { SocketContext } from "./providers/socket-provider";
import { addMessage } from "./store/chat-slice";

function App() {
  const socket = io(process.env.BACKEND_ADDR || "http://localhost:4203");

  socket.on("guest.first", (gift) => {
    store.dispatch(allNew({ me: gift.name, users: gift.users }));
  });

  socket.on("guest.show", (gift) => {
    store.dispatch(join(gift.name));
  });

  socket.on("guest.exit", (gift) => {
    store.dispatch(exit(gift.name));
  });

  socket.on("typing.show", (gift) => {
    store.dispatch(typing(gift.listTyping));
  });

  socket.on("message.show", (gift) => {
    store.dispatch(addMessage(gift));
  });

  const theme = createTheme({});

  useEffect(() => {
    socket.emit("guest.new");
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Chat />
          <Users />
        </Layout>
      </ThemeProvider>
    </SocketContext.Provider>
  );
}

export default App;
