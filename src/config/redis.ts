import { Redis } from "ioredis";
import { Variables } from "./variable.config";

export const serverRedis = new Redis({
    host: Variables.REDIS_HOST,
    port: Variables.REDIS_PORT,
})
