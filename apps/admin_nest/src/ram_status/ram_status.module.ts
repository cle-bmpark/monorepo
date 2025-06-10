import { Module } from '@nestjs/common';
import { RamStatusResolver } from './ram_status.resolver';
import { RamStatusService } from './ram_status.service';

@Module({
  providers: [RamStatusResolver, RamStatusService],
})
export class RamStatusModule {}
