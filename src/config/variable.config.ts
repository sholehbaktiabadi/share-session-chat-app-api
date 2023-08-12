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
    JWT_SECRET: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
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
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: parseInt(process.env.REDIS_PORT)
};
