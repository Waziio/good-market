import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const config = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      models: [User, Category, Product],
      autoLoadModels: true,
      synchronize: true,
      retryAttempts: 3,
    }),
    AuthModule,
    UserModule,
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
