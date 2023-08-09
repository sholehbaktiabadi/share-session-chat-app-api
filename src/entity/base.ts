import { Column } from "typeorm";

export abstract class Base{
    @Column({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ type: 'timestamp' })
    updatedAt!: Date;
}