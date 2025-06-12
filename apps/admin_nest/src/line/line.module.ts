import { Line } from '@/line/entities/line.entity';
import { LineResolver } from '@/line/line.resolver';
import { LineService } from '@/line/line.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Line])],
  providers: [LineResolver, LineService],
})
export class LineModule {}
