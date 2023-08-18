import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductsDto } from './dto/getProductsDto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private product: typeof Product) {}

  async getAll(getProductsDto: GetProductsDto) {
    const { categoryId, name } = getProductsDto;
    let filter = { where: {} };

    if (categoryId) {
      filter['where']["categoryId"] = categoryId;
    }

    if (name) {
      filter['where']["name"] = name;
    }
    console.log(filter)

    return this.product.findAll(filter);
  }

  async create(createProductDto: any) {
    const product = await this.product.create(createProductDto);
    return { message: 'Success !', product: product };
  }

  async delete(id: number) {
    await this.product.destroy({ where: { id: id } });
    return { message: 'Success !' };
  }
}
