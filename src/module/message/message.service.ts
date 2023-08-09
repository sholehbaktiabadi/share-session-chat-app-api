import { Context } from "koa"
import { MessageDto } from "./message.dto"
import { MessageRepository } from "./message.repository"
import { success, error } from "../../helper/response"
import { errMsg } from "../../const/response-message"

export class MessageService{
    constructor(private messageRepository: MessageRepository){}

    async create(ctx: Context, dto: MessageDto){
        try {
            const data = await this.messageRepository.create(dto)
            return success(ctx, data)
        } catch (err) {
            return error(ctx, errMsg().ise, 500)
        }
    }
}