import { Module } from '@nestjs/common';
import { PositionResolver } from './position.resolver';
import { PositionService } from './position.service';

@Module({
  providers: [PositionResolver, PositionService],
})
export class PositionModule {}
