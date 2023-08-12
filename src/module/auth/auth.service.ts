import { Context } from "koa";
import { UserDto } from "../user/user.dto";
import { UserRepository } from "../user/user.repository";
import { error, success } from "../../helper/response";
import { errMsg } from "../../const/response-message";
import jsonwebtoken from 'jsonwebtoken';
import { Variables } from "../../config/variable.config";
import { serverRedis } from "../../config/redis";
import { userTokenKey } from "../../const/rediskey";

export class AuthService{
    constructor(private userRepository: UserRepository){}
 
    async login(ctx: Context, { email, password }: UserDto){
        try {
            const entity = await this.userRepository.getOneByEmail(email)
            if(!entity) return error(ctx, errMsg('email').nf, 400)
            if(password !== entity.password) return error(ctx, errMsg('please recheck your credential').custom, 400)
            const token = jsonwebtoken.sign({ id: entity.id, username: entity.username }, Variables.JWT_SECRET, { expiresIn: '1d' })
            serverRedis.set(userTokenKey(entity.id), token)
            return success(ctx, token)
        } catch (err) {
            return error(ctx, errMsg().ise, 500)
        }
    }

    async register(ctx: Context, dto: UserDto){
        try {
            const data = await this.userRepository.create(dto)
            return success(ctx, data)
        } catch (err) {
            return error(ctx, errMsg().ise, 500)
        }
    }
}