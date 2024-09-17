import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaswService } from 'src/databasw/databasw.service';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaswService) {}

  async findAllUsers() {
    return this.databaseService.user.findMany();
  }

  async findUserById(id: string) {
    return this.databaseService.user.findUnique({ where: { id } });
  }

  async postUser(user: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: user,
    });
  }

  async patchUser(id: string, user: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: user,
    });
  }

  async deleteUser(id: string) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
