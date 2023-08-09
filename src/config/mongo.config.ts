import signale from "signale";
import { DataSource } from "typeorm";
import { Variables } from "./variable.config";
import { Message } from "../entity/message.entity";

export const AppDataSourceMongo = new DataSource({
    type: "mongodb",
    host: Variables.MONGO_HOST,
    port: Variables.MONGO_PORT,
    username: Variables.MONGO_USER,
    password: Variables.MONGO_PASSWORD,
    database: Variables.MONGO_DATABASE,
    synchronize: true,
    logging: true,
    entities: [Message],
});

export async function connectMongod() {
    try {
        await AppDataSourceMongo.initialize().then(() =>
            signale.complete("mongodb was connected")
        );
    } catch (error) {
        signale.error(error);
    }
}
