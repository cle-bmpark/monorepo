import { ProgramResolver } from '@/program/program.resolver';
import { ProgramService } from '@/program/program.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ProgramResolver, ProgramService],
})
export class ProgramModule {}
