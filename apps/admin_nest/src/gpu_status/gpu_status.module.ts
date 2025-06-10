import { Module } from '@nestjs/common';
import { GpuStatusResolver } from './gpu_status.resolver';
import { GpuStatusService } from './gpu_status.service';

@Module({
  providers: [GpuStatusResolver, GpuStatusService],
})
export class GpuStatusModule {}
