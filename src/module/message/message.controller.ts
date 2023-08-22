import Router from "@koa/router";
import { MessageRepository } from "./message.repository";
import { AppDataSourceMongo } from "../../config/mongo.config";
import { MessageService } from "./message.service";
import { UserRepository } from "../user/user.repository";
import { AppDataSource } from "../../config/mysql.config";

const dataSourceMongo = AppDataSourceMongo;
const dataSourceMysql = AppDataSource;
const messageRepository = new MessageRepository(dataSourceMongo);
const userRepository = new UserRepository(dataSourceMysql);
const messageService = new MessageService(messageRepository, userRepository);

const messageRouter = new Router({ prefix: "/message" });
messageRouter.post("/", (ctx) => {
    const dto = ctx.request.body;
    return messageService.create(ctx, dto);
});
messageRouter.get("/channel", (ctx) => {
    const event = ctx.request.query.event as string
    return messageService.getAllMessageByChannel(ctx, event);
});
export default messageRouter;
