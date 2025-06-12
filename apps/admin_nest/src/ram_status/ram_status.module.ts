import { RamStatus } from '@/ram_status/entities/ram_status.entity';
import { RamStatusResolver } from '@/ram_status/ram_status.resolver';
import { RamStatusService } from '@/ram_status/ram_status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RamStatus])],
  providers: [RamStatusResolver, RamStatusService],
})
export class RamStatusModule {}
