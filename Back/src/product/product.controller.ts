import { Body, Controller, Get } from '@nestjs/common';
import { GetProductsDto } from './dto/getProductsDto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly product: ProductService) {}

    @Get("/")
    getAll(@Body() getProductsDto: GetProductsDto) {
        return this.product.getAll(getProductsDto)
    }
}
