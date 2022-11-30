import { createContext } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io(`${process.env.REACT_APP_SOCKET_BASE_URL}`, {
  transports: ["websocket"],
});

export const SocketContext = createContext<Socket>(socket);
