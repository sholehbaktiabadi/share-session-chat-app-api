import { DataSource, MongoRepository, Repository } from "typeorm";
import { Message } from "../../entity/message.entity";
import { MessageDto } from "./message.dto";
import { User } from "../../entity/user.entity";
import { JwtPayload } from "jsonwebtoken";

export class MessageRepository {
    private messageRepository: MongoRepository<Message>;
    constructor(db: DataSource) {
        this.messageRepository = db.getMongoRepository(Message);
    }

    async create(dto: MessageDto) {
        try {
            return this.messageRepository.save(dto);
        } catch (error) {
            return error;
        }
    }

    async collectChannel(user: JwtPayload) {
        try { 
            const query = this.messageRepository.distinct('event', { sender: { $eq: user.id }})
            return query
        } catch (error) {
            return error;
        }
    }
}
