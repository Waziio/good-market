import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignupDto } from './dto/signupDto';
import {
  ConflictException,
  NotFoundException,
  HttpException,
} from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signinDto';
import { generateJwt } from 'src/utils/utils';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(signup: SignupDto) {
    const { email, username, password } = signup;
    const isEmailExist = await this.userService.findOneByEmail(email);
    const isUsernameExist = await this.userService.findOneByUsername(username);
    // If user (email) already exist
    if (isEmailExist || isUsernameExist) throw new ConflictException();
    const hash = await bcrypt.hash(password, 10);
    await this.userService.create({
      email: email,
      username: username,
      password: hash,
    });
    return { message: 'Success !' };
  }

  async signin(signin: SigninDto) {
    const { email, password } = signin;
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new NotFoundException("User");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) throw new HttpException('Invalid password', 400);

    const connected_user = {
      id: user.id,
      email: user.email,
      username: user.username,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    const token = generateJwt(user.id, user.email, user.username);

    return { user: connected_user, jwt: token };
  }
}
