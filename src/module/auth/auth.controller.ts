import Router from '@koa/router'
import { AuthService } from './auth.service'
import { UserRepository } from '../user/user.repository'
import { AppDataSource } from '../../config/mysql.config'
import { success } from '../../helper/response'
import { serverRedis } from '../../config/redis'
import { userTokenKey } from '../../const/rediskey'
import { extractUserToken } from '../../helper/request'

const dataSource = AppDataSource
const userRepository = new UserRepository(dataSource)
const authService = new AuthService(userRepository)
const authRouter = new Router({ prefix: '/auth' })

authRouter.post('/login', async (ctx)=> {
    const dto = ctx.request.body
    return await authService.login(ctx, dto)
})
authRouter.post('/register', async (ctx)=> {
    const dto = ctx.request.body
    return await authService.register(ctx, dto)
})
authRouter.post('/logout', async (ctx)=> {
    const user = extractUserToken(ctx)
    serverRedis.del([userTokenKey(user.id)])
    return success(ctx, 'logout success')
})

export default authRouter