import {
  Controller,
  Get,
  Param,
  Query,
  Delete,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { GetAllUsersDto } from './dto/getAllUsersDto';
import { ResetPwdDto } from './dto/resetPwdDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Get()
  getAll(@Query() getAllUsersDto: GetAllUsersDto) {
    return this.user.findAll(getAllUsersDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.user.findOneById(parseInt(id));
  }

  @Put(':id')
  update(@Param('id') id: string,@Body() updateUserDto: UpdateUserDto) {
    return this.user.update(parseInt(id), updateUserDto);
  }

  @Put(':id/reset')
  resetPwd(@Param('id') id: string, @Body() resetPwdDto: ResetPwdDto) {
    return this.user.resetPwd(parseInt(id), resetPwdDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.user.delete(parseInt(id));
  }
}
