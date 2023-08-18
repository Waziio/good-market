import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService],
  imports: [SequelizeModule.forFeature([Category])],
  exports: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
