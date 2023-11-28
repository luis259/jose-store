import { Customer } from 'src/entities/customer.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    customer: Customer;
}
