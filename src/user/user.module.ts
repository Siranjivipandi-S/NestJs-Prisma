import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaswModule } from 'src/databasw/databasw.module';

@Module({
  imports: [DatabaswModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
