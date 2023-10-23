import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Category } from './category/category.model';
import { Characteristics } from './characteristics/characteristics.model';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const categoriesToAdd = [
    {
      name: 'Voiture',
      characteristics: [
        { name: 'Marque', type: 'text' },
        { name: 'Modèle', type: 'text' },
        { name: 'Kilométrage', type: 'number' },
      ],
    },
    {
      name: 'Vêtements',
      characteristics: [
        { name: 'Taille', type: 'text' },
        { name: 'Couleur', type: 'text' },
      ],
    },
  ];

  for (const categoryData of categoriesToAdd) {
    const existingCategory = await Category.findOne({
      where: { name: categoryData.name },
    });

    if (!existingCategory) {
      const newCategory = await Category.create(categoryData);

      // Ajouter les caractéristiques à la catégorie nouvellement créée
      for (const characteristic of categoryData.characteristics) {
        await Characteristics.create({
          name: characteristic.name,
          type: characteristic.type,
          categoryId: newCategory.id,
        });
      }
    }
  }

  await app.listen(8080);
}
bootstrap();
