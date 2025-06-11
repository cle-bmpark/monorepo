import { ProcessResolver } from '@/process/process.resolver';
import { ProcessService } from '@/process/process.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ProcessResolver, ProcessService],
})
export class ProcessModule {}
