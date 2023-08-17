import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'perso',
      models: [User, Category],
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    CategoryModule,
  ],
})
export class AppModule {}
