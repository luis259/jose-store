import { IsString, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDTO {

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsNotEmpty()
  readonly password: string;

}


export class UpdateUserDTO extends PartialType(CreateUserDTO){
 
}