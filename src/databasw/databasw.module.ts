import { Module } from '@nestjs/common';
import { DatabaswService } from './databasw.service';

@Module({
  providers: [DatabaswService],
  exports: [DatabaswService],
})
export class DatabaswModule {}
