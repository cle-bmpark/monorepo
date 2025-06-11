import { TempStatusResolver } from '@/temp_status/temp_status.resolver';
import { TempStatusService } from '@/temp_status/temp_status.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [TempStatusResolver, TempStatusService],
})
export class TempStatusModule {}
