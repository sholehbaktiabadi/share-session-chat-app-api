import Router from "@koa/router";
import { AppDataSourceMongo } from "../../config/mongo.config";
import { MessageRepository } from "../message/message.repository";
import { UserEventService } from "./user-event.service";

const dataSourceMongo = AppDataSourceMongo;
const messageRepository = new MessageRepository(dataSourceMongo);
const userEventService = new UserEventService(messageRepository);

const userEventRouter = new Router({ prefix: "/event" });
userEventRouter.get("/collect", (ctx) => {
    return userEventService.collectChannel(ctx)
});
export default userEventRouter;
