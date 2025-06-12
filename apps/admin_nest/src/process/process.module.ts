import { Process } from '@/process/entities/process.entity';
import { ProcessResolver } from '@/process/process.resolver';
import { ProcessService } from '@/process/process.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Process])],
  providers: [ProcessResolver, ProcessService],
})
export class ProcessModule {}
