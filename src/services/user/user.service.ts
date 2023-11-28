import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dtos';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
   @InjectRepository(User)
   private userRepository: Repository<User>
  ) {}
  
  findAll(){
    return this.userRepository;
  }

  findOne(userId: number) {
    const user = this.userRepository.findOne({ where: { userId: userId } });
    if(!user){
      throw new NotFoundException(`User with id:${userId} does not exist`);
    }
    return user;
  }
  
  async create(payload: CreateUserDTO):  Promise<User>{
    const { email, password } = payload;
    const existingUser = this.userRepository.findOne({ where: { email } });
    if(!existingUser){
      throw new ConflictException(`User with email already exists`);
    }
    const saltRounds = 8;
    try {
       const passwordHash = await bcrypt.hash(password, saltRounds);
       const newUser = this.userRepository.create({ 
        email, 
        password: passwordHash, });
       return await this.userRepository.save(newUser);
    }catch(error){
      throw error;
    }
  }


 async logIn(email:string, password:string): Promise<User> {
   try {
     const user = await this.userRepository.findOne({ where: { email } }); 
     if(!user){
       throw new UnauthorizedException('Invalid credentials');
     }  
     const isPasswordValid = await bcrypt.compare(password, user.password);

     if (!isPasswordValid) {
       throw new UnauthorizedException('Invalid credentials');
     }
     return user;
   } catch (error) {
     throw error;
   }
 } 
}
