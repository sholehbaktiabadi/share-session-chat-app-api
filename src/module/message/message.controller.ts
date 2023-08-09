import Router from '@koa/router'
import { MessageRepository } from './message.repository'
import { AppDataSourceMongo } from '../../config/mongo.config'
import { MessageService } from './message.service'

const dataSource = AppDataSourceMongo
const messageRepository = new MessageRepository(dataSource)
const messageService = new MessageService(messageRepository)

const messageRouter = new Router({ prefix: '/message' })
messageRouter.post('/', (ctx)=> {
    const dto = ctx.request.body
    return messageService.create(ctx, dto)
})
export default messageRouter