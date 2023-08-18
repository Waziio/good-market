import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { GetProductsDto } from './dto/getProductsDto';
import { UpdateProductDto } from './dto/updateProductDto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly product: ProductService) {}

  @Get('')
  getAll(@Query() getProductsDto: GetProductsDto) {
    return this.product.getAll(getProductsDto);
  }

  @Post('')
  create(@Body() createProductDto: CreateProductDto) {
    return this.product.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.product.update(parseInt(id), updateProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.product.delete(parseInt(id));
  }
}
