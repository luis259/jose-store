export declare class CreateUserDTO {
    readonly email: string;
    readonly password: string;
}
declare const UpdateUserDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDTO>>;
export declare class UpdateUserDTO extends UpdateUserDTO_base {
}
export {};
