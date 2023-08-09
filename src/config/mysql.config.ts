import signale from "signale"
import { DataSource } from "typeorm"
import { Variables } from "./variable.config"
import { User } from "../entity/user.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: Variables.MYSQL_HOST,
    port: Variables.MYSQL_PORT,
    username: Variables.MYSQL_USER,
    password: Variables.MYSQL_PASSWORD,
    database: Variables.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})

export async function connectMysql() {
    try {
        await AppDataSource.initialize().then(() =>
            signale.complete("mysql was connected")
        )
    } catch (error) {
        signale.error(error)
    }
}
