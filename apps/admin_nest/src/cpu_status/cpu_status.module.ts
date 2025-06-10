import { Module } from '@nestjs/common';
import { CpuStatusResolver } from './cpu_status.resolver';
import { CpuStatusService } from './cpu_status.service';

@Module({
  providers: [CpuStatusResolver, CpuStatusService],
})
export class CpuStatusModule {}
