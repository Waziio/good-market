import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllUsersDto } from './dto/getAllUsersDto';
import { ResetPwdDto } from './dto/resetPwdDto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

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

  async resetPwd(id: number, resetPwdDto: ResetPwdDto) {
    const { old_password, new_password } = resetPwdDto;

    // Check if old password is correct
    const { password } = await this.userModel.findByPk(id);

    if (bcrypt.compare(old_password, password)) {
      // update password
      const hash = await bcrypt.hash(new_password, 10);
      await this.userModel.update({ password: hash }, { where: { id: id } });

      return { message: 'Success !' };
    }
  }

  async delete(id: number): Promise<Object> {
    const user_deleted = await this.userModel.destroy({ where: { id: id } });

    if (!user_deleted) throw new NotFoundException();

    return { message: 'Success !' };
  }
}
