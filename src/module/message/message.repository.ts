import { DataSource, Repository } from "typeorm";
import { Message } from "../../entity/message.entity";
import { MessageDto } from "./message.dto";

export class MessageRepository {
    private messageRepository: Repository<Message>;
    constructor(db: DataSource) {
        this.messageRepository = db.getRepository(Message);
    }

    async create(dto: MessageDto) {
        try {
            return await this.messageRepository.save(dto);
        } catch (error) {
            return error;
        }
    }
}
