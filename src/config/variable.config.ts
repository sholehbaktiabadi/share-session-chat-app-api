import { configDotenv } from "dotenv";
configDotenv();

type VariableType = {
    APP_PORT: number;
    APP_ENV: string;
    MYSQL_HOST: string;
    MYSQL_PORT: number;
    MYSQL_USER: string;
    MYSQL_DATABASE: string;
    MYSQL_PASSWORD: string;
    MONGO_HOST: string;
    MONGO_PORT: number;
    MONGO_USER: string;
    MONGO_DATABASE: string;
    MONGO_PASSWORD: string;
    SOCKETIO_PORT: string;
};

export const Variables: VariableType = {
    APP_PORT: parseInt(process.env.APP_PORT!),
    APP_ENV: process.env.APP_ENV!,
    MYSQL_HOST: process.env.MYSQL_HOST!,
    MYSQL_PORT: parseInt(process.env.MYSQL_PORT!),
    MYSQL_USER: process.env.MYSQL_USER!,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE!,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD!,
    MONGO_HOST: process.env.MONGO_HOST!,
    MONGO_PORT: parseInt(process.env.MONGO_PORT!),
    MONGO_USER: process.env.MONGO_USER!,
    MONGO_DATABASE: process.env.MONGO_DATABASE!,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD!,
    SOCKETIO_PORT: process.env.SOCKETIO_PORT!,
};
