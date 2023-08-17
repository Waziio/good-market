import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOneById(id: any): Promise<User> {
    return this.userModel.findOne({ where: { id: id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email: email } });
  }

  async create(user: any) {
    this.userModel.create(user);
  }
}
