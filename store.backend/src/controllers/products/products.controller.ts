import { Controller, Get, Param, Post, Body, Patch, Delete, HttpCode, HttpStatus} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe'
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/product/product.service';
@Controller('products')
export class ProductsController {
  constructor( private productsService: ProductsService ) {}
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne( @Param('productId', ParseIntPipe) productId: string) {
   /*  response.status(200).send({
      message: `product:${productId}`,
    }); */
    return this.productsService.findOne(+productId);
  }
  @Get('')
  getProducts() {
    return this.productsService.findAll(); 
  }
  @Post()
  create(@Body() payload: CreateProductDTO) {
    const product = this.productsService.create(payload)
    return product;
  }
  @Patch(':productId')
  update(@Param('productId') productId: number, @Body() payload: UpdateProductDTO) {
    return this.productsService.update(+productId, payload)
  }
  @Delete(':productId')
  delete(@Param('productId') productId: number) {
      return {
        productId,
      };
  }
}
