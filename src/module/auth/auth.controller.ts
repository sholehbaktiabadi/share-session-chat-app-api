import Router from '@koa/router'
import { AuthService } from './auth.service'
import { UserRepository } from '../user/user.repository'
import { AppDataSource } from '../../config/mysql.config'

const dataSource = AppDataSource
const userRepository = new UserRepository(dataSource)
const authService = new AuthService(userRepository)
const authRouter = new Router({ prefix: '/auth' })

authRouter.post('/login', (ctx)=> {
    const dto = ctx.request.body
    return authService.login(ctx, dto)
})

export default authRouter