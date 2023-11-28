import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive  } from 'class-validator'

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
  
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO){
  
}