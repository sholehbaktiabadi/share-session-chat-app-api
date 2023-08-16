import Koa, { Context } from "koa";
import signale from "signale";
import { koaBody } from "koa-body";
import { Variables } from "./config/variable.config";
import { connectMysql } from "./config/mysql.config";
import userRouter from "./module/user/user.controller";
import { connectMongod } from "./config/mongo.config";
import messageRouter from "./module/message/message.controller";
import authRouter from "./module/auth/auth.controller";
import { middleware, unauthorizeHandler } from "./middleware/middleware";
import { socketFuntion, socketServer } from "./config/socket.io";

connectMysql();
connectMongod();
socketServer.listen(Variables.SOCKETIO_PORT);
socketFuntion.on("connection", (socket) => {
    console.log(`${socket.id} is connected`);
    socket.on("disconnect", () => console.log(`${socket.id} is disconnected`));
});

const app = new Koa();
app.use(koaBody());
app.use(unauthorizeHandler);
app.use(middleware);
app.use(messageRouter.routes());
app.use(userRouter.routes());
app.use(authRouter.routes());
app.use(async (ctx: Context) => (ctx.body = "Hai there"));
app.listen("5000", () =>
    signale.complete(`App running on port ${Variables.APP_PORT}`)
);
