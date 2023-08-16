import jwt, { JwtPayload } from "jsonwebtoken";
import { Context } from "koa";

export function extractUserToken(ctx: Context): JwtPayload {
    const [_, token] = ctx.headers.authorization.split(" ");
    const user = jwt.decode(token) as JwtPayload;
    return user;
}
