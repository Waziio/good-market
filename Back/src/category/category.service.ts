import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private category: typeof Category) {}

  async findAll(name?: string) {
    if (name) {
      return this.category.findAll({where: {name: name}});
    } else {
      return this.category.findAll();
    }
  }

  async findOneById(id: any) {
    return this.category.findOne({ where: { id: id } });
  }

  async findOneByName(name: string) {
    return this.category.findOne({ where: { name: name } });
  }
}
