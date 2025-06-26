import { RamStatus } from '@/ram-status/entities/ram-status.entity';
import { RamStatusResolver } from '@/ram-status/ram-status.resolver';
import { RamStatusService } from '@/ram-status/ram-status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RamStatus])],
  providers: [RamStatusResolver, RamStatusService],
})
export class RamStatusModule {}
