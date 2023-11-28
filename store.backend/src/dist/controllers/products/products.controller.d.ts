import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/product/product.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProductFilter(): string;
    getOne(productId: string): Promise<import("../../entities/product.entity").Product>;
    getProducts(): Promise<import("typeorm").Repository<import("../../entities/product.entity").Product>>;
    create(payload: CreateProductDTO): Promise<import("../../entities/product.entity").Product>;
    update(productId: number, payload: UpdateProductDTO): Promise<import("../../entities/product.entity").Product>;
    delete(productId: number): {
        productId: number;
    };
}
