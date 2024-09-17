import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle() // Apply to the entire controller
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUser() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post()
  createUser(@Body() user: Prisma.UserCreateInput) {
    return this.userService.postUser(user);
  }

  @Patch(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() user: Prisma.UserUpdateInput,
  ) {
    return this.userService.patchUser(id, user);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
