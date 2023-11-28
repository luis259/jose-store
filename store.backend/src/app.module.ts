import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UserController } from './controllers/user/user.controller';
import { OrderController } from './controllers/order/order.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductsService } from './services/product/product.service';
import { CustomerService } from './services/customer/customer.service';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Customer } from './entities/customer.entity';
import { Product } from './entities/product.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'jose_store',
      entities: [User, Customer, Product],
      synchronize: true,
      autoLoadEntities:true,
      logging: true,
      logger: 'advanced-console',
      dropSchema:false,
      cache: false,
      extra: {
        connectionLimit: 10,
      }
   }),
   TypeOrmModule.forFeature([User, Customer, Product])
  ],
  controllers: [
    ProductsController,
    CategoriesController,
    UserController,
    OrderController,
    BrandController,
    CustomerController,
  ],
  providers: [ProductsService, CustomerService, UserService],
})
export class AppModule {}
