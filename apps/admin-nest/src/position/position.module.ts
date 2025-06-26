import { Position } from '@/position/entities/position.entity';
import { PositionResolver } from '@/position/position.resolver';
import { PositionService } from '@/position/position.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  providers: [PositionResolver, PositionService],
})
export class PositionModule {}
