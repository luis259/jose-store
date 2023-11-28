import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dtos';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private counterId = 1;
  private users: User[] = [
    {
      userId: 1,
      email: 'josejo@gmail.com',
      password: '123456',
    },
  ];
  
  findAll(){
    return this.users;
  }

  findOne(userId: number) {
    const user = this.users.find((item) => item.userId === userId);
    if(!user){
      throw new NotFoundException(`User with id:${userId} does not exist`);
    }
    return user;
  }

  async create(payload: CreateUserDTO){
    console.log(payload);
    this.counterId = this.counterId + 1;
    const saltRounds = 8;
    try {
      const passwordHash = await bcrypt.hash(payload.password, saltRounds )
      const newUser: User = {
      userId: this.counterId,
      email: payload.email,
      password: passwordHash,
    };
    this.users.push(newUser);
    return newUser;
   }catch (error) {
    throw error;
   }    
  }


 /*  async logIn(payload: ) */
}
