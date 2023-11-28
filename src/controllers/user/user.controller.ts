import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dtos';
import { UserService } from 'src/services/user/user.service'
@Controller('user')
export class UserController {
  constructor( private userServices: UserService) {};
  @Get()
  getUsers(){
    return this.userServices.findAll();
  }
  @Get(':userId')
  getOneUser(@Param('userId') userId: string) {
    return this.userServices.findOne(+userId);
  }

  @Post()
  create(@Body() payload: CreateUserDTO){
    const user = this.userServices.create(payload);
    return user
  }

  /* @Post()
  logIn() */

}
