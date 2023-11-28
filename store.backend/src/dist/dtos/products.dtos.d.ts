export declare class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
}
declare const UpdateProductDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDTO>>;
export declare class UpdateProductDTO extends UpdateProductDTO_base {
}
export {};
