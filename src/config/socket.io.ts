import { createServer } from "http";
import { Server } from "socket.io";
import { Variables } from "./variable.config";
import signale from "signale";

export function connectionWebsocket() {
    const httpServer = createServer();
    const io = new Server(httpServer);
    io.on("connection", (socket) => {
        signale.complete(socket.id);

        socket.on("disconnect", () =>
            signale.info(`${socket.id} was disconnect`)
        );
    });
    httpServer.listen(Variables.SOCKETIO_PORT);
}
