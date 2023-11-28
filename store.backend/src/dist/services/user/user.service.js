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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../entities/user.entity");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return this.userRepository;
    }
    findOne(userId) {
        const user = this.userRepository.findOne({ where: { userId: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id:${userId} does not exist`);
        }
        return user;
    }
    async create(payload) {
        const { email, password } = payload;
        const existingUser = this.userRepository.findOne({ where: { email } });
        if (!existingUser) {
            throw new common_1.ConflictException(`User with email already exists`);
        }
        const saltRounds = 8;
        try {
            const passwordHash = await bcrypt.hash(password, saltRounds);
            const newUser = this.userRepository.create({
                email,
                password: passwordHash,
            });
            return await this.userRepository.save(newUser);
        }
        catch (error) {
            throw error;
        }
    }
    async logIn(email, password) {
        try {
            const user = await this.userRepository.findOne({ where: { email } });
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(userId) {
        const user = await this.findOne(userId);
        if (!user) {
            throw new common_1.NotFoundException(`User with id:${userId} not found`);
        }
        await this.userRepository.remove(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map