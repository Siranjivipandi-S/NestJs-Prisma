import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaswModule } from './databasw/databasw.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    UserModule,
    DatabaswModule,
    ThrottlerModule.forRoot([
      {
        name: 'shortLimit',
        limit: 3,
        ttl: 2000,
      },
      {
        name: 'longLimit',
        limit: 13,
        ttl: 20000,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
