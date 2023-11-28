import { Controller, Param, Get } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get(':brandId')
  getbrand(@Param('brandId') brandId: string) {
    return `the name of the customer is ${brandId}`;
  }

}
