import { createServer } from "http";
import { Server } from "socket.io";

export const socketServer = createServer();
export const socketFuntion = new Server(socketServer, { cors: { origin: "*" } });
