import { Context, Next } from "koa";
import jwt from 'koa-jwt'
import { Variables } from "../config/variable.config";
import { error } from "../helper/response";
import { errMsg } from "../const/response-message";

export const middleware = jwt({ secret: Variables.JWT_SECRET }).unless({ path: [/^\/auth/] })
export async function unauthorizeHandler (ctx: Context, next: Next) {
    try {
        return await next();
    } catch (err) {
        const unauthorizeStatus = 401
        if (err.status === unauthorizeStatus) {
            ctx.body = error(ctx, errMsg().ua, unauthorizeStatus)
        } else {
            throw err;
        }
    }
  }