import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductsDto } from './dto/getProductsDto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product) private product: typeof Product) {}


  async getAll(getProductsDto: GetProductsDto) {
    const { category, name } = getProductsDto;
    let filter = {};

    if (category) {
      filter[category] = category;
    }

    if (name) {
      filter[name] = name;
    }

    const products = this.product.findAll()
  }
}
