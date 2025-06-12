import { TempStatus } from '@/temp_status/entities/temp_status.entity';
import { TempStatusResolver } from '@/temp_status/temp_status.resolver';
import { TempStatusService } from '@/temp_status/temp_status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TempStatus])],
  providers: [TempStatusResolver, TempStatusService],
})
export class TempStatusModule {}
