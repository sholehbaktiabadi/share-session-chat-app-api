import Koa, { Context } from 'koa'
import Router from '@koa/router'
import signale from 'signale';
import { koaBody } from 'koa-body'
import { Variables } from './config/variable.config';
import { connectMysql } from './config/mysql.config';
import userRouter from './module/user/user.controller';


connectMysql()
const app = new Koa()
const router = new Router({ prefix: '/test' })
router.post('/', (ctx: Context) => {
    const payload = ctx.request.body
    console.log(payload)
    ctx.body = 'is was user route'
})
router.get('/home', (ctx: Context) => ctx.body = 'is was home route')
app.use(koaBody())
app.use(userRouter.routes())
app.use(router.routes())
app.use(async (ctx: Context) => ctx.body='Hai there')
app.listen('5000', () => signale.complete(`App running on port ${Variables.APP_PORT}`))