import { CreateCustomerDTO, UpdateCustomerDTO } from 'src/dtos/customer.dtos';
import { CustomerService } from 'src/services/customer/customer.service';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    getCustomer(): Promise<{
        id: number;
        name: string;
        lastname: string;
        age: number;
        email: string;
        phone: string;
        products: import("../../entities/product.entity").Product[];
    }[]>;
    getOneCustomer(customerId: string): Promise<import("../../entities/customer.entity").Customer>;
    create(payload: CreateCustomerDTO): Promise<import("../../entities/customer.entity").Customer>;
    update(customerId: number, payload: UpdateCustomerDTO): Promise<import("../../entities/customer.entity").Customer>;
    deleteCustomer(customerId: string): Promise<void>;
}
