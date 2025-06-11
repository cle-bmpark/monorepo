import { RamStatusResolver } from '@/ram_status/ram_status.resolver';
import { RamStatusService } from '@/ram_status/ram_status.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [RamStatusResolver, RamStatusService],
})
export class RamStatusModule {}
