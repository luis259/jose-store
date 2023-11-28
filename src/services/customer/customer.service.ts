import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDTO, UpdateCustomerDTO } from 'src/dtos/customer.dtos';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>
  ) {}
  

  async findAll() {
    const customer = await this.customerRepository.find();
    const simplifiedCustomers = customer.map(customer =>({
      id: customer.customerId,
      name: customer.name,
      lastname: customer.lastname,
      age: customer.age,
      email: customer.email,
      phone: customer.phone,
      products: customer.products
    }));
    return simplifiedCustomers
  }

  async findOne(customerId: number): Promise<Customer> {
    const customer = this.customerRepository.findOne({ where: { customerId: customerId}});
    if(!customer){
      throw new NotFoundException(`Customer with id:${customerId} not found`);
    }
    return customer;
  }

  async create(payload: CreateCustomerDTO): Promise<Customer>{
    try {
     console.log(payload);
     const newCustomer = this.customerRepository.create(payload);
     console.log(newCustomer);
     return await this.customerRepository.save(newCustomer); 
    } catch (error) {
      console.error(error);
    }
       
  }

  async update(customerId: number, payload: UpdateCustomerDTO): Promise<Customer> {
    let customer = await this.findOne(customerId);
    if(!customer){
      throw new NotFoundException(`Customer ${customerId} not found`);
    }
    customer = { ...customer, ...payload };
    customer = await this.customerRepository.save(customer);

    return customer;
  }

  async delete(customerId: number):Promise<void>{
    const customer = await this.findOne(customerId);
    if(!customer){
      throw new NotFoundException(`Customer with ID #${customerId} not found`);
    }
    await this.customerRepository.remove(customer);
  }

}
