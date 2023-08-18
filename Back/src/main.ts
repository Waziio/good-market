import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Category } from './category/category.model';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const categoriesToAdd = [
    { name: 'Voiture' },
    { name: 'Vêtements' },
    { name: 'Livres' },
  ];

  for (const categoryData of categoriesToAdd) {
    const existingCategory = await Category.findOne({
      where: { name: categoryData.name },
    });

    if (!existingCategory) {
      await Category.create(categoryData);
    }
  }
  await app.listen(3000);
}
bootstrap();
