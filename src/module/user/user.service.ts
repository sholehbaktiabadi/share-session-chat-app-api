import { Context } from "koa";
import { success, error } from "../../helper/response";
import { UserDto } from "./user.dto";
import { UserRepository } from "./user.repository";
import { errMsg } from "../../const/response-message";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async create(ctx: Context, dto: UserDto) {
        try {
            const data = await this.userRepository.create(dto);
            return success(ctx, data);
        } catch (err) {
            return error(ctx, errMsg().ise, 500);
        }
    }

    async getAll(ctx: Context) {
        try {
            const data = await this.userRepository.getAll();
            return success(ctx, data);
        } catch (err) {
            return error(ctx, errMsg().ise, 500);
        }
    }

    async getOne(ctx: Context, id: string) {
        try {
            const data = await this.userRepository.getOne(id);
            if (!data) return error(ctx, errMsg("user").nf, 400);
            return success(ctx, data);
        } catch (err) {
            return error(ctx, errMsg().ise, 500);
        }
    }

    async update(ctx: Context, id: string, dto: UserDto) {
        try {
            const isExist = await this.userRepository.isExist(id);
            if (!isExist) return error(ctx, errMsg("user").nf, 400);
            const data = await this.userRepository.update(id, dto);
            return success(ctx, data);
        } catch (err) {
            return error(ctx, errMsg().ise, 500);
        }
    }

    async delete(ctx: Context, id: string) {
        try {
            const isExist = await this.userRepository.isExist(id);
            if (!isExist) return error(ctx, errMsg("user").nf, 400);
            const data = await this.userRepository.delete(id);
            return success(ctx, data);
        } catch (err) {
            return error(ctx, errMsg().ise, 500);
        }
    }
}
