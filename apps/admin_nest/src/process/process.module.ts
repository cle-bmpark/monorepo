import { Module } from '@nestjs/common';
import { ProcessResolver } from './process.resolver';
import { ProcessService } from './process.service';

@Module({
  providers: [ProcessResolver, ProcessService],
})
export class ProcessModule {}
