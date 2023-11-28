import { Product } from './product.entity';
export declare class Customer {
    customerId: number;
    name: string;
    lastname: string;
    age: number;
    email: string;
    phone: string;
    products: Product[];
}
