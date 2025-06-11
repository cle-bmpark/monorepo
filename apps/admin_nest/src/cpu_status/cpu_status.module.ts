import { CpuStatusResolver } from '@/cpu_status/cpu_status.resolver';
import { Module } from '@nestjs/common';
import { CpuStatusService } from './cpu_status.service';

@Module({
  providers: [CpuStatusResolver, CpuStatusService],
})
export class CpuStatusModule {}
