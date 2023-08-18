import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllUsersDto } from './dto/getAllUsersDto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(getAllUsersDto: GetAllUsersDto): Promise<User[]> {
    const { email, username } = getAllUsersDto;
    let filter = { attributes: { exclude: ['password'] }, where: {} };

    if (email) {
      filter['where']['email'] = email;
    }

    if (username) {
      filter['where']['username'] = username;
    }

    return this.userModel.findAll(filter);
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      attributes: { exclude: ['password'] },
      where: { id: id },
      include: 'products',
    });

    if (!user) throw new NotFoundException();

    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email: email } });
  }

  async create(user: any) {
    await this.userModel.create(user);
  }

  async delete(id: number): Promise<Object> {
    const user_deleted = await this.userModel.destroy({ where: { id: id } });

    if (!user_deleted) throw new NotFoundException();

    return { message: 'Success !' };
  }
}
