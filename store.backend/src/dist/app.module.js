"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("./controllers/products/products.controller");
const categories_controller_1 = require("./controllers/categories/categories.controller");
const user_controller_1 = require("./controllers/user/user.controller");
const order_controller_1 = require("./controllers/order/order.controller");
const customer_controller_1 = require("./controllers/customer/customer.controller");
const brand_controller_1 = require("./controllers/brand/brand.controller");
const product_service_1 = require("./services/product/product.service");
const customer_service_1 = require("./services/customer/customer.service");
const user_service_1 = require("./services/user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const customer_entity_1 = require("./entities/customer.entity");
const product_entity_1 = require("./entities/product.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'jose_store',
                entities: [user_entity_1.User, customer_entity_1.Customer, product_entity_1.Product],
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
                logger: 'advanced-console',
                dropSchema: false,
                cache: false,
                extra: {
                    connectionLimit: 10,
                }
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, customer_entity_1.Customer, product_entity_1.Product])
        ],
        controllers: [
            products_controller_1.ProductsController,
            categories_controller_1.CategoriesController,
            user_controller_1.UserController,
            order_controller_1.OrderController,
            brand_controller_1.BrandController,
            customer_controller_1.CustomerController,
        ],
        providers: [product_service_1.ProductsService, customer_service_1.CustomerService, user_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map