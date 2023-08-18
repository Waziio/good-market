import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { GetProductsDto } from './dto/getProductsDto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly product: ProductService) {}

  @Get('/')
  getAll(@Query() getProductsDto: GetProductsDto) {
    return this.product.getAll(getProductsDto);
  }

  @Post('/')
  create(@Body() createProductDto: CreateProductDto) {
    return this.product.create(createProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.product.delete(parseInt(id));
  }
}
