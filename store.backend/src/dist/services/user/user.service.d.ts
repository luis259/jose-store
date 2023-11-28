import { CreateUserDTO } from 'src/dtos/user.dtos';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Repository<User>;
    findOne(userId: number): Promise<User>;
    create(payload: CreateUserDTO): Promise<User>;
    logIn(email: string, password: string): Promise<User>;
    delete(userId: number): Promise<void>;
}
