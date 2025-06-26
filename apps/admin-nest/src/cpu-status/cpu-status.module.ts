import { CpuStatusResolver } from '@/cpu-status/cpu-status.resolver';
import { CpuStatusService } from '@/cpu-status/cpu-status.service';
import { CpuStatus } from '@/cpu-status/entities/cpu-status.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CpuStatus])],
  providers: [CpuStatusResolver, CpuStatusService],
})
export class CpuStatusModule {}
