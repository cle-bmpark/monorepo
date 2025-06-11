import { GpuStatusResolver } from '@/gpu_status/gpu_status.resolver';
import { GpuStatusService } from '@/gpu_status/gpu_status.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [GpuStatusResolver, GpuStatusService],
})
export class GpuStatusModule {}
