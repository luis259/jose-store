import { Repository } from 'typeorm';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dtos';
import { Product } from 'src/entities/product.entity';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Repository<Product>>;
    findOne(id: number): Promise<Product>;
    create(payload: CreateProductDTO): Promise<Product>;
    update(id: number, payload: UpdateProductDTO): Promise<Product>;
}
