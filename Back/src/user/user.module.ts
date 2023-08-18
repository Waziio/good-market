import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
