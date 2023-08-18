import { Controller, Get, Param, Query, Delete } from '@nestjs/common';
import { GetAllUsersDto } from './dto/getAllUsersDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly user: UsersService) {}

  @Get()
  getAll(@Query() getAllUsersDto: GetAllUsersDto) {
    return this.user.findAll(getAllUsersDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.user.findOneById(parseInt(id));
  }
  
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.user.delete(parseInt(id));
  }
}
