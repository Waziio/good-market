import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly category: CategoryService) {}

  @Get('')
  getAll(@Query("name") name : string) {
    const filter = name ? name : undefined
    return this.category.findAll(filter);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.category.findOneById(parseInt(id));
  }
}
