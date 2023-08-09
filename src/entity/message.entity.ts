import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm";
import { Base } from "./base";

@Entity("message")
export class Message extends Base {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    msg!: string;

    @Column()
    event!: string;
}
