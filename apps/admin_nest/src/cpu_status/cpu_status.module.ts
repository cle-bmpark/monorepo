import { CpuStatusResolver } from '@/cpu_status/cpu_status.resolver';
import { CpuStatusService } from '@/cpu_status/cpu_status.service';
import { CpuStatus } from '@/cpu_status/entities/cpu_status.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CpuStatus])],
  providers: [CpuStatusResolver, CpuStatusService],
})
export class CpuStatusModule {}
