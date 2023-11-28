export declare class CreateCustomerDTO {
    readonly name: string;
    readonly lastname: string;
    readonly age: number;
    readonly email: string;
    readonly phone: string;
}
declare const UpdateCustomerDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCustomerDTO>>;
export declare class UpdateCustomerDTO extends UpdateCustomerDTO_base {
}
export {};
