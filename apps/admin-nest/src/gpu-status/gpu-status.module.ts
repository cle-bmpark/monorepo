import { GpuStatus } from '@/gpu-status/entities/gpu-status.entity';
import { GpuStatusResolver } from '@/gpu-status/gpu-status.resolver';
import { GpuStatusService } from '@/gpu-status/gpu-status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GpuStatus])],
  providers: [GpuStatusResolver, GpuStatusService],
})
export class GpuStatusModule {}
