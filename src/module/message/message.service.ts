import { Context } from "koa";
import { MessageDto } from "./message.dto";
import { MessageRepository } from "./message.repository";
import { success, error } from "../../helper/response";
import { errMsg } from "../../const/response-message";
import { socketFuntion } from "../../config/socket.io";
import { extractUserToken } from "../../helper/request";
import { UserRepository } from "../user/user.repository";
import { eventMapper } from "./message.utils";

export class MessageService {
    constructor(
        private messageRepository: MessageRepository,
        private userRepository: UserRepository
    ) {}

    async create(ctx: Context, dto: MessageDto) {
        try {
            const currentUser = extractUserToken(ctx);
            const userTarget = await this.userRepository.getOneByPhone(
                dto.phone
            );
            if (!userTarget) return error(ctx, errMsg("user").nf, 400);
            const event = eventMapper(currentUser.id, userTarget.id);
            dto.event = event;
            this.messageRepository.create(dto);
            socketFuntion.emit(event, dto.msg);
            return success(ctx, event);
        } catch (err) {
            return error(ctx, errMsg().ise, 500);
        }
    }
}
