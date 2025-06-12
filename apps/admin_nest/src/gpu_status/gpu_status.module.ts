import { GpuStatus } from '@/gpu_status/entities/gpu_status.entity';
import { GpuStatusResolver } from '@/gpu_status/gpu_status.resolver';
import { GpuStatusService } from '@/gpu_status/gpu_status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GpuStatus])],
  providers: [GpuStatusResolver, GpuStatusService],
})
export class GpuStatusModule {}
