import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { Characteristics } from 'src/characteristics/characteristics.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private category: typeof Category) {}

  async findAll(name?: string) {
    if (name) {
      return await this.category.findAll({ where: { name: name } });
    } else {
      return await this.category.findAll();
    }
  }

  async findOneById(id: any) {
    const category = await this.category.findByPk(id, {
      include: [Characteristics],
    });

    if (!category) throw new NotFoundException();
    return category;
  }

  async findOneByName(name: string) {
    return this.category.findOne({ where: { name: name } });
  }
}
