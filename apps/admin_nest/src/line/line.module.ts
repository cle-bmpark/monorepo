import { Module } from '@nestjs/common';
import { LineResolver } from './line.resolver';
import { LineService } from './line.service';

@Module({
  providers: [LineResolver, LineService],
})
export class LineModule {}
