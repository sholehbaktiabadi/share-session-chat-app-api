import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/user.entity";
import { UserDto } from "./user.dto";

export class UserRepository{
    private userRepository: Repository<User>
    constructor(db: DataSource){
        this.userRepository = db.getRepository(User)
    }

    async create(dto: UserDto){
        try {
            return await this.userRepository.save(dto)
        } catch (error) {
            return error
        }
    }

    async getAll(){
        try {
            return await this.userRepository.find()
        } catch (error) {
            return error
        }
    }
    
    async getOne(id: string){
        try {
            return await this.userRepository.findOneBy({ id })
        } catch (error) {
            return error
        }
    }

    async isExist(id: string){
        try {
            return await this.userRepository.exist({ where: { id } })
        } catch (error) {
            return error
        }
    }

    async update(id: string, dto: UserDto){
        try {
            return await this.userRepository.update(id, dto)
        } catch (error) {
            return error
        }
    }

    async delete(id: string){
        try {
            return await this.userRepository.delete({ id })
        } catch (error) {
            return error
        }
    }
}