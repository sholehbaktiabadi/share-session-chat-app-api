import Koa, { Context } from 'koa'
import signale from 'signale';
import { koaBody } from 'koa-body'
import { Variables } from './config/variable.config';
import { connectMysql } from './config/mysql.config';
import userRouter from './module/user/user.controller';
import { connectionWebsocket } from './config/socket.io';
import { connectMongod } from './config/mongo.config';
import messageRouter from './module/message/message.controller';
import authRouter from './module/auth/auth.controller';
import { middleware, unauthorizeHandler } from './middleware/middleware';

connectMysql()
connectMongod()
connectionWebsocket()

const app = new Koa()
app.use(koaBody())
app.use(unauthorizeHandler)
app.use(middleware)
app.use(messageRouter.routes())
app.use(userRouter.routes())
app.use(authRouter.routes())
app.use(async (ctx: Context) => ctx.body='Hai there')
app.listen('5000', () => signale.complete(`App running on port ${Variables.APP_PORT}`))