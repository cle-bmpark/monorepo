import { Module } from '@nestjs/common';
import { TempStatusResolver } from './temp_status.resolver';
import { TempStatusService } from './temp_status.service';

@Module({
  providers: [TempStatusResolver, TempStatusService],
})
export class TempStatusModule {}
