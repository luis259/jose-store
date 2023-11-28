"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("../../entities/customer.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CustomerService = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async findAll() {
        const customer = await this.customerRepository.find();
        const simplifiedCustomers = customer.map(customer => ({
            id: customer.customerId,
            name: customer.name,
            lastname: customer.lastname,
            age: customer.age,
            email: customer.email,
            phone: customer.phone,
            products: customer.products
        }));
        return simplifiedCustomers;
    }
    async findOne(customerId) {
        const customer = this.customerRepository.findOne({ where: { customerId: customerId } });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with id:${customerId} not found`);
        }
        return customer;
    }
    async create(payload) {
        try {
            console.log(payload);
            const newCustomer = this.customerRepository.create(payload);
            console.log(newCustomer);
            return await this.customerRepository.save(newCustomer);
        }
        catch (error) {
            console.error(error);
        }
    }
    async update(customerId, payload) {
        let customer = await this.findOne(customerId);
        if (!customer) {
            throw new common_1.NotFoundException(`Customer ${customerId} not found`);
        }
        customer = { ...customer, ...payload };
        customer = await this.customerRepository.save(customer);
        return customer;
    }
    async delete(customerId) {
        const customer = await this.findOne(customerId);
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with ID #${customerId} not found`);
        }
        await this.customerRepository.remove(customer);
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CustomerService);
//# sourceMappingURL=customer.service.js.map