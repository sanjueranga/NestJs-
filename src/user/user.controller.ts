import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @Patch()
  editUser(
    @GetUser('id') user:User,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(user.id, dto);
  }

  @Delete(':id')
  deleteUser(@Param('id',ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
