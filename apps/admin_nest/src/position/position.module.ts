import { PositionResolver } from '@/position/position.resolver';
import { PositionService } from '@/position/position.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PositionResolver, PositionService],
})
export class PositionModule {}
