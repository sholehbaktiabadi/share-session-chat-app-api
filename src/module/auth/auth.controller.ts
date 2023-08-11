import Router from '@koa/router'
import { AuthService } from './auth.service'
import { UserRepository } from '../user/user.repository'
import { AppDataSource } from '../../config/mysql.config'
import { success } from '../../helper/response'

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

export default authRouter