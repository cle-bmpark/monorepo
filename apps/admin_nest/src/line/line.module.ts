import { LineResolver } from '@/line/line.resolver';
import { LineService } from '@/line/line.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [LineResolver, LineService],
})
export class LineModule {}
