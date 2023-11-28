import { IsString, IsNumber, IsNotEmpty, IsPositive } from "class-validator";
import { PartialType } from "@nestjs/mapped-types"

export class CreateCustomerDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastname: string;
   
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly age: number;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO){

}