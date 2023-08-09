import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./base";

@Entity("user")
export class User extends Base {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar", length: 120 })
    name!: string;

    @Column({ type: "varchar", length: 25 })
    username!: string;

    @Column({ type: "varchar", length: 120 })
    email!: string;

    @Column({ type: "varchar", length: 120 })
    phone!: string;
}
