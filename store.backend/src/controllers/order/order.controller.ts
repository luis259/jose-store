import { Controller, Get, Param } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get(':orderId')
  getCustomer(@Param('orderId') orderId: string) {
    return `the name of the customer is ${orderId}`;
  }
}
