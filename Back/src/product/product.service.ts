import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductsDto } from './dto/getProductsDto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private product: typeof Product) {}

  async getAll(getProductsDto: GetProductsDto) {
    const { category, name } = getProductsDto;
    let filter = { where: {} };

    if (category) {
      filter['where'][category] = category;
    }

    if (name) {
      filter['where'][name] = name;
    }

    return this.product.findAll(filter);
  }
}
