import { CreateUserDTO } from 'src/dtos/user.dtos';
import { UserService } from 'src/services/user/user.service';
export declare class UserController {
    private userServices;
    constructor(userServices: UserService);
    getUsers(): import("typeorm").Repository<import("../../entities/user.entity").User>;
    getOneUser(userId: string): Promise<import("../../entities/user.entity").User>;
    create(payload: CreateUserDTO): Promise<import("../../entities/user.entity").User>;
    logIn(payload: CreateUserDTO): Promise<import("../../entities/user.entity").User>;
    catch(error: any): void;
    deleteUser(userId: string): Promise<void>;
}
