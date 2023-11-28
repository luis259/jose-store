import { CreateCustomerDTO, UpdateCustomerDTO } from 'src/dtos/customer.dtos';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findAll(): Promise<{
        id: number;
        name: string;
        lastname: string;
        age: number;
        email: string;
        phone: string;
        products: import("../../entities/product.entity").Product[];
    }[]>;
    findOne(customerId: number): Promise<Customer>;
    create(payload: CreateCustomerDTO): Promise<Customer>;
    update(customerId: number, payload: UpdateCustomerDTO): Promise<Customer>;
    delete(customerId: number): Promise<void>;
}
