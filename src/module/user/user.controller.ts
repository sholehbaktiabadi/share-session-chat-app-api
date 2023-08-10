import Router from '@koa/router'
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { AppDataSource } from '../../config/mysql.config';

const dataSource = AppDataSource
const userRepository = new UserRepository(dataSource)
const userService = new UserService(userRepository)
const userRouter = new Router({ prefix: '/user' })
userRouter.get('/', (ctx) => userService.getAll(ctx))
userRouter.get('/:id', (ctx) => {
    const id = ctx.params.id
    return userService.getOne(ctx, id)
})
userRouter.put('/:id', (ctx) => {
    const id = ctx.params.id
    const dto = ctx.request.body
    return userService.update(ctx, id, dto)
})
userRouter.post('/', (ctx) => {
    const dto = ctx.request.body
    return userService.create(ctx, dto)
})
userRouter.delete('/:id', (ctx) => {
    const id = ctx.params.id
    return userService.delete(ctx, id)
})


export default userRouter;
