import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dtos';
import { Product } from 'src/entities/product.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) 
    private readonly productRepository: Repository<Product>
  ) {}

  async findAll() {
    return this.productRepository;
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id: id }});
    if(!product){
      throw new NotFoundException(`Product #${id} not found`);    
    } 
    return product;
  }

  async create(payload: CreateProductDTO) {
    try {
      console.log(payload);
      const newProduct = this.productRepository.create(payload);
      console.log(newProduct);
      return await this.productRepository.save(newProduct); 
     } catch (error) {
       console.error(error);
     }
        
  }

  async update(id: number, payload: UpdateProductDTO) {
    let products = await this.findOne(id);
    if(!products){
      throw new NotFoundException(`Customer ${id} not found`);
    }  
    products = { ...products, ...payload };
    products = await this.productRepository.save(products);

    return products;
  }

  async delete(id: number):Promise<void>{
    const product = await this.findOne(id);
    if(!product){
      throw new NotFoundException(`Customer with ID #${id} not found`);
    }
    await this.productRepository.remove(product);
  }
}
