import { Controller, Get,  Post,  Param,  Body, Patch, Delete  } from '@nestjs/common';
import { CreateCustomerDTO, UpdateCustomerDTO } from 'src/dtos/customer.dtos'; 
import { CustomerService } from 'src/services/customer/customer.service';

@Controller('customers')
export class CustomerController {
  constructor( private customerService: CustomerService) {};
  @Get('')
  getCustomer(){
    return this.customerService.findAll();
  }

  @Get(':customerId')
  getOneCustomer(@Param('customerId') customerId: string) {
    return this.customerService.findOne(+customerId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDTO){
   try {
    const customer = this.customerService.create(payload);
    return customer;
   }catch(error){
     console.error(); 
   }
    
  }
  
  @Patch(':customerId')
  update(@Param('customerId') customerId: number, @Body() payload: UpdateCustomerDTO){
    return this.customerService.update(+customerId, payload);
  }
  
  @Delete(':customerId')
  async deleteCustomer(@Param('customerId') customerId: string): Promise<void> {
    const customer = parseInt(customerId, 10);
    await this.customerService.delete(customer);
  }
}
