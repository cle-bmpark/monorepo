import { TempStatus } from '@/temp-status/entities/temp-status.entity';
import { TempStatusResolver } from '@/temp-status/temp-status.resolver';
import { TempStatusService } from '@/temp-status/temp-status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TempStatus])],
  providers: [TempStatusResolver, TempStatusService],
})
export class TempStatusModule {}
