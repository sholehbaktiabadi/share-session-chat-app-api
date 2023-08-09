import { Context } from "koa";

type ResponseWrapper = {
    statusCode: number;
    data?: any;
    error?: string;
};

export const success = (ctx: Context, data: any) => {
    const statusCode = 200;
    const response: ResponseWrapper = { statusCode, data };
    ctx.status = 200;
    return (ctx.body = response);
};

export const error = (ctx: Context, error: string, statusCode: number) => {
    const response: ResponseWrapper = { statusCode, error };
    ctx.status = statusCode;
    return (ctx.body = response);
};
