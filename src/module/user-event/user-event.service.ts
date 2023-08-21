import { Context } from "koa";
import { MessageRepository } from "../message/message.repository";
import { extractUserToken } from "../../helper/request";
import { JwtPayload } from "jsonwebtoken";
import { success } from "../../helper/response";

export class UserEventService{
    constructor(private readonly messageRepository: MessageRepository){}

    async collectChannel(ctx: Context) {
        try {
            const user : JwtPayload = extractUserToken(ctx)
            const data = await this.messageRepository.collectChannel(user)
            return success(ctx, data)
        } catch (error) {
            return error;
        }
    }
}